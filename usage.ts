import { bullets, ordered, richText } from "./src/rich_text";

const blocks = richText`
  ${bullets(["Hello, world!", "This is a test", ordered(["First", "Second", "Third", bullets(["A", "B", "C"])])])}
`;

console.log(JSON.stringify({ blocks: [blocks] }, null, 2));
