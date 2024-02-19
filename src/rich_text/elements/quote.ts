import { createBlock } from "./block";
import { SectionElement } from "./section";

/**
 * A quote element
 */
export type Quote = {
  type: "rich_text_quote";
  elements: SectionElement[];
  border?: number;
};

/**
 * Creates a quote element
 * @private
 * @param elements The elements of the quote
 * @param border The border color
 * @returns The quote element
 */
export const createQuote = (elements: SectionElement[], border?: number): Quote => ({
  type: "rich_text_quote",
  elements,
  border,
});

/**
 * Creates a quote element from a template string
 * @returns The quote element
 */
export const quote = createBlock(createQuote);
