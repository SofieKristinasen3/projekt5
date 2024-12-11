//Camilla 

//Selve arrayet med de forskellige kurser
let choosecourse = ["Print din egen mini-figur", "Introduktion til 3D print", "Lasercut til brug i undervisningen", "Brug af Design Thinking i dit projekt", "Åbent Lab - Vis din idé og mød andre skabere"];

//Går ind i HTML'en og griber fat i elementerne navngivet myModal og close
let modal = document.getElementById("myModal");
let closeBtn = document.getElementsByClassName("close")[0];

//sørger for at modal bliver vist 
function showModal() {
    modal.style.display = "block";
    // Sørger for at drop-down bliver fyldt ud
    populateDropdown(); 
}

//sørger for at modalen ikke bliver vist når man trykker på krydset 
closeBtn.onclick = function() {
    modal.style.display = "none";
}

//sørger for at når man klikker på "vinduet", altså udenfor modalen, så lukkes den
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//finder dropdown element i HTML'en altså en select tag med id choosecourse
function populateDropdown() {
    let dropdown = document.getElementById("choosecourse");

//denne sletter hvilke tidligere kurser man har valgt i modalen
//så den altid starter med "print din egen minifigur"
    dropdown.innerHTML = "";

//forloop der kører igennem listen "choosecourse"
    for (let i = 0; i < choosecourse.length; i++) {
        let option = document.createElement("option");
        option.value = choosecourse [i].toLowerCase();
        option.text = choosecourse [i];
        dropdown.appendChild(option);
    };
}

//let firstname gemmer eks. brugerens fornavn i variablen
//her hentes HTML elementet med eks. id'et "fname" og 
// .value henter det brugeren har skrevet i tekstboksen
function submitForm() {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let choosecourse = document.getElementById("choosecourse").value;

//hjælper med at man i konsollen kan se at brugerens oplysninger er indsamlet korrekt
    console.log("Fornavn:", firstName);
    console.log("Efternavn:", lastName);
    console.log("Email:", email);
    console.log("Valg af kursus:", choosecourse);

//sikrer at når man har udfyldt tekstfelterne og trykker tilmeld og ok på alerten, så lukker modalen
    modal.style.display = "none";

// sikrer at når man trykker på knappen tilmeld så kommer der en pop'up frem 
    alert("Tilmelding registreret! Tak fordi du tilmeldte dig et kursus.");
}