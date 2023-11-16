
let form=document.querySelector(".form")
let text=document.getElementById("text")
let track=document.querySelector(".track")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    todolist()
})
function todolist(){
    let value=text.value
    let li=document.createElement("li")
    li.innerHTML=value
    track.appendChild(li)
    text.value=""
    let button=document.createElement("button")
    button.innerHTML="xóa"
    li.appendChild(button)
    button.addEventListener("click",()=>{
        li.remove()
    })
    local()
}
function local(){
    let arr=[]
    let li1=document.querySelectorAll("li")
    for(let i=0;i<li1.length;i++){
        arr.push(li1[i].innerHTML)
    }
    localStorage.setItem("arr",JSON.stringify(arr))
}