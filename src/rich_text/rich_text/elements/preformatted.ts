import { createBlock } from "./block";
import { SectionElement } from "./section";

export type Preformatted = {
  type: "rich_text_preformatted";
  elements: SectionElement[];
  border?: number;
};
export const createPreformatted = (elements: SectionElement[], border?: number): Preformatted => ({
  type: "rich_text_preformatted",
  elements,
  border,
});

export const preformatted = createBlock(createPreformatted);
