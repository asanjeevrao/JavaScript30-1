
Template literals are string literals allowing embedded expressions. `string text ${expression} string text` 

Any newline characters inserted in the source are part of the template literal.

Using normal strings, you would have to use the following syntax in order to get multi-line strings:

console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"
Using template literals, you can do the same like this:

console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

Use const for things that don't change such as elements of a document 

You can use window vs document event listener, they do the same thing for the most part - That said, some events, like scroll and resize, must be attached to the window  

variables can be thought of as having truth-y or false-y values - `if (!audio) return;`

HTML data-* attributes: Introduced in HTML5, data-* attributes (where * can be anything you want) allow us to store custom data on any HTML element. Query selector in the format - [data-key="${e.keyCode}"]

How do we prevent delay playing sound, if we keep hitting a key?
just add audio.currentTime = 0; before audio.play();