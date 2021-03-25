//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function scroller() {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
});

document.getElementById("flexRadioDefaultbusiness").onchange = function() {
    var input_empresa = document.getElementById("input_business");
    input_empresa.style.display = "block";
    document.getElementById("flexRadioDefaultperson").checked = false
};
document.getElementById("flexRadioDefaultperson").onchange = function() {
    var input_empresa = document.getElementById("input_business");
    input_empresa.style.display = "none";
    document.getElementById("flexRadioDefaultbusiness").checked = false;
    document.getElementById("input_business_input").value = "";
};

current_year = document.getElementById("current-year-footer");
current_year.innerHTML = new Date().getFullYear();

current_years_working = document.getElementById("counter-years");
current_years_working.innerHTML = new Date().getFullYear()-2006;