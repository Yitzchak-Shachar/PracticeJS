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




console.log();console.log();console.log();console.log();console.log();
