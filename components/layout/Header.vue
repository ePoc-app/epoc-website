<template>
    <header
        class="sticky top-0 z-40 bg-background/80 backdrop-blur-lg"
        :class="{ 'lg:border-b': config.header.border }"
    >
        <div
            class="flex h-14 items-center justify-between gap-2 px-4 md:px-8"
            :class="{ 'border-b lg:border-none': config.header.border, container: config.main.padded }"
        >
            <LayoutHeaderLogo class="hidden flex-1 md:flex" />
            <LayoutMobileNav />
            <LayoutHeaderLogo v-if="config.header.showTitleInMobile" class="flex md:hidden" />
            <LayoutHeaderNav class="hidden flex-1 lg:flex" />
            <div class="flex flex-1 justify-end gap-2">
                <LayoutSearchButton v-if="!config.search.inAside && config.search.style === 'input'" />
                <div class="flex">
                    <LayoutSearchButton v-if="!config.search.inAside && config.search.style === 'button'" />
                    <LangSwitcher v-if="i18nEnabled" />
                    <ThemePopover v-if="config.theme.customizable" />
                    <DarkModeToggle v-if="config.header.darkModeToggle" />
                    <NuxtLink
                        v-for="(link, i) in config.header.links"
                        :key="i"
                        :to="localePath(link?.to)"
                        :target="link?.target"
                    >
                        <UiButton variant="ghost" size="icon" class="flex gap-2">
                            <SmartIcon v-if="link?.icon" :name="link.icon" :size="18" />
                            <span v-if="link.alt" class="sr-only">{{ link.alt }}</span>
                        </UiButton>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div v-if="showToc" class="lg:hidden">
            <LayoutToc is-small />
        </div>
    </header>
    <Toaster />
</template>

<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";
const config = useConfig();
const { i18nEnabled, localePath } = useI18nDocs();
const { page } = useContent();

const showToc = computed(() => {
    return (
        config.value.toc.enable &&
        config.value.toc.enableInMobile &&
        (page.value?._path === "/" ? config.value.toc.enableInHomepage : true)
    );
});
</script>
