console.clear();
var listItems = jQuery('li');//creat jq object using css selector
var  listItems  = $('li'); //same , the hyphen($) stends for the jQuery function
console.log(listItems.length);

//since fuctions are objects , you can access other props of the jq obj:
console.log($.support);

//wrap your code with [$(document).ready(  your_code_here)]  to ensure the page is loaded befor mnipulating it
// example:
$( document ).ready(function() {
  console.log( 'ready!' );
});
// use a shorthand for trhat function: it do the same both actions ,  catch the current document , the set a funtion to its ready 
$(function() {
  console.log( 'ready!' );
});
console.log();
