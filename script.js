function hoksrud (){
    window.location = 'hoksrudspill/index.html'
}

function kanonspill(){
    window.location = 'kanonspill/Indeks.html'
}
function eksamen(){
    window.location = 'eksamen/oppgave3Eksamen.html'
}
function velgTlf(){
    window.location = 'velgTlf/velgTlfNr.html'
}
function emailText(){
    const collector = document.querySelector("#collector");
    const mainEmail = document.createElement("h4")
    mainEmail.innerText = "Hovedepost: natskaar@hotmail.no"
    const secondaryEmail = document.createElement("p")
    secondaryEmail.innerText += "Ekstra sensetivt: arneeme@protonmail.com"
    const funfact = document.createElement("p")
    funfact.innerText = 'Denne teksten er lastet inn med hjelp av JavaScript slik at epostene ikke vil kan plukkes opp av bots som scanner nettsiden.'
    collector.appendChild(mainEmail);
    collector.appendChild(secondaryEmail);
    collector.appendChild(funfact);

}