import { Section, createSection } from "../elements/section";
import { text } from "./section/elements";

export type AcceptableListInput = string | string[] | List[] | Section;

export type List = {
  type: "rich_text_list";
  style: "bullet" | "ordered";
  elements: Section[];
  indent: number;
  offset: number;
  border: number;
};

export const isStringArray = (obj: any): obj is string[] => Array.isArray(obj) && typeof obj[0] === "string";

export const isListArray = (element: AcceptableListInput): element is List[] => {
  if (typeof element === "string") return false;
  if (!Array.isArray(element)) return false;
  if (isStringArray(element)) return false;
  return element[0].type === "rich_text_list";
};

export const createList = (style: List["style"], elements: Section[], indent = 0): List => ({
  type: "rich_text_list",
  style,
  elements,
  indent,
  offset: 0,
  border: 0,
});

export const createNestedList = (style: List["style"], elements: AcceptableListInput[], indent = 0): List[] => {
  const lists: List[] = [];
  let currentList = createList(style, [], indent);

  for (const element of elements) {
    if (typeof element === "string") {
      currentList.elements.push(createSection([text(element)]));
      continue;
    }

    if (isListArray(element)) {
      if (currentList.elements.length) lists.push(currentList);
      currentList = createList(style, [], indent);
      const nestedLists = element.map(({ indent: nestedIndent, ...list }) => ({
        ...list,
        indent: nestedIndent + indent + 1,
      }));
      lists.push(...nestedLists);
      continue;
    }

    if (Array.isArray(element)) {
      lists.push(currentList);
      currentList = createList(style, [], indent);
      lists.push(...createNestedList(style, element, indent + 1));
      continue;
    }

    currentList.elements.push(element);
  }

  if (currentList.elements.length) lists.push(currentList);

  return lists;
};

export const bullets = (elements: AcceptableListInput[]): List[] => createNestedList("bullet", elements);
export const ordered = (elements: AcceptableListInput[]): List[] => createNestedList("ordered", elements);
