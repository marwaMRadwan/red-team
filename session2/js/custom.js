// console.log("test")

// variables
// var let const

// y = 9
// let x = 5
// const z =5
// x = "test"
// if(true){
//     let x= 10
    
//     if(true){
//         let x = 15
//         console.log("l2",x);
        
//     }
//     console.log("l1",x);
// }
// console.log(x)

// const let 
// operators 
//  math operators + - * / ** %
// ternery operator

// let x = 5
// x == 6 ? console.log("equal") : console.log("not equal")

// if(x==6)
//     console.log("");
// else
//     console.log("")
// == === != !== > >= <=  
// let a=5 , b="5"
// a===b
// console.log(typeof b) 
// console.log( a === b )

// = += -=  .....

// a += 6

// && || !



// let z = ""
// console.log(z);

// if(z) console.log("true")
// else console.log("false");
// let i = 1
// for(; ;){
//     console.log(1);
//     i++
//     if(i==10) break
// }
// let ch 
// do{
//     ch = prompt("please enter value")
// }while(ch!=0)
    
// while( ch != 0 ){
//     ch = prompt("please enter value")
// }

// let monNum = prompt("enter valid day number")
// switch(monNum){
//     case 1: console.log("sun"); break
//     case 2: console.log("mon"); break

//     default: console.log("error in inserting")
// }


// let yearOfBirth = prompt("enter a year"), result
// switch(yearOfBirth%12){
//     case 0: resul="a"; break
//     case 0: resul="a"; break
//     case 0: resul="a"; break
//     case 0: resul="a"; break
//     case 0: resul="a"; break
//     case 0: resul="a"; break
// }
// console.log(result)

const log = console.log
// function
// function funName(x=10, y){
//     log(x)
// }
// funName(5)

// f1()

// const f1 = function(){
//     log("test")
// }


// const f2 = () => {
//     log("test")
// }


// function add(x=0,y=0){
//     return  x + y
// }
// const add1 = function(x=0, y=0){
//     return x+y
// }
// const add2 = (x=0, y=0) => x+y

// const x = (...n) =>{
//     log(n)
// }

// log(add(5,3))
// x(1,2,3,6,5,1)
// const f2 = (...val) =>{
//     log(val)
// }
// f2(1,2,3)
// log("-----------------------------------")
// f2(1)
// log("-----------------------------------")
// f2(1,8,5,9,63)

// log(arr.length)
// log(arr[1])
// arr[100] = 1
// log(arr)

// const arr = [1, true, "z", 5.5]
// const f = (x, a) => {
//     a[1] = "test function"
//     x = "test"
// }
// let x =10
// f(x, arr)
// log(arr, x)


// const arr = [1,2,3]
// arr[3] = 6
// arr = 10

// for(let i =0 ; i< arr.length ; i++){

// }
// let sum =0
// arr.forEach((a, i, val) => {
//     // log(a, i, val)
//     sum+=a
// });
// for(x of arr){
//     console.log(x)
// }

// const f1=function(x){
//     function f2 (){
//         return(arguments)
//     }
//     log(f2(x))
//     return("f1");
// }

// log(f1(3))

// if(true){
//     let x = 0
//     if(true){
//         console.log(x)
//     }
// }


// let zz = () => {
//     log(this)
// }
// zz()


// let a = []
// log(Array.isArray(a))
// a.forEach(()=>{})

// const f=()=>{
//     const z=()=>{
//         const y=()=>{
//             const f=()=>{
//                 return 1
//             }
//         }
//     }
// }
// f()

// (function(){ console.log("hello")}())


const names = ["Marwa", "Ali", "Sara", "Omar", "Lina", "Youssef", "Nour", "Hassan", "Aya", "Khaled"];

// names.forEach(name=> log(`your name is ${name}`))

// let result = names.findIndex(name=>  name.includes("i") )

// console.log(result)

// names.lastIndexOf("Ali")

// let user = {
//     "id": 1,
//     "name":"test",
//     "age":25,
//     "email": "test@email.com"
// }
// user.id
// user["id"]

// usser["abc"] = "test"

const data = [
  { "id": 1, "name": "Alice Johnson", "email": "alice@example.com", "role": "admin" },
  { "id": 2, "name": "Bob Smith", "email": "bob@example.com", "role": "user" },
  { "id": 3, "name": "Charlie Lee", "email": "charlie@example.com", "role": "editor" },
  { "id": 4, "name": "Diana King", "email": "diana@example.com", "role": "user" },
  { "id": 5, "name": "Ethan Wright", "email": "ethan@example.com", "role": "moderator" },
  { "id": 6, "name": "Fiona Green", "email": "fiona@example.com", "role": "user" },
  { "id": 7, "name": "George Brown", "email": "george@example.com", "role": "admin" },
  { "id": 8, "name": "Hannah Davis", "email": "hannah@example.com", "role": "editor" },
  { "id": 9, "name": "Ian Clark", "email": "ian@example.com", "role": "user" },
  { "id": 10, "name": "Julia Adams", "email": "julia@example.com", "role": "moderator" }
]

data.forEach(d=>{
    console.log(`${d.id} - ${d.name} - ${d.role}`)
})