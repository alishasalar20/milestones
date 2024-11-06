const from = document.getElementById("Resume-form") as HTMLFormElement
const DisplayElement = document.getElementById("resume-display") as HTMLDivElement

from.addEventListener("submit", (event :Event) =>{
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const phone = (document.getElementById("phone") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value

    const resumeHTML = 
    ` <h2> <b> Resume </b> <h2>
    <h3> Personal Information </h3>
    <p> <b> Name : </b> ${name}</p>
     <p> <b> Email : </b> ${email}</p>
     <p> <b> Phone : </b> ${phone}</p>

     <h3> Education </h3>
     <p> ${education} </p>
     <h3> Experience </h3>
     <p> ${experience} </p>
     <h3> Skills </h3>
     <p> ${skills} </p>
    `
    if (DisplayElement){
        DisplayElement.innerHTML=resumeHTML
    } else{
        console.error("The resume element display is missing")
    }
})