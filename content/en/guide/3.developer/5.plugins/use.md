---
title: "Using a Plugin"
description: "Guide to using plugins for ePoc"
icon: "lucide:file-box"
---
This guide will show you how to use a JavaScript plugin in an ePoc.

## Installing a Plugin

1. [Create](create.md) or download plugin files
2. Add a plugin in the ePoc settings
3. Add the plugin's JavaScript file (required)
4. Add the plugin's template file (optional)

![Add a plugin](/images/plugins/add-plugin.png)

## Integrating a Template

### Integrating in a Text Page

If your plugin declares a template, you can then integrate it using the predefined shortcode.

**Example:** Starting from the ["Hello World" example](create.md#exemple-hello-world) in the plugin creation guide

```js
// plugin.js

ePoc.onLoad = () => {
    // Executed when the plugin is loaded at ePoc startup
    console.log('Hello World')

    // The plugin returns the template name and shortcode for integration in text pages
    return {
        template: 'plugin_template.html',
        shortcode: '[#hello_world]' // Shortcode to define here
    };
}
```

```html
<!-- plugin_template.html -->

<html lang="en">
<head>
    <!-- Style sheet for identical display to the mobile app -->
    <link rel="stylesheet" href="/assets/css/plugin-embed.css">
</head>
<body>
<h1>Hello World</h1>
<!-- Script to access the API -->
<script src="/assets/js/plugin-api-embed.js"></script>
<script>
    // Your business logic here
</script>
</body>
</html>
```

![Integrate a template](/images/plugins/plugin-hello.png)

![Embed plugin hello with shortcode](/images/plugins/plugin-embed-shortcode.jpg)

### Integrating in a Quiz

If your plugin declares a template, you can also integrate it into a custom question.

**Example:** Starting from the ["Custom Question" example](create.md#exemple-de-question-personnalisée) in the plugin creation guide

```js
// plugin.js

ePoc.onLoad = () => {
    // Executed when the plugin is loaded at ePoc startup
    console.log('Hello World')

    // The plugin returns the template name and shortcode for integration in text pages
    return {
        template: 'plugin_template.html',
        shortcode: '[#hello_world]' // Shortcode to define here
    };
}
```

```html
<!-- plugin_template.html -->
<!-- Custom question with free text field -->
<html lang="en">
<head>
    <link rel="stylesheet" href="/assets/css/plugin-embed.css">
</head>
<body>
<form>
    <!-- Text field -->
    <input type="text"/>
</form>
<script src="/assets/js/plugin-api-embed.js"></script>
<script>
    const userInput = document.querySelector('input');
    // When the user types text
    userInput.addEventListener('keyup', (event) => {
        // Send the response to the app
        plugin.emit('user-responded', userInput.value)
    });
</script>
</body>
```

![Integrate a plugin in a question](/images/plugins/plugin-embed-question.png)

Which gives the following result:

![Custom question preview](/images/plugins/plugin-question.gif)
