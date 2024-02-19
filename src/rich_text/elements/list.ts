import { Section, createSection } from "./section";
import { text } from "./section/elements";

/**
 * Elements that can be passed to the list function
 */
export type AcceptableListInput = string | string[] | List[] | Section;

/**
 * A list element
 */
export type List = {
  type: "rich_text_list";
  style: "bullet" | "ordered";
  elements: Section[];
  indent: number;
  offset: number;
  border: number;
};


const isStringArray = (obj: any): obj is string[] => Array.isArray(obj) && typeof obj[0] === "string";

const isListArray = (element: AcceptableListInput): element is List[] => {
  if (typeof element === "string") return false;
  if (!Array.isArray(element)) return false;
  if (isStringArray(element)) return false;
  return element[0].type === "rich_text_list";
};

const createList = (style: List["style"], elements: Section[], indent = 0): List => ({
  type: "rich_text_list",
  style,
  elements,
  indent,
  offset: 0,
  border: 0,
});

const createNestedList = (style: List["style"], elements: AcceptableListInput[], indent = 0): List[] => {
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

/**
 * Creates a bullet list. Use it as a template string tag.
 * @returns The list
 */
export const bullets = (elements: AcceptableListInput[]): List[] => createNestedList("bullet", elements);

/**
 * Creates an ordered list. Use it as a template string tag.
 * @returns The list
 */
export const ordered = (elements: AcceptableListInput[]): List[] => createNestedList("ordered", elements);
