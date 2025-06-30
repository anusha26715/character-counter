const inputEl = document.getElementById("inputText")
const wordEl = document.getElementById("word")
const charEl = document.getElementById("char")
const warnEl = document.getElementById("warnText")

inputEl.addEventListener("input",()=>{
    let inputVal = inputEl.value 
    if (inputVal.length >= 200) {
        inputEl.value = inputVal.slice(0, 199); // block user input
        warnEl.textContent = "*Cannot enter more than 200 characters.";
        warnEl.style.color = 'red';
    } else {
        warnEl.textContent = ""; // clear warning
    }
    charEl.textContent = inputVal.length;
    let wordList = inputVal.split(" ").map(ele => ele.trim()).filter(ele => ele.length>0 && /[a-zA-Z0-9]/.test(ele));
    wordEl.textContent = wordList.length;
})