**BOX MODEL**

**Difference between css standard box model and alternate box model ?**

In case of alternate box model we use :

box-sizing: border-box

major difference in size calculation :

height : 200px;

width : 100px;

padding : 10px;

border : 5px;

In standard css we dont use box-sizing : border-box , so the size of the content will be height of 230px and width will be 130px.

In alternate css, height is 200px and width is 100px.

[**Cascade**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#cascade)

Stylesheets [**cascade**](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Introduction). At a very simple level, this means that the origin and the order of CSS rules matter. When two rules both have equal specificity, the one that is defined last in the stylesheet is the one that will be used. There are other concepts that have an effect, such as [cascade layers](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), but these are more advanced and we won't cover them in any detail here.

In the below example, we have two rules that could apply to the &lt;h1&gt; element. The &lt;h1&gt; content ends up being colored blue. This is because both the rules are from the same source, have an identical element selector, and therefore, carry the same specificity, but the last one in the source order wins.

(last styling will win)

**Specificity**

specificity determines which style applies for the particular element

- A type (element) selector is less specific; it will select all elements of that type that appear on a page, so it has less weight. Pseudo-element selectors have the same specificity as regular element selectors.
- A class selector is more specific; it will select only the elements on a page that have a specific class attribute value, so it has more weight. Attribute selectors and pseudo-classes have the same weight as a class.
- An ID selector is even more specific - it only selects a single element with a specific id value. It therefore has even more weight.

[**Inheritance**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#inheritance)

Inheritance also needs to be understood in this context - some CSS property values set on parent elements are inherited by their child elements, and some aren't.

For example, if you set a color and font-family on an element, every element inside it will also be styled with that color and font, unless you've applied different color and font values directly to them.