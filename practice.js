/*
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

/*
  Create an object called me.
  Give it a key of name with the value being your name, and another key of age with the value being your age.
  Then alert your name using dot notation.
*/

//Code here
var me = {
  name: 'Delfin',
  age: 25,
};
alert(me.name);
////////// PROBLEM 2 //////////

/*
  Make a 'favoriteThings' object that contains the following keys:

    band, food, person, book, movie, holiday

  Have the values to those keys be strings that are equal to your favorite thing in that category.
*/

// Code here
var favoriteThings ={
  band:'PNA',
  food:'kamotekyu',
  person:'myself',
  book:'50 shades of grey',
  movie:'spiderman',
  holiday:'new year',
}
/*
  After you've made your object, use bracket or dot notation to add another key named 'car' with the
  value being your favorite car and then another key named 'brand' with the value being your favorite brand.
*/

//Code here

var x = favoriteThings;
x.car = 'mustang';
var y = favoriteThings;
y.brand = 'volvo';
/*
  Now use bracket or dot notation to change the value of the food key in your favoriteThings object to be 'Chicken Nuggets'
  and change the value of the book key in your favoriteThings object to be 'Harry Potter'.
*/
var w = favoriteThings;
w.food = 'Chicken Nuggets';
var t = favoriteThings;
t.book = 'Harry Potter';
//Code here

////////// PROBLEM 3 //////////

/*
  Create an empty Object called backPack.
  Now, create a variable called 'item' and set it equal to the string 'firstPocket'.
  Using bracket notation, add a 'firstPocket' key (or property) to backPack, using 'item'.
  Set the value of that key to 'chapstick'.
  Using dot notation, add another key (or property) to your backPack object that is named color, with the value being the color of your backpack.
*/

//Code here
 var backPack = { };
 var item = 'firstPocket'
 backPack.firstPocket = 'chapstick';
 backPack.color = 'black';

/*
  After you do the above, alert your entire backPack object.
*/

//Code here
alert(backPack);
/*
You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console.
*/

//Code here

////////// PROBLEM 4 //////////

// Do not edit the code below.
var user2 = {
  name: 'Aodhan',
  age: 28,
  pwHash: 'U+Ldlngx2BYQk',
  email: 'aodhan.hayter@gmail.com',
  birthday: '11/03/1990',
  username: 'aodhan.hayter',
};
// Do not edit the code above.

/*
  Let's say I, the user, decided to change my name and email address to the following:
  name -> 'Aodhan Hayter' and email -> 'aodhan@boom.camp'.
  Make that change without modifying the original object code above.
*/

//Code Here
var changeName = user2;
changeName.name ='Aodhan Hayter';
var changeEmail = user2;
changeEmail.email = 'aodhan@boom.camp';
/////////////////////// EXTRA PRACTICE PROBLEMS BELOW ////////////////////
////////// MOVE ONTO NEXT SECTION BEFORE WORKING ON THESE ////////////////

////////// PROBLEM 5 //////////

/*
  Create an empty object called methodCollection.
*/

//Code Here
let methodCollection ={}
/*
  Now add two methods (functions that are properties on objects) to your methodCollection object.
  One called 'alertHello' which alerts 'hello' and another method called 'logHello' which logs 'hello' to the console.
*/

//Code Here
methodCollection.alertHello = function(){

alert('hello');}
/*
  Now call your alertHello and logHello methods.
*/

//Code Here
methodCollection.logHello = function(){

  console.log('hello');}
////////// PROBLEM 6 //////////

/*
  Create a function called makePerson which takes in name, birthday, ssn as its parameters.
  Return a new object with all of the information that you passed in.
*/

//Code Here
function makePerson(name,birthday,ssn){
 var person={
  name:name,
  birthday:birthday,
  ssn:ssn

 }
 return person;
}
makePerson('Delfz','October 30','322-2311');
////////// PROBLEM 7 //////////

/*
  Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object.
  Return that object so that whenever you invoke makeCard, you get a brand new credit card.
*/

//Code Here
function makeCard(cardNumber, expirationDate, securityCode){

  var creditCard ={
    cardNumber:'2423423',
    expirationDate:'10-1-2020',
    securityCode:'123444',

  }
return creditCard;
}
makeCard('123341','10-21-2020','1234');