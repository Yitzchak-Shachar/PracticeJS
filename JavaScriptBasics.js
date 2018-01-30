console.clear();
// function defuinition

var greet = function (person,message) {
	var greeting= "Hello "+person+", "+message;
  console.log(greeting);
			
}

greet('Alon','How do you do'); // single line comment
greet ('Fanny','Have a nice day'); /*multi line or inline comment*/

/// variables
var a= 1;
var b = 'some text';
var c = a , d=22;

var AddNums = function(num1,num2) {
 return num1+num2;
}

console.log("Adding numbers "+a+"+"+d+" : "+AddNums(a,d));

//$(target).text('text1');

/// variable scop

var func1 = function(){
var foo1=7;
}
func1();
console.log(typeof foo1); // this result error since foo1 seeems undefined


/// same name var but on diffrent scop

var bar1=9;
var func2 = function(){
var bar1=7;
bar2 =34;// this is a global var, even if defined within func
}

console.log(bar1);
func2();
console.log(bar1);
console.log(bar2);


/// js dtata types are:
/*
object 
string
number
boolean
undefined
null
*/


/// object

var person1 = {FirstName:'Isac',LastName:'Lev',Age:22};

console.log("Fn="+person1.FirstName);
console.log("Ln="+person1['LastName']);
var prop1 = 'Age';
console.log("Age="+person1[prop1]);


person1.age=44;
person1.greet=greet;

person1.greet('Ugi','Do you want a cookie?')

person1.greet2 = function(msg){
console.log("Hello "+this.FirstName+', '+msg);
}

person1.greet2('are you well?');

var SayIt = person1.greet2;
var SayItSimple = person1.greet;
SayIt.call(person1,' another message')

SayItSimple();// this produces empty strings since invoked on null object
SayItSimple(person1.FirstName,' evu zale?');
//same result using .apply() , but delivering all arguments whith array
SayItSimple.apply(person1,[person1.LastName,' how do you go??']);


// using js onb on jquery obj to set several properties inb one action:
$('#main').css({
  color: 'red',
  border: '5px solid blue'
});



/*
the 'this' keyword imply to diffent objects , depends of the call state:
1)jQuery tends to take control over its meaning.
2)In the case of event handlers, this will refer to the element to which you bound the handler;
3)in the case of iterating over a set of elements in a selection, this will refer to the current element in the iteration.
*/

var myArray = [1,6,-3,'t' ,"YoYo"]
var firstItem = myArray["0"];


console.log(firstItem);
console.log(myArray[4]);
console.log(myArray.length);

for (i = 0; i  < myArray.length ; i++) {
   console.log("element "+i+" on myArray is "+myArray[i]+'\n');
}


/*  All values on js are TRUE except:
  undefined (the default value of declared variables that are not assigned a value)
  null
  NaN ("not a number")
  0 (the number zero)
  '' (an empty string)

*/

if("WHAT"){console.log("All is true");}
else{ 
console.log("or not?");
}

if(!NaN){console.log("A negative check");}

var  notANumber= 'four' - 'five';
console.log(notANumber);
if ( notANumber == false ) {
  // this code will not run!
  console.log( 'notANumber was falsy' );
} else {
  // this code will run
  console.log( 'notANumber was truthy' );
}

var foo =1;
var bar =0;
var baz =2

var doSomthing1 = function(){return"soWhat"}
console.log("foo||bar= "+(foo || bar));
console.log("foo&&baz= "+(foo&&baz));
console.log("foo||doSomthing1()   "+  (foo||doSomthing1())); // run doSomthing1() only if foo is falsy
console.log("bar||doSomthing1()   "+  (bar||doSomthing1())); // run doSomthing1() only if foo is falsy

var res1 = foo || bar;
console.log(res1);

// a ternary conditional operator:
var dim;
var propertyName = ( dim === 'width' ) ? 'clientWidth' : 'clientHeight';
console.log("propertyName="+propertyName);

// naming convertions
var     _privateVar, $jQaueryObj, SomeObjectConstroctor;
//starts^_           ^$           ^capital

/*    reserved keywords:
abstract boolean break byte case catch char class const continue debugger
default delete do double else enum export extends false final finally float
for function goto if implements import in instanceof int interface long
native new null package private protected public return short static super
switch synchronized this throw throws transient true try typeof var
volatile void while with*/

// inorder to use keyword as var\function name, use that:
var myArgs1 = {  arg1:2 , arg2:7 , "interface":"MOOKI" , 'break':1};


// be aware of the way js handles numbers accuration:
console.log(0.0001 + 0.0002);  // outpot is 0.00030000000000000003

// js is loosly-type language thefor dont fail on ambigus litrrals:
console.log( 'a' + 2 );           // 'a2'
console.log( '4' + 3 );           // '43'
console.log( 'five' - '4' );      // NaN (not a number)
console.log( - '1' );             // -1
console.log( 1 + true );          // 2
console.log( 1 == true );         // true
console.log( 1 === true );        //false

console.log();
