let add = document.querySelector(".add");
let title = document.getElementById("title");
let description = document.getElementById("description");
let notesElement = document.querySelector(".notes");
let notes = JSON.parse(localStorage.getItem("notes"));
if(notes){
    notes.forEach(element =>{
        addnote(element);
    });
}

add.addEventListener("click",(e)=>{
    e.preventDefault();
    addnote();
});
function addnote(obj){
    let titlevalue = title.value;
    let descriptionvalue = description.value;

if(obj){
    titlevalue = obj.title;
    descriptionvalue = obj.description;
}

    let card = document.createElement("div");
    card.classList.add("card");
    if(titlevalue!='' && descriptionvalue!=''){
    card.innerHTML=`
    <h3>${titlevalue}</h3>
    <p>${descriptionvalue}</p>
    <button class="deletenote">Delete</button>`;
        notesElement.appendChild(card);
        updateLocalStorage();
    }

    let clear = card.querySelector(".deletenote");
    clear.addEventListener("click",() => {
        localStorage.clear
        card.remove();
        updateLocalStorage();
    });
}

function updateLocalStorage(){
    let card = document.querySelectorAll('.card');
    let arr=[];
    card.forEach(element => {
        arr.push({
            title:element.children[0].innerText,
            description:element.children[1].innerText,
        })
    });
    localStorage.setItem("notes", JSON.stringify(arr));
}










