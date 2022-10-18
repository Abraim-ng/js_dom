// Dom Manipulation
// const title = document.querySelector('#main-heading');
// title.style.color = 'red'; //change the color of the main heading
// console.log(title);


// ------------------Styling Elements ----------------------------------
// const listItems = document.querySelectorAll('.list-items');

// for ( i = 0; i < listItems.length; i++ ) {
//     listItems[i].style.fontSize = '2rem';
// }

// console.log(listItems);

//creating elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');


// adding elements

// ul.append(li); //add text

// modifying the text

// li.innerText = 'X-Men';

// Modifying Attributes & Classes

// li.classList.add('list-items')







// Dom Manipulation

// Traverse the DOM

// Parent Node Traversal

// Child Node Traversal
// let ul = document.querySelector('ul');
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'blue';
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling Node Traversal

let ul = document.querySelector('ul');
const div = document.querySelector('div');
console.log(div.childNodes);    
console.log(ul.previousSibling);
console.log(ul.nextSibling);