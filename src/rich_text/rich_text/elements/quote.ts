import { createBlock } from "./block";
import { SectionElement } from "./section";

export type Quote = {
  type: "rich_text_quote";
  elements: SectionElement[];
  border?: number;
};

export const createQuote = (elements: SectionElement[], border?: number): Quote => ({
  type: "rich_text_quote",
  elements,
  border,
});

export const quote = createBlock(createQuote);
