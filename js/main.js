document.addEventListener("DOMContentLoaded",function(){
    var diagramaAtual = document.getElementById('diagrama-atual');
    var divImg = document.querySelector('.div-img'); 
    var modalImg = document.querySelector('.modal-img');
    var caption = document.querySelector('.caption'); 

    diagramaAtual.onclick = function () {
        divImg.style.display = "block"
        modalImg.src = this.src; 
        caption.textContent = this.alt; 
    }

    var closeBtn = document.querySelector('.close');
    closeBtn.onclick = function () {
        divImg.style.display = "none"; 
    }
})