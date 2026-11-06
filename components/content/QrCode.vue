<template>
    <UiCard class="mx-auto max-w-2xl">
        <UiCardContent class="mt-6 flex flex-col gap-4">
            <div class="mx-auto rounded-md bg-white" :class="{ 'size-[300px]': !saveEnabled }">
                <canvas v-show="saveEnabled" ref="canvas" class="w-[340px] max-w-full rounded-md"></canvas>
            </div>
            <UiButton :disabled="!saveEnabled" @click="saveQRCode" class="w-fit self-center" variant="outline">
                <SmartIcon name="lucide:download" />
                {{ $t("Download QR Code") }}
            </UiButton>
            <UiAlert v-if="check" :variant="check.status === 'error' ? 'destructive' : 'default'">
                <UiAlertTitle class="flex items-center gap-2">
                    <SmartIcon :name="checkIcons[check.status]" :class="{ 'animate-spin': check.status === 'pending' }" />
                    {{ $t(check.title ?? checkTitles[check.status]) }}
                </UiAlertTitle>
                <UiAlertDescription>
                    {{ check.message }}
                    <UiButton v-if="check.suggestedType" class="mt-2 flex" size="sm" variant="outline" @click="switchType(check.suggestedType)">
                        <SmartIcon name="lucide:repeat" />
                        {{ $t(check.suggestedType === "collection" ? "Switch to Collection" : "Switch to ePoc") }}
                    </UiButton>
                </UiAlertDescription>
            </UiAlert>
        </UiCardContent>

        <UiCardFooter>
            <form @submit.prevent="generateQRCode" class="flex w-full flex-col gap-4">
                <div class="flex gap-6">
                    <div v-for="option in types" :key="option.value" class="flex items-center gap-2">
                        <input :id="`qr-type-${option.value}`" v-model="type" type="radio" name="qr-type" :value="option.value" class="accent-primary" />
                        <UiLabel :for="`qr-type-${option.value}`">{{ $t(option.label) }}</UiLabel>
                    </div>
                </div>
                <UiInput :placeholder="placeholders[type]" v-model="link" size="sm" required />
                <UiInput :placeholder="$t('Title (optional)')" v-model="title" size="sm" maxlength="80" />
                <UiButton :disabled="loading" type="submit">
                    <SmartIcon v-if="loading" class="animate-spin" name="lucide:loader-2" />
                    {{ $t("Generate QR Code") }}
                </UiButton>
            </form>
        </UiCardFooter>
    </UiCard>
</template>

<script setup lang="ts">
import QRCodeStyling from "qr-code-styling";

type LinkType = "epoc" | "collection";
type CheckStatus = "pending" | "success" | "warning" | "error";
type Check = { status: CheckStatus; message: string; title?: string; suggestedType?: LinkType };

const { t } = useI18n();

const types: { value: LinkType; label: string }[] = [
    { value: "epoc", label: "ePoc" },
    { value: "collection", label: "Collection" },
];
const placeholders: Record<LinkType, string> = {
    epoc: "https://mynextcloud.com/s/mlsdfkdzepqdkxq/download",
    collection: "https://example.com/epocs/collection.json",
};
const checkIcons: Record<CheckStatus, string> = {
    pending: "lucide:loader-2",
    success: "lucide:circle-check",
    warning: "lucide:triangle-alert",
    error: "lucide:circle-x",
};
const checkTitles: Record<CheckStatus, string> = {
    pending: "Checking the link...",
    success: "Link publicly accessible",
    warning: "Link could not be fully checked",
    error: "Link not accessible",
};

const QR_SIZE = 600;
const PADDING = 40;
const COLOR = "#384258";

const canvas: Ref<HTMLCanvasElement | undefined> = ref(undefined);
const saveEnabled = ref(false);

const qrImage: Ref<undefined | ImageBitmap> = ref(undefined);
const link = ref("");
const title = ref("");
const type = ref<LinkType>("epoc");
const check = ref<undefined | Check>(undefined);

const loading = ref(false);

watch(title, () => drawCanvas());

async function generateQRCode() {
    loading.value = true;
    saveEnabled.value = false;
    check.value = undefined;

    cleanLink();

    // Clean the canvas for a little time to notify user of change
    await new Promise((resolve) => setTimeout(resolve, 200));

    const qrCode = new QRCodeStyling({
        width: QR_SIZE,
        height: QR_SIZE,
        type: "canvas",
        data: link.value,
        image: "/logo-qrcode.png",
        qrOptions: {
            errorCorrectionLevel: "H",
        },
        dotsOptions: {
            color: COLOR,
            type: "square",
        },
        backgroundOptions: {
            color: "#fff",
        },
        imageOptions: {
            crossOrigin: "anonymous",
            margin: 8,
            imageSize: 0.3,
        },
    });

    const blob = (await qrCode.getRawData("png")) as Blob;
    qrImage.value = await createImageBitmap(blob);
    await drawCanvas();

    saveEnabled.value = true;
    loading.value = false;

    checkLink(link.value, type.value);
}

