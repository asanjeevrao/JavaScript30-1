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







