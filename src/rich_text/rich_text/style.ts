import type { StylableSectionElement, TextSectionElementStyle } from "./elements/section/elements";
import { text } from "./elements/section/elements";

export const addStyleProperty = (element: string | StylableSectionElement, style: keyof TextSectionElementStyle) =>
  typeof element === "string"
    ? text(element, { [style]: true })
    : { ...element, style: { ...(element.style ?? {}), [style]: true } };

export const bold = (text: string | StylableSectionElement) => addStyleProperty(text, "bold");
export const italic = (text: string | StylableSectionElement) => addStyleProperty(text, "italic");
export const strike = (text: string | StylableSectionElement) => addStyleProperty(text, "stike");
export const code = (text: string | StylableSectionElement) => addStyleProperty(text, "code");
