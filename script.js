// Storages

// localStorage
localStorage.setItem("username", "Narasimhan");
localStorage.setItem("age", 29);
// let user = localStorage.getItem("username");
// console.log(user);
localStorage.removeItem("username");
localStorage.clear();

// sessionStorage
sessionStorage.setItem("username", "Someone");
sessionStorage.removeItem("username");

// logged user data
// let user = {
//     id: 100,
//     name: "Lakshmi Narasimhan",
//     email: "narasimhan@mail.com",
//     role: "Mentor"
// };

// localStorage.setItem("logged_user", JSON.stringify(user));

// let appuser = localStorage.getItem("logged_user");
// let convertedData = JSON.parse(appuser);
// console.log(JSON.parse(appuser));

// Bindings
// subtopics(4)
// this | call() | apply() | bind()
let username = "Narasimhan";

const user = {
    username: "Someone",

    welcome: function(){
        console.log(this.username);
    }
}

user.welcome();

// call()
const user1 = {
    name: "John",
    age: 25
};

const user2 = {
    name: "Alex",
    age: 20
};

function greet(city, event){
    console.log("Welcome", this.name, this.age, city, event);
}

greet.call(user1, "Chennai", "AI Event");
greet.apply(user2, ["Coimbatore", "Music Event"]);

function sayHello(){
    console.log(this.name);
};
const result = sayHello.bind(user2);
result();

// Prototype
// OOPS - Object Oriented Programming
// inheritance
function User(name, email){
    // constructor
    this.name = name;
    this.email = email;
};

User.prototype.message = function(){
    console.log("Hello", this.name, this.email);
};

const emp1 = new User("Narasimhan", "narasimhan@mail.com");
const emp2 = new User("Someone", "someone@mail.com");

console.log(emp1);

emp1.message();
emp2.message();