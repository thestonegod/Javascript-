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

//Operators
//exponentiation
let x = 3 ** 24
console.log (x)

//Assignment operators
let game = 'ch';
game +=  'ch';
console.log(game);



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



