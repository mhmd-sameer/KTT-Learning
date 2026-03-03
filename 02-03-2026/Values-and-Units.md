**Values and Units**

**Numbers, lengths and percentages**

**Lengths**

**Absolute length units**

These values are more likely to be in numerical formates such as,

cm, mm, Quater-mm, in, picas(pc), points(pt), pixels(px).

**Relative length units**

These values are more likely to be view port height and width and also depends on root element and parent element,

vh -> view port height  
em -> depends up on the parent element (font size)  
rem -> depends up on the root element

**Percentage**

The percentage also depends on the parent element, that is the parent element width

**Another Important Thing**

For other properties:

- padding: 10% → based on **parent width**
- font-size: 2em → based on **parent font-size**
- margin: 5% → based on **parent width**

So % doesn't always relate to what you think.

what is there is no font size in parent ?

The em take the default browser font-size which is 16 px.

**Numbers**

Opacity always accepts a number value which is between 0 to 1.

opacity controls the transparency of the element(0 means completely transparent, 1 means fully opaque(default value))

**Color**

**1) Named Colors**

CSS defines a set of **predefined color names** that browsers understand.

Examples:

color: red;  
background-color: blue;  
border-color: lightseagreen;

There are **140+ standard color names** (such as lightblue, orange, black).

**2) Hexadecimal Color Values**

Hex values are one of the most common ways to define precise colors.

Syntax:

[#RRGGBB](#RRGGBB) / _6-digit_ /  
[#RGB](#RGB) / _3-digit shorthand_ /  
[#RRGGBBAA](#RRGGBBAA) / _8-digit with alpha_ /  
[#RGBA](#RGBA) / _4-digit shorthand with alpha_ /

**what is hue ?**

In CSS, the concept of a hue color wheel is directly implemented through **HSL (Hue, Saturation, Lightness)** and other color functions like hwb(), lch(), and oklch(), where the hue is represented as an angle on a color circle.

Understanding Hue in CSS

The hue value in CSS color functions is an angle from 0 to 360 degrees, representing a position on the sRGB color wheel. The key color positions are:

- **0° (or 360°):** Red
- **60°:** Yellow
- **120°:** Green
- **180°:** Cyan
- **240°:** Blue
- **300°:** Magenta

**3) rgb() and rgba()**

This format uses **red, green, and blue channels** with optional transparency (alpha).

Syntax:

rgb(255, 0, 0) / _red_ /  
rgb(0 255 0 / 50%) / _with alpha (50% opacity)_ /

Example:

color: rgb(255, 128, 64); / _dusty orange_ /

- Each channel ranges 0-255
- Alpha (transparency) is optional and written with a /

**4) hsl() and hsla()**

This uses **Hue-Saturation-Lightness**:

hsl(hue, saturation%, lightness%)

Example:

color: hsl(150 50% 60%); / _greenish_ /

- Hue: 0-360 (color angle on a wheel)
- Saturation + Lightness: 0-100%
- Alpha can be added like rgb: hsl(150 50% 60% / 0.5)

[**HWB**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units#hwb)

A great starting point for using hues in CSS is the [hwb()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/hwb) function, which specifies an srgb() color. The three parts are:

- **Hue**: The base shade of the color. This takes a [&lt;hue&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/hue) value between 0 and 360, representing the angles around a color wheel.
- **Whiteness**: How white is the color? This takes a value from 0% (no whiteness) to 100% (full whiteness).
- **Blackness**: How black is the color? This takes a value from 0% (no blackness) to 100% (full blackness).