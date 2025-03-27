<template>
    <div class="w-full">
        <form @submit.prevent="handleSubmit" class="flex space-x-2">
            <UiInput :placeholder="placeholder" type="email" v-model="email" required />
            <UiButton>
                <ContentSlot :use="$slots.button" unwrap="p" />
            </UiButton>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");

const handleSubmit = () => {
    // Handle the subscription logic here
    console.log("Subscribed with email:", email.value);
};
defineProps<{
    placeholder: string;
}>();

defineSlots();
</script>
