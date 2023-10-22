//increment button: 
const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
const saveBtn = document.getElementById("save-btn")
let count = 0;

const increment = () => {
  
    count += 1;
    countEl.innerText = count;
}
const decrement = () =>{
    count -= 1;
    countEl.innerText = count;
}

const save = () => {
  
    let countStr = count + " __ ";
    saveEl.innerText += countStr;
    countEl.innerText = 0;
    count = 0;

}