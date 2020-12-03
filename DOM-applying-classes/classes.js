// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one()
}
  // Your turn! Create a new function called `two`, then call it from here.
function start () 
{
  two()
}

  // function three

function start ()
{
  changediv3()
}

  // Function four

function start ()
{
  makeVisible()
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

// CREATE FUNCTION two HERE

function two() {

  var two = document.getElementById ('two')
  two.classList.add('green')
}

// CREATE FUNCTION three HERE

function changediv3()
{
  var thisismyvar = document.getElementById ('three')
  thisismyvar.classList.add('div3')
}

// CREATE FUNCTION makeVisible HERE

function makeVisible()
{
  var mysecondvar = document.getElementsByClassName ('invisible')
  mysecondvar [0].classList.add('visible')
    
}        