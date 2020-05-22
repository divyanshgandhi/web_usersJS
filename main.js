/*
//Variables
// var, let, const
  var is depreciated(global level scope)
    let, and const to be used(block level scope)
    let is for variable, const is for constants

let age = 30;
console.log(age);*/


/*
//Data Types
// String, Numbers, Boolean, null, undefined

const name = 'John';
const age = 40;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof x);*/


/*
//Strings

const name = 'John';
const age = 40;
console.log('My name is ' + name + ' and I am ' + age);
console.log(`My name is ${name} and I am ${age}`);

//String methods
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.substring(0,2));
console.log(name.split(''))*/


/*
//Arrays

const numbers = new Array(1,2,3,4,5);
//or
const fruits = ['apple', 'orange', 'mango'];
console.log(numbers);
console.log(fruits);
console.log(typeof numbers);

fruits[3] = 'grapes';
fruits.push('mangoes');
fruits.unshift('strawberries');
console.log(fruits);
fruits.pop();
console.log(fruits);*/


/*
//Object type
const person = {
    firstName: 'Divyansh',
    lastName: 'Gandhi',
    age: 20,
    hobbies: ['programming', 'music', 'movies'],
    address: {
        street: '17 Sector',
        city: 'Faridabad', 
        state: 'Haryana'
    }
}

console.log(person.hobbies[2]);
//console.log(firstName); gives error

const {firstName, lastName} = person;
console.log(firstName, lastName)

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: false
    },
    {
        id: 2,
        text: 'Complete course',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Make dinner',
        isCompleted: true
    }
];*/

//console.log(todos);
//console.log(todos[1].text);

/*
//Loops
for(let i=0; i<10; i++){
    console.log(i);
}
let i=0;
while(i<10){
    console.log(`While number: ${i}`)
    i++;
}

for(let i=0; i<3; i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo.text);
}

todos.forEach(function(todo){
    console.log(todo.text);
})*/


/*
//Fucntions
function addNums(num1, num2){
    return num1+num2;
}

const addNumbers = (num1, num2) => num1+num2;

console.log(addNumbers(5, 6))*/


/*
//Classes
function Person(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)

    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getBirthDay = function(){
        return this.dob.toDateString().substring(0,3)
    }
    this.getfullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

//or

class Student{
    constructor(firstName, lastName, dob, roll){
        this.firstName = firstName;
        this.lastName = lastName
        this.dob = new Date(dob)
        this.roll = roll
    }

    getRoll(){
        return this.roll
    }
    getfullName(){
        return `${this.firstName} ${this.lastName}`
    }
    getBirthDay(){
        return this.dob.toDateString().substring(0,3)
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
}

const person1 = new Student('Divi', 'Gandhi', '4-12-1999', 21);
const person2 = new Person('Kavi', 'Gandhi', '09-23-1976')

console.log(person2.getBirthDay())
console.log(person1.getRoll())*/


/*
//DOM
//Single element
const form = document.getElementById('my-form')
console.log(form)
console.log(document.querySelector('.container'))

//Multiple
console.log(document.querySelectorAll('.item'))
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li'))*/

/*
const ul = document.querySelector('.items')
//ul.remove()
//ul.lastElementChild.remove()
ul.firstElementChild.textContent = 'Hello'
ul.children[1].innerText = 'Brad'
ul.lastElementChild.innerHTML = '<h1>Hello, Brad</h1>'

//Event listeners
const btn = document.querySelector('.btn')
btn.style.background = 'red'
btn.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc'
    document.querySelector('body').classList.add('bg-dark')
})*/

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const usersList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault()
    
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error')
        msg.innerText = 'Please enter all the fields'

        setTimeout(() => msg.remove(), 3000)
    }else{
        console.log('success')
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value}, ${emailInput.value}`))
        usersList.appendChild(li)
        nameInput.value = ''
        emailInput.value = ''
    }
}