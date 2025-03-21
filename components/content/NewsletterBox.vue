<template>
    <div class="w-full">
        <form @submit.prevent="handleSubmit" class="flex space-x-2">
            <input
                type="email"
                :placeholder="placeholder"
                v-model="email"
                class="flex-grow p-1 px-2 border rounded-md"
                required
            />
            <UiButton size="sm">
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
