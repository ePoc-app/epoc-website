---
title: "Create a Plugin"
description: "Guide to creating plugins for ePoc"
icon: "lucide:file-pen"
---

## Introduction

Our mobile application uses a plugin system that allows extending its functionality in a secure and controlled manner. This system relies on using a sandboxed iframe within the phone's webview. This approach ensures an isolated execution environment for each plugin, thus preserving the security and stability of the main application.

## Plugin System Operation

Each plugin is essentially a JavaScript script (launched when the ePoc opens) accompanied by HTML templates (to be inserted in text pages or exercises). The plugin and its templates are executed in separate iframes. The "sandbox" attribute of the iframe is used to create an isolated execution environment, preventing the plugin from accessing the main application's resources without explicit authorization.

The plugin system provides a JavaScript API that allows plugins to interact with the main application in a controlled manner and also enables templates to exchange data with the plugin. This API includes methods for sending and receiving data, as well as triggering actions in the main application.

## Plugin Core
### First Steps

To develop a plugin, you must first create a JavaScript script. This script is then integrated into a non-visible sandboxed iframe with the API functions. The API functions are the only way to interact with the application and templates.

Here's an example code to create a plugin that displays 'Hello World' when the ePoc loads:

```js
// plugin.js

ePoc.onLoad = () => {
    // Executed when the plugin is loaded at ePoc startup
    console.log('Hello World')
}
```

### Plugin Core API

#### Functions

##### `ePoc.onLoad(context)`

Function called when the plugin loads, allows returning its configuration

##### `ePoc.onEmbed`

Function called when a template embedded in a text page or question loads

##### `ePoc.emit(event, value)`

Sends a message to the mobile application

##### `ePoc.emitToEmbeds(value)`

Sends a message to the plugin's templates

##### `ePoc.receive(data)`

Receives a message from the mobile application

#### Special Received Events
##### `'statement'`
Received when the user triggers an xAPI event

- `epocId`: ID of the ePoc where the event occurred
- `entityType`: Type of content that triggered the event (page, video, text, question, etc)
- `entityId`: ID of the content that triggered the event
- `verb`: Verb of the action that was performed (viewed, read, answered, etc)
- `value`: Value of the action that was performed

###### Example

```js
// plugin.js
ePoc.receive = async (data) => {
    if (data.event === 'statement') {
        console.log(data.statement)
        // {
        //     epocId,
        //     entityType,
        //     entityId,
        //     verb,
        //     value
        // }
    }
}
```

## Template

Plugins can declare an HTML template that is also executed in a separate iframe. The difference is that the template's iframe is embedded in text pages or exercises and is visible to the learner. The `template` property can be an inline string or a separate HTML file.

### "Hello World" Example
Here's how to declare a plugin template using the previous example:

```js
// plugin.js

ePoc.onLoad = () => {
    // Executed when the plugin is loaded at ePoc startup
    console.log('Hello World')

    // The plugin returns the template name and shortcode for integration in text pages
    return {
        template: 'plugin_template.html',
        shortcode: '[#hello_world]'
    };
}
```

And the template in question (simply displays an H1 title):

```html
<!-- plugin_template.html -->
<h1>Hello World</h1>
<script>
    // Your business logic here
</script>
```

### Plugin Template API

#### Functions
##### `plugin.emit(event, value)`

Sends a message from the template to the plugin

##### `plugin.receive(data)`

Receives a message from the plugin or the mobile application

#### Special Emitted Events

##### `plugin.emit('user-responded', payload)`

Sends the user's response when the plugin template is used in a custom question

###### Custom Question Example

```html
<!-- plugin_template.html -->
<!-- Custom question with free text field -->
<form>
    <!-- Text field -->
    <input type="text"/>
</form>
<script>
    const userInput = document.querySelector('input');
    // When the user types text
    userInput.addEventListener('keyup', (event) => {
        // Send the response to the app
      plugin.emit('user-responded', userInput.value)
    });
</script>
```
