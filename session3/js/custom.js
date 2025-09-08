// document
// window
// const d = document.getElementById("my-id")
// console.log(d);
// const a = document.getElementsByTagName("p")
// console.log(a);
// document.getElementsByClassName("test")


// let d = document.querySelector("p")
// $(".x")
// console.log(d.innerText);
// console.log(d.textContent);
// console.log(d.innerHTML)

// d.innerHTML="hello<span>abc</span> <script>alert('hi')</script>"

// let btn = document.querySelector("#testbtn")
// btn.addEventListener("click", function(e){
//     console.log(btn)
//     console.log(e.target);
//     console.log(this);
//     // this.alert("test")
//     d.innerText="hello"    
// })

// let x = document.querySelector(".content")
// console.log(x.className)
// x.className = ""
// console.log(x.getAttribute("data-target"))
// x.setAttribute("class", "d-block")
// console.log(x.classList);
// x.classList.remove("d-none")
// x.classList.add("test")
// x.classList.toggle("d-none")


// let btns = document.querySelectorAll("#btns button")
// btns.forEach(
//     (btn, i) =>{
//         btn.addEventListener("click", (e)=>{
//             console.log(`c${i}`)
//             document.querySelector(`#c${i}`).classList.toggle("d-none")
//         })
//     }
// )
// document.querySelector('[data-target="a"]').classList.toggle("d-none");

// const btns = document.querySelectorAll("#btns div")
// const content = document.querySelectorAll("#content div")

// btns.forEach((btn, ind)=>{
//     btn.addEventListener("click", ()=>{
//         btns.forEach(b=> {
//             b.classList.remove("bg-primary")
//             b.classList.add("bg-success")
//         })
//         btn.classList.add("bg-primary")
//         btn.classList.remove("bg-success")
//         content.forEach(b=> {
//             b.classList.add("d-none")
//         })
//         content[ind].classList.remove("d-none")
        
//     })
// })

// const dataWrap = document.querySelector("body")

// const myEle = document.createElement("p")

// dataWrap.appendChild(myEle)
// myEle.innerText="hello from js"
// myEle.classList="bg-dark text-white"

// let data = [
//   { id: 1, name: "Alice Johnson", image: "https://i.pravatar.cc/150?img=1" },
//   { id: 2, name: "Michael Smith", image: "https://i.pravatar.cc/150?img=2" },
//   { id: 3, name: "Sophia Davis", image: "https://i.pravatar.cc/150?img=3" },
//   { id: 4, name: "Daniel Brown", image: "https://i.pravatar.cc/150?img=4" },
//   { id: 5, name: "Emma Wilson", image: "https://i.pravatar.cc/150?img=5" },
//   { id: 6, name: "James Miller", image: "https://i.pravatar.cc/150?img=6" },
//   { id: 7, name: "Olivia Taylor", image: "https://i.pravatar.cc/150?img=7" },
//   { id: 8, name: "William Moore", image: "https://i.pravatar.cc/150?img=8" },
//   { id: 9, name: "Isabella Anderson", image: "https://i.pravatar.cc/150?img=9" },
//   { id: 10, name: "Benjamin Thomas", image: "https://i.pravatar.cc/150?img=10" }
// ];
// const body = document.querySelector("body")
// let container = document.createElement("div")
// container.className="container m-auto d-flex"
// body.appendChild(container)
// data.forEach(el=>{
    // let div = `<p class="m-2 col">${el.albumId}</p>`
    // container.innerHTML+=div
    // let img = document.createElement("img")
    // img.src = el.image
    // img.style.width = "20%"
    // img.style.fontSize=""
//     container.appendChild(img)
// })

// let button= document.querySelector("button")

// User Interaction Events such as: onclick, ondblclick, onmousedown, onmouseup, onmousemove.
// button.addEventListener("click", function(){
//     console.log("test")
//     button.nextElementSibling.remove()
//     button.previousElementSibling.remove()
//     // button.parentElement.remove()
//     let x = document.createElement("p")
//     x.textContent="hello"
//     button.parentElement.appendChild(x)
// })


// const ser = document.querySelector("#search")

// ser.addEventListener("input", function(e){
//     console.log(ser.value)
    // ser.value="hello"
// })

// ser.addEventListener("keyup", function(e){
//     console.log(e.key)
//     if(e.key=="Enter"){
//         console.log(ser.value)
//     }
// })
// ser.addEventListener("change", function(e){
//     console.log(ser.value)
// })


// const myForm = document.querySelector("#myForm")
// myForm.addEventListener("submit", function(e){
//     e.preventDefault()
//     let isValidForm = true
    // console.log(myForm.name.value)
    // if(myForm.name.value.length<3 || myForm.name.vale.length>20){
    //     isValidForm = false
    // }
    // let user = {
    //     name: myForm.name.value,
    //     age: myForm.age.value,
    //     email: myForm.email.value,
    //     phone: myForm.phone.value,
    // }
    // console.log(user);
    // window.location.href = "a.html"
    // console.log(window.location.href)
    // console.log(window.location)
// })
// console.log(document)
// console.log(document.baseURI)
// console.log(document.head);
// console.log(document.doctype);
// console.log(document.p)


// Page Events such as: onload, onunload, onbeforeunload, onpageshow, onpagehide.
// Input & Form Events such as: onchange, oninput, onfocus, onblur, onsubmit, onreset.
// Media Events such as: onplay, onpause, onended, onvolumechange.
// Animation & Transition Events such as: onanimationstart, onanimationend, ontransitionend.
// Drag & Drop Events such as: ondrag, ondragover, ondrop.
// Mouse Events such as: onmouseover, onmouseout, onmouseenter, onmouseleave.
// Keyboard Events such as: onkeydown, onkeyup, onkeypress.
// Scroll Events such as: onscroll, onscrollend.
// Pointer Events such as: onpointerdown, onpointermove, onpointerup.
// Touch Events such as: ontouchstart, ontouchmove, ontouchend.


// document.querySelector("#f1").addEventListener("submit", function(e){
//     e.preventDefault()
//     let data = e.target.data.value.trim()
//     if(data){
//         let d = document.createElement("div")
//         d.className = "col-4 bg-light m-3"
//         d.innerText = e.target.data.value
//         let btn = document.createElement("button")
//         btn.innerText="delete"
//         btn.className = "btn btn-danger"
//         d.appendChild(btn)
//         this.parentElement.appendChild(d)
//         btn.addEventListener("click", function(e){
//             d.remove()
//         })
//         this.reset()
//     }
// })

let x = [{name:"a"}, {name:"b"}, {name:"c"}]
let d = localStorage.setItem("data", JSON.stringify(x))

let result = JSON.parse(localStorage.getItem("data"))
console.log(result, typeof result)