/* importante!!!
/ we assume that all the below code is wrapped with the $() , so it will run only after DOM load completed:
$(function() {
  console.log( 'ready!' );
});
*/

//*this is muted line so i can use same code for diffrent examples without the need to rewrite code

console.clear();


// catch elements and do with them many things:
var li_elems = $('li'); // get all li elements on document 
$('#secpar'); // get some elem by its id attr
var ul_li_elems = $('ul li'); // get all elem li that are in ul
$('.bul'); //get elem by class


//all the above selections are relevant to that point of time, therefor if i'll add now more elements of the kind , the selection will not be automatically updated!

var x = $(document.body.children[0]); // get DOM elemet properties and wrap them with jq obj
x = $([window, document]); //create jq obj with list of DOM elemes

y = document.body;
x = $('ul', y); // make selection , based on existing DOM element

x = $('li', x); //make selection after pervious selection


// since jq obj is always a truthy boolean expression,we look up inside to see is data was getted
if (x != undefined && x.length > 0)
  console.log(' x.length is ' + x.length);
else
  console.log("obj x seems empty , no li catched");

// acess single element in th obj:
var all_li = $('li');
var first_li = all_li.length > 0 && all_li[0];
// now first_li hold a DOM element , not jq obj! thus , we cannot call jq functions like first_lhtml()
var first_li_html = first_li.innerHTML;
console.log(first_li_html);

// to access a DOM element in jq obj , and handle it as jq obj , we can use the .eq() reffering the index 
first_li = all_li.eq(0);
console.log(first_li.html());

//*all_li.eq(1).remove(); // perform othe jq obj functions

var newElem = $('<p>'); // create on memory new empty elemet
newElem = $("<p class='mClass'> This is a New paragfraph</p>");
// create element using object of k:v
newElem = $('<p>', {
  text: "BlaBla",
  'class': 'DDD' // wrpping the class aproperty since its a keyword
});

//test  the jq obj selection
var cond = all_li.eq(0).is('.special');
console.log('cond='+cond);
cond = all_li.eq(1).is('.special');
console.log('cond='+cond);

// another example, delivering a function to the .is() function
$( "li" ).click(function() {
  var li = $( this ),
    isWithTwo = li.is(function() {
      return $( "strong", this ).length === 2;
    });
  if ( isWithTwo ) {
    li.css( "background-color", "green" );
  } else {
    li.css( "background-color", "red" );
  }
});

//  when applying jq functions on the selected object, remember 
//   getters operate only on the first element in a selection (.text() is a notable exception)
//   setters operate on all elements in a selection, using what's known as implicit iteration.

//*$('li').html("new text");// set html for all li elements
$('p').html(function(index,oldHtml){return oldHtml+" Period!"}); // using function to set the value

$('i').each(function(index,elem){$(elem).prepend('<b> '+index+':</b>');});
console.log('FIN');
