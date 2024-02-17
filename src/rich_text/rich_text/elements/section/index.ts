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
export const br = createSection([{ type: "text", text: "\n" }]);

export const section = createBlock(createSection);
