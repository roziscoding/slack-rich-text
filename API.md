[slack-rich-text](README.md) / Exports

# slack-rich-text

## Table of contents

### Type Aliases

- [AcceptableListInput](modules.md#acceptablelistinput)
- [List](modules.md#list)
- [Preformatted](modules.md#preformatted)
- [Quote](modules.md#quote)
- [RichTextBlock](modules.md#richtextblock)
- [RichTextElement](modules.md#richtextelement)
- [Section](modules.md#section)
- [SectionElement](modules.md#sectionelement)
- [StylableSectionElement](modules.md#stylablesectionelement)
- [Style](modules.md#style)
- [TextSectionElementStyle](modules.md#textsectionelementstyle)

### Variables

- [br](modules.md#br)

### Functions

- [bold](modules.md#bold)
- [bullets](modules.md#bullets)
- [channel](modules.md#channel)
- [code](modules.md#code)
- [createPreformatted](modules.md#createpreformatted)
- [createQuote](modules.md#createquote)
- [createSection](modules.md#createsection)
- [emoji](modules.md#emoji)
- [italic](modules.md#italic)
- [link](modules.md#link)
- [ordered](modules.md#ordered)
- [preformatted](modules.md#preformatted-1)
- [quote](modules.md#quote-1)
- [richText](modules.md#richtext)
- [section](modules.md#section-1)
- [strike](modules.md#strike)
- [text](modules.md#text)
- [user](modules.md#user)
- [userGroup](modules.md#usergroup)

## Type Aliases

### AcceptableListInput

Ƭ **AcceptableListInput**: `string` \| `string`[] \| [`List`](modules.md#list)[] \| [`Section`](modules.md#section)

Elements that can be passed to the list function

#### Defined in

[rich_text/elements/list.ts:7](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/list.ts#L7)

___

### List

Ƭ **List**: `Object`

A list element

#### Type declaration

| Name | Type |
| :------ | :------ |
| `border` | `number` |
| `elements` | [`Section`](modules.md#section)[] |
| `indent` | `number` |
| `offset` | `number` |
| `style` | ``"bullet"`` \| ``"ordered"`` |
| `type` | ``"rich_text_list"`` |

#### Defined in

[rich_text/elements/list.ts:12](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/list.ts#L12)

___

### Preformatted

Ƭ **Preformatted**: `Object`

A preformatted block of text

#### Type declaration

| Name | Type |
| :------ | :------ |
| `border?` | `number` |
| `elements` | [`SectionElement`](modules.md#sectionelement)[] |
| `type` | ``"rich_text_preformatted"`` |

#### Defined in

[rich_text/elements/preformatted.ts:7](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/preformatted.ts#L7)

___

### Quote

Ƭ **Quote**: `Object`

A quote element

#### Type declaration

| Name | Type |
| :------ | :------ |
| `border?` | `number` |
| `elements` | [`SectionElement`](modules.md#sectionelement)[] |
| `type` | ``"rich_text_quote"`` |

#### Defined in

[rich_text/elements/quote.ts:7](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/quote.ts#L7)

___

### RichTextBlock

Ƭ **RichTextBlock**: `Object`

Root block for a rich text message

#### Type declaration

| Name | Type |
| :------ | :------ |
| `block_id?` | `string` |
| `elements` | [`RichTextElement`](modules.md#richtextelement)[] |
| `type` | ``"rich_text"`` |

#### Defined in

[rich_text/index.ts:14](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/index.ts#L14)

___

### RichTextElement

Ƭ **RichTextElement**: [`Section`](modules.md#section) \| [`Preformatted`](modules.md#preformatted) \| [`List`](modules.md#list) \| [`Quote`](modules.md#quote)

The elements that can be used to create a rich text message

#### Defined in

[rich_text/index.ts:9](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/index.ts#L9)

___

### Section

Ƭ **Section**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `elements` | [`SectionElement`](modules.md#sectionelement)[] |
| `type` | ``"rich_text_section"`` |

#### Defined in

[rich_text/elements/section/index.ts:4](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/section/index.ts#L4)

___

### SectionElement

Ƭ **SectionElement**: `TextSectionElement` \| `ChannelSectionElement` \| `EmojiSectionElement` \| `LinkSectionElement` \| `UserSectionElement`

#### Defined in

[rich_text/elements/section/elements.ts:46](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/section/elements.ts#L46)

___

### StylableSectionElement

Ƭ **StylableSectionElement**: `TextSectionElement` \| `ChannelSectionElement` \| `LinkSectionElement`

#### Defined in

[rich_text/elements/section/elements.ts:5](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/section/elements.ts#L5)

___

### Style

Ƭ **Style**\<`T`\>: `Partial`\<\{ [k in T]: boolean }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Defined in

[rich_text/elements/section/elements.ts:1](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/section/elements.ts#L1)

___

### TextSectionElementStyle

Ƭ **TextSectionElementStyle**: [`Style`](modules.md#style)\<``"bold"`` \| ``"italic"`` \| ``"stike"`` \| ``"code"``\>

#### Defined in

[rich_text/elements/section/elements.ts:7](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/section/elements.ts#L7)

## Variables

### br

• `Const` **br**: [`Section`](modules.md#section)

A line break.

#### Defined in

[rich_text/elements/section/index.ts:17](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/section/index.ts#L17)

## Functions

### bold

▸ **bold**(`text`): `TextSectionElement` \| \{ `channel_id`: `string` ; `style`: \{ `bold`: `undefined` \| `boolean` ; `code`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `stike`: `undefined` \| `boolean`  } \| \{ `bold`: `undefined` \| `boolean` ; `client_highlight`: `undefined` \| `boolean` ; `highlight`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `strike`: `undefined` \| `boolean` ; `unlink`: `undefined` \| `boolean`  } ; `type`: ``"channel"``  } \| \{ `style`: \{ `bold`: `undefined` \| `boolean` ; `code`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `stike`: `undefined` \| `boolean`  } \| \{ `bold`: `undefined` \| `boolean` ; `client_highlight`: `undefined` \| `boolean` ; `highlight`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `strike`: `undefined` \| `boolean` ; `unlink`: `undefined` \| `boolean`  } ; `text`: `string` ; `type`: ``"link"`` ; `unsafe`: `boolean` ; `url`: `string`  }

Applies the bold style to the given text.
Can receive the output of other style functions as input.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` \| [`StylableSectionElement`](modules.md#stylablesectionelement) | The text to be styled |

#### Returns

`TextSectionElement` \| \{ `channel_id`: `string` ; `style`: \{ `bold`: `undefined` \| `boolean` ; `code`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `stike`: `undefined` \| `boolean`  } \| \{ `bold`: `undefined` \| `boolean` ; `client_highlight`: `undefined` \| `boolean` ; `highlight`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `strike`: `undefined` \| `boolean` ; `unlink`: `undefined` \| `boolean`  } ; `type`: ``"channel"``  } \| \{ `style`: \{ `bold`: `undefined` \| `boolean` ; `code`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `stike`: `undefined` \| `boolean`  } \| \{ `bold`: `undefined` \| `boolean` ; `client_highlight`: `undefined` \| `boolean` ; `highlight`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `strike`: `undefined` \| `boolean` ; `unlink`: `undefined` \| `boolean`  } ; `text`: `string` ; `type`: ``"link"`` ; `unsafe`: `boolean` ; `url`: `string`  }

A new text element with the style applied

#### Defined in

[rich_text/style.ts:15](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/style.ts#L15)

___

### bullets

▸ **bullets**(`elements`): [`List`](modules.md#list)[]

Creates a bullet list. Use it as a template string tag.

#### Parameters

| Name | Type |
| :------ | :------ |
| `elements` | [`AcceptableListInput`](modules.md#acceptablelistinput)[] |

#### Returns

[`List`](modules.md#list)[]

The list

#### Defined in

[rich_text/elements/list.ts:80](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/list.ts#L80)

___

### channel

▸ **channel**(`channel_id`, `style`): `Object`

Mention a channel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channel_id` | `string` | Id of the channel |
| `style` | `Partial`\<\{ `bold`: `boolean` ; `client_highlight`: `boolean` ; `highlight`: `boolean` ; `italic`: `boolean` ; `strike`: `boolean` ; `unlink`: `boolean`  }\> | optional style object. Can also be changed with the style functions |

#### Returns

`Object`

A channel section element

| Name | Type |
| :------ | :------ |
| `channel_id` | `string` |
| `style` | `Partial`\<\{ `bold`: `boolean` ; `client_highlight`: `boolean` ; `highlight`: `boolean` ; `italic`: `boolean` ; `strike`: `boolean` ; `unlink`: `boolean`  }\> |
| `type` | `string` |

#### Defined in

[rich_text/elements/section/elements.ts:59](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/section/elements.ts#L59)

___

### code

▸ **code**(`text`): `TextSectionElement` \| \{ `channel_id`: `string` ; `style`: \{ `bold`: `undefined` \| `boolean` ; `code`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `stike`: `undefined` \| `boolean`  } \| \{ `bold`: `undefined` \| `boolean` ; `client_highlight`: `undefined` \| `boolean` ; `highlight`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `strike`: `undefined` \| `boolean` ; `unlink`: `undefined` \| `boolean`  } ; `type`: ``"channel"``  } \| \{ `style`: \{ `bold`: `undefined` \| `boolean` ; `code`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `stike`: `undefined` \| `boolean`  } \| \{ `bold`: `undefined` \| `boolean` ; `client_highlight`: `undefined` \| `boolean` ; `highlight`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `strike`: `undefined` \| `boolean` ; `unlink`: `undefined` \| `boolean`  } ; `text`: `string` ; `type`: ``"link"`` ; `unsafe`: `boolean` ; `url`: `string`  }

Applies the code style to the given text.
Can receive the output of other style functions as input.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` \| [`StylableSectionElement`](modules.md#stylablesectionelement) | The text to be styled |

#### Returns

`TextSectionElement` \| \{ `channel_id`: `string` ; `style`: \{ `bold`: `undefined` \| `boolean` ; `code`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `stike`: `undefined` \| `boolean`  } \| \{ `bold`: `undefined` \| `boolean` ; `client_highlight`: `undefined` \| `boolean` ; `highlight`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `strike`: `undefined` \| `boolean` ; `unlink`: `undefined` \| `boolean`  } ; `type`: ``"channel"``  } \| \{ `style`: \{ `bold`: `undefined` \| `boolean` ; `code`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `stike`: `undefined` \| `boolean`  } \| \{ `bold`: `undefined` \| `boolean` ; `client_highlight`: `undefined` \| `boolean` ; `highlight`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `strike`: `undefined` \| `boolean` ; `unlink`: `undefined` \| `boolean`  } ; `text`: `string` ; `type`: ``"link"`` ; `unsafe`: `boolean` ; `url`: `string`  }

A new text element with the style applied

#### Defined in

[rich_text/style.ts:36](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/style.ts#L36)

___

### createPreformatted

▸ **createPreformatted**(`elements`, `border?`): [`Preformatted`](modules.md#preformatted)

Creates a preformatted block of text

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elements` | [`SectionElement`](modules.md#sectionelement)[] | The elements of the preformatted text |
| `border?` | `number` | The border color |

#### Returns

[`Preformatted`](modules.md#preformatted)

The preformatted block

#### Defined in

[rich_text/elements/preformatted.ts:20](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/preformatted.ts#L20)

___

### createQuote

▸ **createQuote**(`elements`, `border?`): [`Quote`](modules.md#quote)

Creates a quote element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elements` | [`SectionElement`](modules.md#sectionelement)[] | The elements of the quote |
| `border?` | `number` | The border color |

#### Returns

[`Quote`](modules.md#quote)

The quote element

#### Defined in

[rich_text/elements/quote.ts:20](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/quote.ts#L20)

___

### createSection

▸ **createSection**(`elements`): [`Section`](modules.md#section)

#### Parameters

| Name | Type |
| :------ | :------ |
| `elements` | [`SectionElement`](modules.md#sectionelement)[] |

#### Returns

[`Section`](modules.md#section)

#### Defined in

[rich_text/elements/section/index.ts:8](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/section/index.ts#L8)

___

### emoji

▸ **emoji**(`name`): `EmojiSectionElement`

Insert an emoji by name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of the emoji |

#### Returns

`EmojiSectionElement`

An emoji section element

#### Defined in

[rich_text/elements/section/elements.ts:106](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/section/elements.ts#L106)

___

### italic

▸ **italic**(`text`): `TextSectionElement` \| \{ `channel_id`: `string` ; `style`: \{ `bold`: `undefined` \| `boolean` ; `code`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `stike`: `undefined` \| `boolean`  } \| \{ `bold`: `undefined` \| `boolean` ; `client_highlight`: `undefined` \| `boolean` ; `highlight`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `strike`: `undefined` \| `boolean` ; `unlink`: `undefined` \| `boolean`  } ; `type`: ``"channel"``  } \| \{ `style`: \{ `bold`: `undefined` \| `boolean` ; `code`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `stike`: `undefined` \| `boolean`  } \| \{ `bold`: `undefined` \| `boolean` ; `client_highlight`: `undefined` \| `boolean` ; `highlight`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `strike`: `undefined` \| `boolean` ; `unlink`: `undefined` \| `boolean`  } ; `text`: `string` ; `type`: ``"link"`` ; `unsafe`: `boolean` ; `url`: `string`  }

Applies the italic style to the given text.
Can receive the output of other style functions as input.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` \| [`StylableSectionElement`](modules.md#stylablesectionelement) | The text to be styled |

#### Returns

`TextSectionElement` \| \{ `channel_id`: `string` ; `style`: \{ `bold`: `undefined` \| `boolean` ; `code`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `stike`: `undefined` \| `boolean`  } \| \{ `bold`: `undefined` \| `boolean` ; `client_highlight`: `undefined` \| `boolean` ; `highlight`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `strike`: `undefined` \| `boolean` ; `unlink`: `undefined` \| `boolean`  } ; `type`: ``"channel"``  } \| \{ `style`: \{ `bold`: `undefined` \| `boolean` ; `code`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `stike`: `undefined` \| `boolean`  } \| \{ `bold`: `undefined` \| `boolean` ; `client_highlight`: `undefined` \| `boolean` ; `highlight`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `strike`: `undefined` \| `boolean` ; `unlink`: `undefined` \| `boolean`  } ; `text`: `string` ; `type`: ``"link"`` ; `unsafe`: `boolean` ; `url`: `string`  }

A new text element with the style applied

#### Defined in

[rich_text/style.ts:22](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/style.ts#L22)

___

### link

▸ **link**(`url`, `text`, `unsafe?`): `LinkSectionElement`

Create a link to a url

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | Destination of the link |
| `text` | `string` | `undefined` | Text to be displayed |
| `unsafe` | `boolean` | `false` | wether the link is unsafe |

#### Returns

`LinkSectionElement`

A link section element

#### Defined in

[rich_text/elements/section/elements.ts:72](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/section/elements.ts#L72)

___

### ordered

▸ **ordered**(`elements`): [`List`](modules.md#list)[]

Creates an ordered list. Use it as a template string tag.

#### Parameters

| Name | Type |
| :------ | :------ |
| `elements` | [`AcceptableListInput`](modules.md#acceptablelistinput)[] |

#### Returns

[`List`](modules.md#list)[]

The list

#### Defined in

[rich_text/elements/list.ts:86](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/list.ts#L86)

___

### preformatted

▸ **preformatted**(`string`, `...values`): [`Preformatted`](modules.md#preformatted)

Creates a preformatted block of text from a template string

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `TemplateStringsArray` |
| `...values` | [`SectionElement`](modules.md#sectionelement)[] |

#### Returns

[`Preformatted`](modules.md#preformatted)

The preformatted block

#### Defined in

[rich_text/elements/preformatted.ts:30](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/preformatted.ts#L30)

___

### quote

▸ **quote**(`string`, `...values`): [`Quote`](modules.md#quote)

Creates a quote element from a template string

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `TemplateStringsArray` |
| `...values` | [`SectionElement`](modules.md#sectionelement)[] |

#### Returns

[`Quote`](modules.md#quote)

The quote element

#### Defined in

[rich_text/elements/quote.ts:30](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/quote.ts#L30)

___

### richText

▸ **richText**(`strings`, `...values`): [`RichTextBlock`](modules.md#richtextblock)

Creates a rich text message from a template string

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | `TemplateStringsArray` |
| `...values` | ([`RichTextElement`](modules.md#richtextelement) \| [`RichTextElement`](modules.md#richtextelement)[])[] |

#### Returns

[`RichTextBlock`](modules.md#richtextblock)

The block kit object for the rich text message

#### Defined in

[rich_text/index.ts:24](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/index.ts#L24)

___

### section

▸ **section**(`string`, `...values`): [`Section`](modules.md#section)

Creates a section element from a template string

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `TemplateStringsArray` |
| `...values` | (`string` \| [`SectionElement`](modules.md#sectionelement))[] |

#### Returns

[`Section`](modules.md#section)

The section element

#### Defined in

[rich_text/elements/section/index.ts:23](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/section/index.ts#L23)

___

### strike

▸ **strike**(`text`): `TextSectionElement` \| \{ `channel_id`: `string` ; `style`: \{ `bold`: `undefined` \| `boolean` ; `code`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `stike`: `undefined` \| `boolean`  } \| \{ `bold`: `undefined` \| `boolean` ; `client_highlight`: `undefined` \| `boolean` ; `highlight`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `strike`: `undefined` \| `boolean` ; `unlink`: `undefined` \| `boolean`  } ; `type`: ``"channel"``  } \| \{ `style`: \{ `bold`: `undefined` \| `boolean` ; `code`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `stike`: `undefined` \| `boolean`  } \| \{ `bold`: `undefined` \| `boolean` ; `client_highlight`: `undefined` \| `boolean` ; `highlight`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `strike`: `undefined` \| `boolean` ; `unlink`: `undefined` \| `boolean`  } ; `text`: `string` ; `type`: ``"link"`` ; `unsafe`: `boolean` ; `url`: `string`  }

Applies the strike style to the given text.
Can receive the output of other style functions as input.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` \| [`StylableSectionElement`](modules.md#stylablesectionelement) | The text to be styled |

#### Returns

`TextSectionElement` \| \{ `channel_id`: `string` ; `style`: \{ `bold`: `undefined` \| `boolean` ; `code`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `stike`: `undefined` \| `boolean`  } \| \{ `bold`: `undefined` \| `boolean` ; `client_highlight`: `undefined` \| `boolean` ; `highlight`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `strike`: `undefined` \| `boolean` ; `unlink`: `undefined` \| `boolean`  } ; `type`: ``"channel"``  } \| \{ `style`: \{ `bold`: `undefined` \| `boolean` ; `code`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `stike`: `undefined` \| `boolean`  } \| \{ `bold`: `undefined` \| `boolean` ; `client_highlight`: `undefined` \| `boolean` ; `highlight`: `undefined` \| `boolean` ; `italic`: `undefined` \| `boolean` ; `strike`: `undefined` \| `boolean` ; `unlink`: `undefined` \| `boolean`  } ; `text`: `string` ; `type`: ``"link"`` ; `unsafe`: `boolean` ; `url`: `string`  }

A new text element with the style applied

#### Defined in

[rich_text/style.ts:29](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/style.ts#L29)

___

### text

▸ **text**(`text`, `style?`): `TextSectionElement`

Create a text element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The text to be displayed |
| `style?` | `Partial`\<\{ `bold`: `boolean` ; `code`: `boolean` ; `italic`: `boolean` ; `stike`: `boolean`  }\> | optional style object. Can also be changed with the style functions |

#### Returns

`TextSectionElement`

A text section element

#### Defined in

[rich_text/elements/section/elements.ts:95](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/section/elements.ts#L95)

___

### user

▸ **user**(`user_id`): `UserSectionElement`

Mention a user by their ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user_id` | `string` | ID of the user |

#### Returns

`UserSectionElement`

A user section element

#### Defined in

[rich_text/elements/section/elements.ts:84](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/section/elements.ts#L84)

___

### userGroup

▸ **userGroup**(`user_group_id`): `UserGropupSectionElement`

Mention a user group by their ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user_group_id` | `string` | ID of the user group |

#### Returns

`UserGropupSectionElement`

A user group section element

#### Defined in

[rich_text/elements/section/elements.ts:116](https://github.com/roziscoding/smack/blob/9fa9f80/src/rich_text/elements/section/elements.ts#L116)
