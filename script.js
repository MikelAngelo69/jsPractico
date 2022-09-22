const h1 = document.getElementById("id")
const input1 = document.getElementById("input")
const input2 = document.getElementById("input2")
const button = document.getElementById("btnCalcular")

const p = document.querySelector("#p")

button.addEventListener("click", a)

function a(event){
 
    const suma = input1.value + input2.value;
    p.innerText = "resultado " + suma
}