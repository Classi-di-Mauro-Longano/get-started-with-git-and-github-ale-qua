//elements
const form = document.getElementById("formInvio")
const title = document.getElementById("todo-titolo")
const descrizione = document.getElementById("todo-desc")
const date = document.getElementById("InputDate")
const checkbox = document.getElementById("checkboxInput")
const button = document.getElementById("todo-button")
const listaliste = document.getElementById("todo-list")

let arrayObj = [];

getLocal()

//event listener
addEventListener("submit", (e) => {
    e.preventDefault()
    addElement()
})

//function
function addElement() {
    if (title.value.trim() != "") {
        const tit = document.createElement("p");
        tit.innerText = "Titolo: " + title.value;
        const desc = document.createElement("p");
        desc.innerText = "Descrizione: " + descrizione.value;
        const data = document.createElement("p");
        data.innerText = "Data: " + date.value;
        const check = document.createElement("img");
        if(checkbox.checked){
            check.src = "checked-removebg-preview.png"
        }else{
            check.src = "unchecked-removebg-preview.png"
        }
        

        const lista = document.createElement("div")
        lista.classList.add("lezioni");

        lista.appendChild(tit);
        lista.appendChild(desc);
        lista.appendChild(data);
        lista.appendChild(check);

        listaliste.appendChild(lista)
        const obj = {
            "titolo": tit.innerText,
            "descrizione": desc.innerText,
            "data": data.innerText,
            "isChecked": check.src
        }

        saveLocal(obj)  
        title.value="";
        descrizione.value="";
        checkbox.checked=false;     
    }   
}


function saveLocal(obj1) {
    arrayObj.push(obj1)
    localStorage.setItem("oggetto", JSON.stringify(arrayObj))
}
function getLocal() {
    const local = JSON.parse(localStorage.getItem("oggetto"))    
    if(local == null) return ""
    arrayObj = local
    local.forEach(element => {
        const tit = document.createElement("p");
        tit.innerText = "Titolo: " + element.titolo;
        const desc = document.createElement("p");
        desc.innerText = "Descrizione: " + element.descrizione;
        const data = document.createElement("p");
        data.innerText = "Data: " + element.data;
        const check = document.createElement("img");
        check.setAttribute("src", element.isChecked)

        const lista = document.createElement("div");
        lista.classList.add("lezioni");

        lista.appendChild(tit);
        lista.appendChild(desc);
        lista.appendChild(data);
        lista.appendChild(check);

        listaliste.appendChild(lista)
    });
}