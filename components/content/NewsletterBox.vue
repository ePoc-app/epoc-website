<template>
    <div class="w-full space-y-2">
        <form @submit.prevent="handleSubmit" class="flex space-x-2">
            <UiInput :placeholder="placeholder" type="email" v-model="email" required />
            <UiButton :disabled="!turnstileToken">
                <ContentSlot :use="$slots.button" unwrap="p" />
            </UiButton>
        </form>
        <div ref="turnstileContainer" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { toast } from 'vue-sonner'
import envConfig from '~/env.config';

const { locale, defaultLocale } = useI18nDocs();
const { proxy } = useScriptMatomoAnalytics();
const colorMode = useColorMode();

const email = ref("");
const turnstileContainer = ref<HTMLElement>();
const turnstileToken = ref("");
let widgetId: string | undefined;

// En dev : clé de test Cloudflare (passe toujours) et abonnement simulé
const TURNSTILE_TEST_SITE_KEY = '1x00000000000000000000AA';

const loadTurnstile = () => new Promise<any>((resolve, reject) => {
    const w = window as any;
    if (w.turnstile) return resolve(w.turnstile);
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.onload = () => resolve(w.turnstile);
    script.onerror = reject;
    document.head.appendChild(script);
});

onMounted(async () => {
    const turnstile = await loadTurnstile();
    if (!turnstileContainer.value) return;
    widgetId = turnstile.render(turnstileContainer.value, {
        sitekey: import.meta.dev ? TURNSTILE_TEST_SITE_KEY : envConfig.turnstile_site_key,
        theme: colorMode.value === 'dark' ? 'dark' : 'light',
        language: locale.value,
        callback: (token: string) => { turnstileToken.value = token; },
        'expired-callback': () => { turnstileToken.value = ""; },
        'error-callback': () => { turnstileToken.value = ""; },
    });
});

onBeforeUnmount(() => {
    if (widgetId) (window as any).turnstile?.remove(widgetId);
});

const handleSubmit = () => {
    // Handle the subscription logic here
    const prevEmails = JSON.parse(localStorage.getItem('newsletterEmails')||'[]');
    if (!email.value || (!import.meta.dev && !proxy._paq) || !turnstileToken.value) return;
    if (prevEmails.indexOf(email.value) !== -1) {
      toast.warning('Your email is already subscribed', {
        description: email.value,
        richColors: true
      });
      return;
    }
    const eventName = `Subscribe-${locale.value === defaultLocale ? locale.value : ''}`
    if (import.meta.dev) {
      console.info('[dev] Newsletter subscription simulated', { eventName, email: email.value });
    } else {
      proxy._paq.push(['trackEvent', 'Newsletter', eventName, email.value]);
    }
    toast.success('Your email has been added',{
      description: email.value,
      richColors: true
    });
    prevEmails.push(email.value);
    localStorage.setItem('newsletterEmails', JSON.stringify(prevEmails))
    email.value = "";
    turnstileToken.value = "";
    (window as any).turnstile?.reset(widgetId);
};
defineProps<{
    placeholder: string;
}>();

defineSlots();
</script>
