//previnir carregamento antes da stylesheet
//botão que corre
//aumentar input conforme escreve
//modal ao enviar

let visible = false

function visiblePass(){
    // icon precisa mudar tbm
    if (visible){
        document.getElementById("falseName").style.color = "transparent"
        document.getElementById("closedeye").className = "fa-solid fa-eye-slash"
        visible = false
    }
    else {
        document.getElementById("falseName").style.color = "black"
        document.getElementById("closedeye").className = "fa-solid fa-eye"
        visible = true
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("botaoAnda");
    
    if (!button) {
        console.error("O elemento com ID 'runaway-btn' não foi encontrado.");
        return;
    }

    const animateMove = (element, prop, pixels) =>
      anime({
        targets: element,
        [prop]: `${pixels}px`,
        easing: "easeOutCirc"
      });

    ["mouseover", "click"].forEach(function (eventType) {
      button.addEventListener(eventType, function () {
        const top = getRandomNumber(window.innerHeight - this.offsetHeight);
        const left = getRandomNumber(window.innerWidth - this.offsetWidth);

        animateMove(this, "left", left).play();
        animateMove(this, "top", top).play();
      });
    });

    const getRandomNumber = (num) => Math.floor(Math.random() * (num + 1));
});
