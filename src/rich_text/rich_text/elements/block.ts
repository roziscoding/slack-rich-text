import { RichTextElement } from "..";
import { SectionElement, text } from "./section/elements";

export const createBlock =
  <R extends RichTextElement>(fn: (elements: SectionElement[]) => R) =>
  (string: TemplateStringsArray, ...values: SectionElement[]) => {
    const elements: SectionElement[] = [];
    string.forEach((str, index) => {
      if (str) elements.push(text(str));
      if (index < values.length) {
        elements.push(values[index]);
      }
    });
    return fn(elements);
  };
