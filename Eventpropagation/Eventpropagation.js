// DOM Manupilation

// Event Propagation

window.addEventListener("click", function() {
    console.log('window');
},false);

document.addEventListener("click", function() {
    console.log('Document');
},false);

document.querySelector(".div2").addEventListener("click", function(e) {
    e.stopPropagation()
    console.log('DIV 2');
},false)

document.querySelector(".div1").addEventListener("click", function() {
    console.log('DIV 1');
},false);

document.querySelector('button').addEventListener("click", function(e){
    console.log(e.target.innerText = 'clicked!');
},);

