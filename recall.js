document.write("El-Shaddai did this")
alert("Hi,welcome")
//Keywords to declare variables/ identifier
//Var is the oldest keyword
var lady=50;

//Newest keyword introduced in ES6
let $dot= 20
if($dot >=15) 
    {
    let _fisher = 5;
    console.log(_fisher);
}

let _fisher = "Keep it all";
console.log(_fisher);


//Constant variables
//Variables with const can not be reassigned to new values
const wildLife = "Animals";
console.log(wildLife) ;



//Scope
//Global scope: Variables & functions declared in global scope are visible from anywhere in the program
var _study = "3 girls";
function example(){
    console.log(_study);
}
example();

//Function scope
//It is created when a function is declared. Variables within the functon scope aren't visible outside of it
//Note: Be sure to include semicolons after declaring funtions
//Note: remember to use quotes around string values 
function menu(){
    var list = "Banana, Milk, Butter, Fruit juice";
    console.log(list);
}
menu();


//Block scope: The visibility of variables and functions within a block of code
//A block of code is a group of statements that are enclosed in curly braces ({})

function blockScope(){
    if (true){
        let _lesson = "JavaScript";
        console.log(_lesson);
    }
}
blockScope();


//String: Storing and manipulating text
let firstName = "Anna"
let lastName = 'Boakye'
console.log(firstName,lastName)
console.log(typeof firstName)

//Number: It represents integers & floating point numbers
let num = 56.83
console.log(typeof num)
console.log(num)

//Boolean
let adapt = true
let suffering = false
console.log(adapt)
console.log(suffering)

let girlCoders = 20<70;
console.log(girlCoders);

//Undefined : If a variable is declared but the value is not assigned

//Null: Empty or unknown values
//In JS null equals void
let power = null;
console.log(power);
//A known bug
console.log(typeof power);
console.log(null == undefined);


//Reference data types
//Object : A collection of properties where each value is defined as a key-value pair
//key-value is simply the data assigned to the properties
//Good for representing complex data structures, entities, or configs
//An object can store different data types 
//You can store other objects in your object by using nested objects and accessing them using dot notation
let student = {
    firstName : "EL-SHADDAI",
    lastName :'SARBAH',
    age : 63,
    programme : 'Cyber Sec.',
    academics : {
        gpa : 2.5,
        courses :['Cybersecurity Essentials', 'Programming in Python', "Descrete Mathematics" ] ,
        _gradYear : 2029
    }
};
console.log(student);
console.log(student.academics); //Dot notation
console.log(JSON.stringify (student, null, 3));//JSON.stringify() with a space parameter to prevent cramming
console.log(typeof student);
console.dir(student, {depth: null, colors: true});//Outputs your object in a more redable format, 
// with collapsible sections and syntax highlighting

//Arrays are a type of object that stores different/ collection types of values
//Good for lists, collections of similar items, or sequences of data 
let movies = ['Snow White', 2, 36, 'Moana 2']
console.log(movies);
console.log(typeof movies);

//Operators
//exponentiation
let x = 3 ** 24;
console.log (x);

//Addition
let w = 5;
w += 3;
console.log(w);

//Subtraction
let p = 5;
p -= 3;
console.log(p);

//Multiplication
let abi = 15;
abi *= 3;
console.log(abi);

//Do you own with division

//modulo
let _sam = 15;
_sam %= 3;
console.log(_sam);


//Assignment operators
let game = 'ch';
game +=  'ch';
console.log(game);

//Increment operator ++
//These operators can be used as prefix & postfix
let jean = 10;
console.log(++ jean);//Prefix

let poly = 10;
console.log(poly++);
console.log(poly);//Postfix

//Decrement operator  --

let rose = 8;
console.log(-- jean);//Prefix

let doc = 8;
console.log(doc--);//Postfix
console.log(doc);

//Comparison operators
a = 24
c = 15

console.log(a < c);
console.log(a >c);
console.log(a <= c);
console.log(a >= c);

//Equality & inequality
console.log(a == c);
console.log(a != c);

//Strict equality & inequality
console.log(a === c); //Checks data type
console.log(a !== c);

//Logical operators
//AND (&&)
//The AND operator works like basic addition of negative and positive operators

// OR (||)
//Returns true if one of the operands are true
// NOT (!)


