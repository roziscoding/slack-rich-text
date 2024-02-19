import type { StylableSectionElement, TextSectionElementStyle } from "./elements/section/elements";
import { text } from "./elements/section/elements";

const addStyleProperty = (element: string | StylableSectionElement, style: keyof TextSectionElementStyle) =>
  typeof element === "string"
    ? text(element, { [style]: true })
    : { ...element, style: { ...(element.style ?? {}), [style]: true } };

/**
 * Applies the bold style to the given text.
 * Can receive the output of other style functions as input.
 * @param text The text to be styled
 * @returns A new text element with the style applied
 */
export const bold = (text: string | StylableSectionElement) => addStyleProperty(text, "bold");
/**
 * Applies the italic style to the given text.
 * Can receive the output of other style functions as input.
 * @param text The text to be styled
 * @returns A new text element with the style applied
 */
export const italic = (text: string | StylableSectionElement) => addStyleProperty(text, "italic");
/**
 * Applies the strike style to the given text.
 * Can receive the output of other style functions as input.
 * @param text The text to be styled
 * @returns A new text element with the style applied
 */
export const strike = (text: string | StylableSectionElement) => addStyleProperty(text, "stike");
/**
 * Applies the code style to the given text.
 * Can receive the output of other style functions as input.
 * @param text The text to be styled
 * @returns A new text element with the style applied
 */
export const code = (text: string | StylableSectionElement) => addStyleProperty(text, "code");
