import { visit } from 'unist-util-visit'

export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('content:file:beforeParse', (file: { _id: string; body: string; }) => {
        const appConfig = useAppConfig();
        if (file._id.endsWith('.md')) {
            file.body = file.body.replace(/{{\s*\$data\.(\w+)\s*(?:\|\|\s*'([^']*)'\s*)?}}/g, (_, variable, defaultValue) =>
                appConfig.shadcnDocs?.data?.[variable] ?? defaultValue ?? ''
            );
        }
    })

    nitroApp.hooks.hook('content:file:afterParse', (file: any) => {
        if (file._id.endsWith('.md')) {
            visit(file.body, (n: any) => n.tag === 'img', (node: any) => {
                console.log(decodeURI(node.props.src))
                node.props.src = encodeURI(decodeURI(node.props.src).replace(/{{\s*\$doc\.(\w+)\s*(?:\|\|\s*'([^']*)'\s*)?}}/g, (_, variable, defaultValue) =>
                    file?.[variable] ?? defaultValue ?? ''
                ));
            })
        }
    })
})
