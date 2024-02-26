import { bullets, emoji, link, ordered, richText, section } from "./src/rich_text";

const name = "John";
const testLink = link("https://www.google.com", "Google");
const blocks = richText`
  ${section`This is a test message for slack-rich-text. Hello, ${name}`}

  It supports:
  ${bullets([
    "Bullet lists",
    "Yaay!",
    bullets([section`${testLink}`]),
    ordered([
      "Also",
      "Ordered",
      "Lists",
      bullets([
        "And",
        "Nested",
        "Lists",
        section`${emoji("smile")} ${emoji("smile")} ${emoji("smile")}`,
        section`Teste ${"teste"}`,
      ]),
    ]),
  ])}
`;

console.log(JSON.stringify({ blocks: [blocks] }));
