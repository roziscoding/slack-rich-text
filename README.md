# Slack Rich Text

Small library to create slack messages with rich text using the BlockKit.

## Installing

`npm i slack-rich-text`

## Usage

Use the exported function as a template string tag to create a rich text message.
To apply the transformation to a string inside some other function, like using `bold` on a list, use the `section` function.

Example:
```javascript
import { bullets, emoji, ordered, richText, section } from "slack_rich_text";

const blocks = richText`
  This is a test message for slack-rich-text.

  It supports:
  ${bullets([
    "Bullet lists",
    "Yaay!",
    ordered([
      "Also",
      "Ordered",
      "Lists", 
      bullets([
        "And", 
        "Nested", 
        "Lists",
        section`${emoji("smile")} ${emoji("smile")} ${emoji("smile")}`
      ])
    ])
  ])}
`;
```
Renders as:

![slack block kit builder screenshot](./usage-screenshot.png)

## Passing strings to `richText`

The `richText` function does not support receiving a string as a value. That means that the following code will not work:

```javascript
const name = "John";
const blocks = richText`
  Hello, ${name}!
`; // This will throw an error
```

To fix this, use the `section` function to transform the string into a block:

```javascript
const name = "John";
const blocks = richText`
  ${section`Hello, ${name}!`}
`;
```

## API Reference

See the [API Reference](./API.md) for a detailed explanation of the available functions.
