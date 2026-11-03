<template>
    <div class="group-has-[div]:mt-0 [&:not(:first-child)]:mt-5">
        <UiCard class="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex flex-col gap-1.5">
                <UiCardTitle>
                    <ContentSlot :use="$slots.title" unwrap="p" />
                </UiCardTitle>
                <UiCardDescription>
                    <ContentSlot :use="$slots.description" unwrap="p" />
                </UiCardDescription>
            </div>
            <NuxtLink to="https://sympa.inria.fr/sympa/subscribe/epoc-newsletter?previous_action=info" target="_blank" class="shrink-0">
                <UiButton>
                    <SmartIcon name="lucide:mail" class="mr-1" />
                    <ContentSlot :use="$slots.button" unwrap="p" />
                </UiButton>
            </NuxtLink>
        </UiCard>
    </div>
</template>

<script setup lang="ts">
defineSlots();
</script>
