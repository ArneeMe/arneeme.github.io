function bySykkel (){
    window.location = 'bysykkelApp/index.html'
}
function dogApp (){
    window.location = 'theDogApp/index.html'
}

function hoksrud (){
    window.location = 'hoksrudspill/index.html'
}

function kanonspill(){
    window.location = 'kanonspill/index_kanon.html'
}
function eksamen(){
    window.location = 'eksamen/oppgave3Eksamen.html'
}
function velgTlf(){
    window.location = 'velgTlf/velgTlfNr.html'
}
function emailText(){
    const collector = document.querySelector("#collector");
    const mainEmail = document.createElement("h4");
    mainEmail.innerText = "Hovedepost: natskaar@hotmail.no"
    const linkdIn = document.createElement("p");
    linkdIn.innerText += "LinkedIn: www.linkedin.com/in/arne-natskår"
    const secondaryEmail = document.createElement("p")
    secondaryEmail.innerText += "Sikrere epost: arneeme@protonmail.com"
    const funfact = document.createElement("p")
    funfact.innerText = 'Denne teksten er lastet inn med hjelp av JavaScript slik at epostene ikke vil kan plukkes opp av bots som scanner nettsiden.'
    collector.appendChild(mainEmail);
    collector.appendChild(linkdIn);
    collector.appendChild(secondaryEmail);
    collector.appendChild(funfact);

}