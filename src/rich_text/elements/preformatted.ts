import { createBlock } from "./block";
import { SectionElement } from "./section";

/**
 * A preformatted block of text
 */
export type Preformatted = {
  type: "rich_text_preformatted";
  elements: SectionElement[];
  border?: number;
};

/**
 * Creates a preformatted block of text
 * @private
 * @param elements The elements of the preformatted text
 * @param border The border color
 * @returns The preformatted block
 */
export const createPreformatted = (elements: SectionElement[], border?: number): Preformatted => ({
  type: "rich_text_preformatted",
  elements,
  border,
});

/**
 * Creates a preformatted block of text from a template string
 * @returns The preformatted block
 */
export const preformatted = createBlock(createPreformatted);
