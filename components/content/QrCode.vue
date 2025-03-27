<template>
    <UiCard class="mx-auto max-w-2xl">
        <UiCardContent class="mt-6 flex flex-col gap-4">
            <div class="p-5 bg-white mx-auto rounded-md">
                <div ref="canvas" class="size-[300px]"></div>
            </div>
            <UiButton :disabled="!saveEnabled" @click="saveQRCode" class="w-fit self-center" variant="outline">
                <SmartIcon name="lucide:download" />
                {{ $t("Download QR Code") }}
            </UiButton>
        </UiCardContent>

        <UiCardFooter>
            <form @submit.prevent="generateQRCode" class="flex flex-col gap-4 w-full">
                <UiInput placeholder="https://mynextcloud.com/s/mlsdfkdzepqdkxq/download" v-model="link" size="sm" />
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

const canvas: Ref<HTMLDivElement | undefined> = ref(undefined);
const saveEnabled = ref(false);

const qrCode: Ref<undefined | QRCodeStyling> = ref(undefined);
const link = ref("");

const loading = ref(false);

async function generateQRCode() {
    loading.value = true;
    saveEnabled.value = false;

    cleanCanvas();
    cleanLink();

    // Clean the canvas for a little time to notify user of change
    await new Promise((resolve) => setTimeout(resolve, 200));

    qrCode.value = new QRCodeStyling({
        width: 300,
        height: 300,
        type: "svg",
        data: link.value,
        dotsOptions: {
            color: "#384258",
            type: "square",
        },
        backgroundOptions: {
            color: "#fff",
        },
        imageOptions: {
            crossOrigin: "anonymous",
            margin: 20,
        },
    });

    qrCode.value.append(canvas.value);
    saveEnabled.value = true;
    loading.value = false;
}

function saveQRCode() {
    if (!qrCode.value) return;

    qrCode.value.download({
        name: "epoc-qr-code",
        extension: "png",
    });
}

function cleanCanvas() {
    if (!canvas.value) return;

    if (canvas.value.children.length > 0) {
        canvas.value.removeChild(canvas.value.children[0]);
    }
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
