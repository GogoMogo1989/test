
/* for(let i=0; i<5; i++){
    console.log('in loop:', i)
}
console.log('loop finished') */
const names = ['shaun', 'mario', 'luigi', 'yoshi']

/* for(let i = 0; i < names.length; i++){
    let html = `
        <div>
            ${names[i]}
        </div>
    `
    console.log(html)
} */

/* let i = 3

do{
    console.log(i)
    i++;
} while(i < 5) */

/* const age = 25;

if(age > 20){
    console.log('you are over 20 years old')
}

if(names.length > 4){
    console.log('lot of ninjas')
}
 */
/* 
const password = 'p@ss'

if(password.length >= 12 && password.includes('@')){
    console.log('password is mighty strong')
}else if(password.length >= 8 || password.includes('@') && password.length > 5){
    console.log('that password is strong enough')
}else{
    console.log('that password is not strong enough')
}
 */

/* const scores = [ 50, 25, 0, 30, 100, 20, 10]

for( let i =0; scores.length; i++){
    

    if(scores[i] === 0){
        continue
    }

    console.log('your scores :', scores[i])

    if(scores[i] == 100){
        console.log("congrats, you got the top scores")
        break
    }
} */

/* const grade = 'p'

switch(grade){
    case "A":
        console.log("You got a A")
        break
    case "B":
        console.log("You got a B")
        break
    case "C":
        console.log("You got a C")
        break
    case "D":
        console.log("You got a D")
        break
    case "E":
        console.log("You got a E")
        break
    default:
        console.log("not a valid grade")
} */
/* 
let age = 30

if(true){
    let age = 40
    let name = "Shaun"
    console.log("inside code block ", age, name)

    if(true){
        let age = 50
        console.log('inside second codeblock :', age)
    }
}

console.log("outside code block ", age) */

/* function greet () {
 console.log("hello there")
} */

/* const speak = function(name = "Berna", time = "night"){
    console.log(`good ${time} ${name}`)
}

speak("Béla", "morning") */


/* const calArea = function (radius){
    return 3.14 * radius **2
}
const a = calArea(5)
console.log(a)

const calVol = function (area){

}

calVol() */

/* const calArea = function (radius){
    return 3.14* radius **2
}

const calcArea = (radius) =>  3.14*radius**2


const area = calcArea(5)
console.log(area) */

/* const great = function () {
    return "hello world"
}
 */
/* const great = () => "helolo world"
const result = great()
console.log(result)

const bill = (product, tax) => {
    let total =0
    for( let i =0; i< product.length; i++){
        total += product[i] + product[i] * tax
    }
    return total
}

console.log(bill([10,15,20], 0.2)) */

/* const name = "Shaun" */

//function

/* const great = () => "hello"
let resultOne= great()
console.log(resultOne) */


//method

/* let resultTwo = name.toUpperCase()
console.log(resultTwo) */

/* const myFunc = (callbackFunc) => {
    let value = 50
    callbackFunc(value)
}

myFunc(function(value){
    console.log(value)
}) */

/* let people = ["berna", "peti", "parpa", "nina", "andi", "gyula"]

const logPerson = (person, index) => {
    console.log(`${index} "hello" ${person}`)
}

people.forEach(logPerson) */

/* const ul = document.querySelector('.people') */

/* const people = ["berna", "peti", "parpa", "nina", "andi", "gyula"]

let html =``

people.forEach(person => {
    html += `<li style ="color: purple">${person}</li>`
})

console.log(html) */
/* ul.innerHTML = html */



/* let user = {
    name:"christal",
    age: 32,
    email: "christal@gmail.com",
    location: "berlin",
    blogs: [ 
        {title: "why mac and cheese rulse", likes: 30},
        {title: "10 hings a make with marmie", likes: 34}
    ],
    login: function(){
        console.log("the user logged in")
    },
    logout:function () {
        console.log("the user logged out")
    },
    logBlogs: function() {
        console.log("this user has written the following blogs")
        this.blogs.forEach(blog =>{
            console.log(blog.title, blog.likes)
        })
    }
}

user.logBlogs() */

/* console.log(Math.PI)
console.log(Math.E)

const area = 7.7;

console.log(Math.round(area))
console.log(Math.floor(area))
console.log(Math.ceil(area))
console.log(Math.trunc(area))

const random = Math.random()

console.log(random)
console.log(Math.round(random*100)) */

let scoreOne = 50
let scoreTwo = scoreOne

console.log(`score one : ${scoreOne}, score two: ${scoreTwo}`)



console.log(`score one : ${scoreOne}, score two: ${scoreTwo}`)





