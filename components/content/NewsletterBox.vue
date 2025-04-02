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
import { toast } from 'vue-sonner'

const { locale, defaultLocale } = useI18nDocs();
const { proxy } = useScriptMatomoAnalytics();

const email = ref("");

const handleSubmit = () => {
    // Handle the subscription logic here
    const prevEmails = JSON.parse(localStorage.getItem('newsletterEmails')||'[]');
    if (!email.value && !proxy._paq) return;
    if (prevEmails.indexOf(email.value) !== -1) {
      toast.warning('Your email is already subscribed', {
        description: email.value,
        richColors: true
      });
      return;
    }
    const eventName = `Subscribe-${locale.value === defaultLocale ? locale.value : ''}`
    proxy._paq.push(['trackEvent', 'Newsletter', eventName, email.value]);
    toast.success('Your email has been added',{
      description: email.value,
      richColors: true
    });
    prevEmails.push(email.value);
    localStorage.setItem('newsletterEmails', JSON.stringify(prevEmails))
};
defineProps<{
    placeholder: string;
}>();

defineSlots();
</script>
