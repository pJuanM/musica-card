let painels = document.querySelectorAll(".painel")

painels.forEach(painel => {
    painel.addEventListener("click", () => {
        removeActiveClasses()
        painel.classList.add("active");
    })
})

function removeActiveClasses() {
    painels.forEach(painel => {
      painel.classList.remove("active")
    })
}


var qin = document.querySelector(".qin")
var gojo = document.querySelector(".gojo")
var sanji = document.querySelector(".sanji") 
var obito = document.querySelector(".obito")
var draken = document.querySelector(".draken")
    function playPause(darplay, arraypausar) { 
        darplay.play(); 
        for (var p of arraypausar) 
        p.pause(); 
        darplay.currentTime = 0; 
    }




