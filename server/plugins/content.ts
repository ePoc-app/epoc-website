export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('content:file:beforeParse', (file: { _id: string; body: string; }) => {
        const appConfig = useAppConfig();
        if (file._id.endsWith('.md')) {
            file.body = file.body.replace(/{{\s*\$data\.(\w+)\s*(?:\|\|\s*'([^']*)'\s*)?}}/g, (_, variable, defaultValue) =>
                appConfig.shadcnDocs?.data?.[variable] ?? defaultValue ?? ''
            );
        }
    })
})
