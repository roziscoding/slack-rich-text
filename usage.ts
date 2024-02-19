import { bullets, emoji, ordered, richText, section } from "./src/rich_text";

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

console.log(JSON.stringify({ blocks: [blocks] }))