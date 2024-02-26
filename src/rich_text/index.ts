import { List } from "./elements/list";
import { Preformatted } from "./elements/preformatted";
import { Quote } from "./elements/quote";
import { Section, createSection, text } from "./elements/section";

/**
 * The elements that can be used to create a rich text message
 */
export type RichTextElement = Section | Preformatted | List | Quote;

/**
 * Root block for a rich text message
 */
export type RichTextBlock = {
  type: "rich_text";
  elements: RichTextElement[];
  block_id?: string;
};

/**
 * Creates a rich text message from a template string
 * @returns The block kit object for the rich text message
 */
export const richText = (
  strings: TemplateStringsArray,
  ...values: Array<RichTextElement[] | RichTextElement>
): RichTextBlock => {
  const elements: RichTextElement[] = [];
  strings
    .map((s) => s.trim())
    .forEach((str, index) => {
      if (str) elements.push(createSection([text(str)]));
      if (index < values.length) {
        const value = values[index];
        if (typeof value === "string")
          throw new Error(
            `The richText function does not accept strings as values. If you're trying to interpolate a string variable, wrap the line in a section block. See https://github.com/roziscoding/slack-rich-text/blob/main/README.md#passing-strings-to-richtext`
          );
        if (Array.isArray(value)) elements.push(...value);
        else elements.push(value);
      }
    });
  return {
    type: "rich_text",
    elements,
  };
};

export * from "./elements/list";
export * from "./elements/preformatted";
export * from "./elements/quote";
export * from "./elements/section";
export * from "./style";
