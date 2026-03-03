Basic Selectors

Link : <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors>

cheat sheet : <https://www.freecodecamp.org/news/css-selectors-cheat-sheet-for-beginners/#general-sibling>

[**What is a selector?**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#what_is_a_selector)

A CSS selector is the first part of a CSS Rule. It is a pattern of elements and other terms that tell the browser which HTML elements should have the CSS property values inside the rule applied to them. The element or elements selected by the selector are referred to as the _subject of the selector_.

[**Type selectors**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#type_selectors)

A **type selector** is sometimes called a _tag name selector_ or _element selector_ because it selects an HTML tag/element in your document.

[**Class selectors**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#class_selectors)

The case-sensitive class selector starts with a dot (.) character. It will select everything in the document with that class applied to it.

\*\*

Targeting an class in a element -> h1 .highlight

Multiple class in a same element -> .highlight.danger

Combining selectors -> comma  = groups the elements specified, space = all matching descendents (many), plus = immediate sibling (one)

Invalid selectors -> ..highlight (not allowed)

Universal selector -> \*

\*\*

[**ID selectors**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#id_selectors)

The case-sensitive ID selector begins with a # rather than a dot character, but is used in the same way as a class selector. The difference is that an ID can be used only once per page, and elements can only have a single id value. An ID selector selects an element with a specific id, and you can precede the ID with a type selector to only target the element if both the element and ID match.

(can not use a same id for 2 different elements)

**Attribute Selector**

| **Selector** | **Example** | **Description** |
| --- | --- | --- |
| \[attr\] | a\[title\] | Matches elements with an _attr_ attribute (whose name is the value in square brackets). |
| \[attr=value\] | a\[href="<https://example.com"\>] | Matches elements with an _attr_ attribute whose value is exactly _value_ - the string inside the quotes. |
| \[attr~=value\] | p\[class~="special"\] | Matches elements with an _attr_ attribute whose value is exactly _value_, or contains _value_ in its (space-separated) list of values. |
| \[attr\\\|=value\] | div\[lang\\\|="zh"\] | Matches elements with an _attr_ attribute whose value is exactly _value_ or begins with _value_ immediately followed by a hyphen. |

In the example below you can see these selectors being used.

- By using li\[class\] we can match any list item with a class attribute. This matches all of the list items except the first one.
- li\[class="a"\] matches a selector with a class of a, but not a selector with a class of a with another space-separated class as part of the value. It selects the second list item.
- li\[class~="a"\] will match a class of a but also a value that contains the class of a as part of a whitespace-separated list. It selects the second and third list items.

**Attribute presence and value selectors**

- Item 1
- Item 2
- Item 3
- Item 4

(click the code to understand)

**Substring matching Selector**

| **Selector** | **Example** | **Description** |
| --- | --- | --- |
| \[attr^=value\] | li\[class^="box-"\] | Matches elements with an _attr_ attribute, whose value begins with _value_. |
| \[attr\$=value\] | li\[class\$="-box"\] | Matches elements with an _attr_ attribute whose value ends with _value_. |
| \[attr\*=value\] | li\[class\*="box"\] | Matches elements with an _attr_ attribute whose value contains _value_ anywhere within the string. |

The next example shows usage of these selectors:

- li\[class^="a"\] matches any attribute value which starts with a, so matches the first two list items.
- li\[class\$="a"\] matches any attribute value that ends with a, so matches the first and third list item.
- li\[class\*="a"\] matches any attribute value where a appears anywhere in the string, so it matches all of our list items.

**Pseudo -classes and elements**

[**What is a pseudo-class?**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#what_is_a_pseudo-class)

A pseudo-class is a selector that selects elements that are in a specific state, for example, they are the first element of their type, or they are being hovered over by the mouse pointer. They tend to act as if you had applied a class to some part of your document, often helping you cut down on excess classes in your markup, and giving you more flexible, maintainable code.

Pseudo-classes are keywords that start with a colon. For example, :hover is a pseudo-class.

[**What is a pseudo-element?**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#what_is_a_pseudo-element)

Pseudo-elements behave in a similar way. However, they act as if you had added a whole new HTML element into the markup, rather than applying a class to existing elements.

Pseudo-elements start with a double colon ::. ::before is an example of a pseudo-element.

Pasted image 20260302123359.png

[**Generating content with ::before and ::after**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after)

There are a couple of special pseudo-elements, which are used along with the [content](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/content) property to insert content into your document using CSS. This technique is called **generated content**.

(we can also generate shapes)