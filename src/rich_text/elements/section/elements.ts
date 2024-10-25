export type Style<T extends string> = Partial<{
  [k in T]: boolean;
}>;

export type StylableSectionElement = TextSectionElement | ChannelSectionElement | LinkSectionElement;

export type TextSectionElementStyle = Style<"bold" | "italic" | "stike" | "code">;

type TextSectionElement = {
  type: "text";
  style?: TextSectionElementStyle;
  text: string;
};

type ChannelSectionElement = {
  type: "channel";
  channel_id: string;
  style: Style<"bold" | "italic" | "strike" | "highlight" | "client_highlight" | "unlink">;
};

type EmojiSectionElement = {
  type: "emoji";
  name: string;
};

type LinkSectionElement = {
  type: "link";
  url: string;
  text: string;
  unsafe: boolean;
  style?: TextSectionElementStyle;
};

type UserSectionElement = {
  type: "user";
  user_id: string;
  style?: ChannelSectionElement["style"];
};

type UserGroupSectionElement = {
  type: "usergroup";
  usergroup_id: string;
  style?: ChannelSectionElement["style"];
};

export type SectionElement =
  | TextSectionElement
  | ChannelSectionElement
  | EmojiSectionElement
  | LinkSectionElement
  | UserSectionElement
  | UserGroupSectionElement;

/**
 * Mention a channel
 * @param channel_id Id of the channel
 * @param style optional style object. Can also be changed with the style functions
 * @returns A channel section element
 */
export const channel = (channel_id: string, style: ChannelSectionElement["style"]) => ({
  type: "channel",
  channel_id,
  style,
});

/**
 * Create a link to a url
 * @param url Destination of the link
 * @param text Text to be displayed
 * @param unsafe wether the link is unsafe
 * @returns A link section element
 */
export const link = (url: string, text: string, unsafe = false): LinkSectionElement => ({
  type: "link",
  url,
  text,
  unsafe,
});

/**
 * Mention a user by their ID
 * @param user_id ID of the user
 * @returns A user section element
 */
export const user = (user_id: string): UserSectionElement => ({
  type: "user",
  user_id,
});

/**
 * Create a text element
 * @param text The text to be displayed
 * @param style optional style object. Can also be changed with the style functions
 * @returns A text section element
 */
export const text = (text: string, style?: TextSectionElement["style"]): TextSectionElement => ({
  type: "text",
  style,
  text,
});

/**
 * Insert an emoji by name
 * @param name Name of the emoji
 * @returns An emoji section element
 */
export const emoji = (name: string): EmojiSectionElement => ({
  type: "emoji",
  name,
});

/**
 * Mention a user group by their ID
 * @param user_group_id ID of the user group
 * @returns A user group section element
 */
export const userGroup = (usergroup_id: string): UserGroupSectionElement => ({
  type: "usergroup",
  usergroup_id,
});
