import { createBlock } from "../block";
import { SectionElement } from "./elements";
export * from "./elements";

export type Section = {
  type: "rich_text_section";
  elements: SectionElement[];
};
export const createSection = (elements: SectionElement[]): Section => ({
  type: "rich_text_section",
  elements,
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
export const section = createBlock(createSection);
