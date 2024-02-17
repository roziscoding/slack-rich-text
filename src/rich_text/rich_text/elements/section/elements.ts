export type Style<T extends string> = Partial<{
  [k in T]: boolean;
}>;

export type StylableSectionElement = TextSectionElement | ChannelSectionElement | LinkSectionElement;

export type TextSectionElementStyle = Style<"bold" | "italic" | "stike" | "code">;

export type TextSectionElement = {
  type: "text";
  style?: TextSectionElementStyle;
  text: string;
};

export type ChannelSectionElement = {
  type: "channel";
  channel_id: string;
  style: Style<"bold" | "italic" | "strike" | "highlight" | "client_highlight" | "unlink">;
};

export type EmojiSectionElement = {
  type: "emoji";
  name: string;
};

export type LinkSectionElement = {
  type: "link";
  url: string;
  text: string;
  unsafe: boolean;
  style?: TextSectionElementStyle;
};

export type UserSectionElement = {
  type: "user";
  user_id: string;
  style?: ChannelSectionElement["style"];
};

export type UserGropupSectionElement = {
  type: "user_group";
  user_group_id: string;
  style?: ChannelSectionElement["style"];
};

export type SectionElement =
  | TextSectionElement
  | ChannelSectionElement
  | EmojiSectionElement
  | LinkSectionElement
  | UserSectionElement;

export const channel = (channel_id: string, style: ChannelSectionElement["style"]) => ({
  type: "channel",
  channel_id,
  style,
});

export const link = (url: string, text: string, unsafe = false): LinkSectionElement => ({
  type: "link",
  url,
  text,
  unsafe,
});

export const user = (user_id: string): UserSectionElement => ({
  type: "user",
  user_id,
});

export const text = (text: string, style?: TextSectionElement["style"]): TextSectionElement => ({
  type: "text",
  style,
  text,
});

export const emoji = (name: string): EmojiSectionElement => ({
  type: "emoji",
  name,
});

export const userGroup = (user_group_id: string): UserGropupSectionElement => ({
  type: "user_group",
  user_group_id,
});
