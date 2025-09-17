
const guias = document.querySelector(".guiasConten");
const Habilidades = document.querySelector(".habilidadesConten");

const guiesButton = document.querySelectorAll(".buttton");

guiesButton.forEach(element => {

    element.addEventListener("click", (e) => {
        const elementValue = e.target;
        const elementId = elementValue.id;

    guiesButton.forEach(elementI =>{
        elementI.classList.remove("focusContent")
    })
        elementValue.classList.add("focusContent")
        console.log(elementValue.className) 
        
        
        if(elementId == "Habilidades"){
            Habilidades.classList.remove("oculto")
            Habilidades.classList.add("visible")
            guias.classList.add("oculto")

            document.documentElement.style.setProperty("--colorMenuGuias", "#1e5785")
        }else{
            guias.classList.remove("oculto")
            Habilidades.classList.remove("visible")
            Habilidades.classList.add("oculto")
            document.documentElement.style.setProperty("--colorMenuGuias", "#d43b30")
        }
        
    })
});


