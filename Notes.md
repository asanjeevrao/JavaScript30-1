**Exercise 1**

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

To add the stylesheet, we use href and not src.
<link rel="stylesheet" href="style.css">

**Exercise 2**

CSS property 'transform' to rotate with value in the format (90deg) to rotate an element 

CSS property 'transform-origin' to decide where the movement happens around, for rotation. Can be set as % or 'right center'

CSS property 'transition' - this tells the browser to gradually apply any changes to the element's styling over a 0.05 second period.

**Exercise 3**
 document.querySelector gives Nodelist as output which is different from Array. 

To check the protoype of a variable, print variable in console and click on 'proto'

JavaScript is a scripting language — which means there’s no compilation step in the execution of code. The interpreter reads the code and executes it line by line. The environment (or scope) in which the line is being executed is known as the execution context. The JavaScript runtime maintains a stack of these execution contexts, and the execution context present at the top of this stack is the one currently being executed. The object this refers to changes every time the execution context is changed.

CSS Variables - 

const pixValue = this.dataset.sizing || ''; OR operator can be used to set optional values based on truth-y or false-y values



**Exercise 4**
String comparison - 

Sort 

Split string 

Array.prototype? 

Possible to assign values in an array like - 
const [aLast, aFirst] = lastOne.split(', ');

Reduce can take object as an input, only thing to note it has to return the object after manipulation in each iteration. E.g. - 
 const transportation = data.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});


const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));    

HTML DOM textContent Property - The textContent property sets or returns the text content of the specified node, and all its descendants.
textContent returns the text content of all elements, while innerText returns the content of all elements, except for <script> and <style> elements.

JavaScript String includes() Method - The includes() method determines whether a string contains the characters of a specified string.

HTML DOM innerHTML Property - The innerHTML property sets or returns the HTML content (inner HTML) of an element.




**Exercise 17**
Array function map does not modify the current array - it returns a new array with the modifications

trim() - string function use to remove spaces

replace() - string function used to replace parts of a text with a different string. To remove a string, use replace to search for text you want to remove and replace with ''.

Replace (and search()) can be used with Regular Expresssions (regex) - which allow multiple words to be searched, exact matches, lower/upper indifference, etc.  
Eg: bandName.replace(/^(a |the |an )/i, '').trim(); 

join() function - The array.join() method is an inbuilt function in JavaScript which is used to join the elements of an array into a string

includes() method determines whether one string may be found within another string, returning true or false as appropriate.

To remove characters from a string - use substring() or slice()

Unlike innerText, innerHTML lets you work with HTML rich text and doesn't automatically encode and decode text. In other words, innerText retrieves and sets the content of the tag as plain text, whereas innerHTML retrieves and sets the content in HTML format. 
innerHTML can be used with ` ` template expressions to add HTML code to elements. 
Eg: document.querySelector('#bands').innerHTML =
        sortedBands
        .map(band => `<li>${band}</li>`)
        .join('');


**Exercise 10**
NodeList has a forEach function - for a node list of dom elements that you want to add listeners over, no need to convert to array