async function drawCanvas() {
    if (!canvas.value || !qrImage.value) return;

    await document.fonts.ready;
    const fontFamily = getComputedStyle(document.body).fontFamily;
    const ctx = canvas.value.getContext("2d")!;
    const width = QR_SIZE + PADDING * 2;

    ctx.font = `bold 34px ${fontFamily}`;
    const titleLines = wrapText(ctx, title.value.trim(), QR_SIZE);
    const titleHeight = titleLines.length * 44;

    canvas.value.width = width;
    canvas.value.height = PADDING + QR_SIZE + 16 + titleHeight + 50 + PADDING / 2;

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, width, canvas.value.height);
    ctx.drawImage(qrImage.value, PADDING, PADDING);

    ctx.fillStyle = COLOR;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    let y = PADDING + QR_SIZE + 16;

    ctx.font = `bold 34px ${fontFamily}`;
    for (const line of titleLines) {
        ctx.fillText(line, width / 2, y);
        y += 44;
    }

    ctx.font = `24px ${fontFamily}`;
    ctx.fillText("epoc.inria.fr", width / 2, y + 12);
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
    if (!text) return [];

    const lines: string[] = [];
    let line = "";
    for (const word of text.split(/\s+/)) {
        const candidate = line ? `${line} ${word}` : word;
        if (line && ctx.measureText(candidate).width > maxWidth) {
            lines.push(line);
            line = word;
        } else {
            line = candidate;
        }
    }
    lines.push(line);
    return lines;
}

function saveQRCode() {
    if (!canvas.value) return;

    const slug = title.value
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    const a = document.createElement("a");
    a.href = canvas.value.toDataURL("image/png");
    a.download = `${slug || "epoc-qr-code"}.png`;
    a.click();
}

async function checkLink(url: string, linkType: LinkType) {
    const isJson = new URL(url, location.href).pathname.endsWith(".json");
    if (linkType === "collection" && !isJson) {
        check.value = {
            status: "warning",
            title: "Link type mismatch",
            message: t("This link is probably an ePoc, not a collection: the app imports links that do not end with .json as an ePoc."),
            suggestedType: "epoc",
        };
        return;
    }
    if (linkType === "epoc" && isJson) {
        check.value = {
            status: "warning",
            title: "Link type mismatch",
            message: t("This link is probably a collection, not an ePoc: the app imports links ending with .json as a collection."),
            suggestedType: "collection",
        };
        return;
    }

    check.value = { status: "pending", message: url };

    let res: Response;
    try {
        res = await fetch(url, { cache: "no-store" });
    } catch {
        try {
            await fetch(url, { mode: "no-cors", cache: "no-store" });
            check.value = {
                status: "warning",
                message: t("The server responds but does not allow the browser to read the file (CORS). The link may still work in the app: test it before sharing."),
            };
        } catch {
            check.value = { status: "error", message: t("The server cannot be reached.") };
        }
        return;
    }

    check.value = await validateResponse(res, linkType);
}

async function validateResponse(res: Response, linkType: LinkType): Promise<Check> {
    if (!res.ok) {
        return { status: "error", message: t("The server responded with error {status}.", { status: res.status }) };
    }

    if (linkType === "collection") {
        try {
            const collection = await res.json();
            const count = Object.keys(collection.ePocs ?? {}).length;
            return collection.ePocs
                ? { status: "success", message: t('Collection "{title}" with {count} ePoc(s).', { title: collection.title, count }) }
                : { status: "error", message: t("The JSON file is not a valid collection (no ePocs field).") };
        } catch {
            return { status: "error", message: t("The file is not a valid JSON file.") };
        }
    }

    const reader = res.body?.getReader();
    const { value } = (await reader?.read()) ?? {};
    reader?.cancel();
    if (value && value[0] === 0x50 && value[1] === 0x4b) {
        return { status: "success", message: t("The file is a valid ePoc archive.") };
    }
    if (res.headers.get("content-type")?.includes("text/html")) {
        return { status: "error", message: t("The link returns a web page instead of the file: use a direct download link.") };
    }
    return { status: "warning", message: t("The file does not look like an ePoc archive (.epoc or .zip).") };
}

function switchType(newType: LinkType) {
    type.value = newType;
    generateQRCode();
}

function cleanLink() {
    if (link.value.includes("drive.google.com")) {
        link.value = link.value.replace("file/d/", "uc?id=");
        link.value = link.value.replace("/view?usp=sharing", "&export=download");
    } else if (link.value.includes("dropbox.com")) {
        link.value = link.value.replace("www.dropbox.com", "dl.dropboxusercontent.com");
    } else if (link.value.includes("github.com")) {
        link.value = link.value.replace("github.com", "raw.githubusercontent.com");
        link.value = link.value.replace("/blob/", "/");
    }
}
</script>
