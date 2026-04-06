**Combinators**

[**Descendant combinator**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators#descendant_combinator)

The **descendant combinator** - represented by a single space ( ) character - combines two selectors such that elements matched by the second selector are selected if they have an ancestor (a parent, a parent's parent, or a parent's parent's parent, etc.) element matching the first selector. Selectors that utilize a descendant combinator are called _descendant selectors_.

[**Child combinator**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators#child_combinator)

The **child combinator** (>) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first. Descendant elements further down the hierarchy don't match. For example, to select only &lt;p&gt; elements that are direct children of &lt;article&gt; elements:

[**Next-sibling combinator**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators#next-sibling_combinator)

The **next-sibling combinator** (+) is placed between two CSS selectors. It matches only those elements matched by the second selector that come right after the element matched by the first selector. For example, to select all &lt;img&gt; elements that are immediately preceded by a &lt;p&gt; element:

**General Sibling Combinator**

The general sibling combinator selects siblings.

You can specify the first element and a second one that comes after the first one. The second element doesn't need to come right after the first one.

To use the general sibling combinator, specify the first element, then use the ~ character followed by the second element that needs to follow the first one.

cheat sheet :  
<https://www.freecodecamp.org/news/css-selectors-cheat-sheet-for-beginners/#general-sibling>