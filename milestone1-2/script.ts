const ToggleButton = document.getElementById("toggle") as HTMLButtonElement
const Skills = document.getElementById("skill") as HTMLElement
 
ToggleButton.addEventListener("click", ()=>{
    if (Skills.style.display==="none"){
        Skills.style.display = "block"
    }else {
        Skills.style.display="none"
    }
})