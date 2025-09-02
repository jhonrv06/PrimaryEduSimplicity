
const guias = document.querySelector(".guiasConten");
const Habilidades = document.querySelector(".habilidadesConten");

const guiesButton = document.querySelectorAll(".buttton");

guiesButton.forEach(element => {
    element.addEventListener("click", (e) => {
        const elementValue = e.target;
        const elementId = elementValue.id;
        
        if(elementId == "Habilidades"){
            Habilidades.classList.remove("oculto")
            Habilidades.classList.add("visible")
            guias.classList.add("oculto")
        }else{
            guias.classList.remove("oculto")
            Habilidades.classList.remove("visible")
            Habilidades.classList.add("oculto")
        }
        
    })
});


