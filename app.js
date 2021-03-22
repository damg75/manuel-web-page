const englishConfig = {
    Manuel A. Morán Lázaro Traductor / Intérprete: "Manuel A. Morán Lázaro Translator / Interpreter",
    Prueba: "Test",
    Casa: "House"
}
const replaceText = (el) => { 
    const key = el.innerText;
    el.innerText = englishConfig[key] || key;
}    

const elements = document.querySelectorAll("[data-i18n]");
elements.forEach(el => replaceText(el));

document.getElementById("demo").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}



// Other


