import { SectionElement, text } from "./elements";
export * from "./elements";

export type Section = {
  type: "rich_text_section";
  elements: SectionElement[];
};
export const createSection = (elements: SectionElement[]): Section => ({
  type: "rich_text_section",
  elements: elements.map((el) => (typeof el === "string" ? { type: "text", text: el } : el)),
});

/**
 * A line break.
 * @returns A section containing a line break character
 */
export const br = createSection([{ type: "text", text: "\n" }]);

/**
 * Creates a section element from a template string
 * @returns The section element
 */
export const section = (string: TemplateStringsArray, ...values: Array<SectionElement | string>) => {
  const elements: SectionElement[] = [];
  string.forEach((str, index) => {
    if (str) elements.push(text(str));
    const value = values[index];
    if (index < values.length) {
      elements.push(typeof value === "string" ? text(value) : value);
    }
  });
  return createSection(elements);
};
