// Tilføjet tags for education og machine
const projectData = [
    {
        image: "/img/project_images/card_sygeplejerske_3dprint.jpg",
        title: "Skelet dele i 3D",
        subtitle: "Sygeplejerske | 3D-print",
        paragraphs: ["Dele af menneskets skelet printet i 3D"],
        tags: {education:"Sygeplejerske", machine:"3D-print"}
    },
    {
        image: "img/project_images/card_personligt_laserskærer_1.jpg",
        title: "Julepynt rensdyr i træ",
        subtitle: "Personligt | Laserskærer",
        paragraphs: ["Sødt rensdyr laserskåret ud af træ"],
        tags: {education:"Personligt", machine:"Laserskærer"}
    },
    {
        image: "img/project_images/card_jordbrugsteknolog_3dprint.jpg",
        title: "Potteplante i 3D",
        subtitle: "Jordbrugsteknolog | 3D-print",
        paragraphs: ["Sød potteplante printet i 3D"],
        tags: {education:"Jordbrugsteknolog", machine:"3D-print"}
    },
    {
        image: "img/project_images/card_personligt_3dprint.jpg",
        title: "Terninger i 3D",
        subtitle: "Personligt | 3D-print",
        paragraphs: ["Personligt-gjorte terninger printet i 3D"],
        tags: {education:"Personligt", machine:"3D-print"}
    },
    {
        image: "img/project_images/card_Fablab_laserskærer_1.jpg",
        title: "Plexiglas skilt",
        subtitle: "Fablab | Laserskærer",
        paragraphs: ["Et skilt i plexiglas for Fablab"],
        tags: {education:"Fablab", machine:"Laserskærer"}
    },
    {
        image: "img/project_images/card_personligt_laserskærer_2.jpg",
        title: "Mobilholder i træ",
        subtitle: "Personligt | Laserskærer",
        paragraphs: ["En detaljeret træudskæring til mobil"],
        tags: {education:"Personligt", machine:"Laserskærer"}
    },
    {
        image: "img/project_images/card_itsikkerhed_badge.jpg",
        title: "Badge for IT-Sikkerhed",
        subtitle: "IT-sikkerhed | Badges",
        paragraphs: ["Badge designet af IT-Sikkerhedsstuderende"],
        tags: {education:"IT-sikkerhed", machine:"Badges"}
    },
    {
        image: "img/project_images/card_personligt_tshirt.jpg",
        title: "T-shirt med eget print",
        subtitle: "Personligt | T-shirt",
        paragraphs: ["En personligt-gjort t-shirt med selv vagt print"],
        tags: {education:"Personligt", machine:"T-shirt"}
    },
    {
        image: "img/project_images/card_Fablab_laserskærer_2.jpg",
        title: "Stole og bord i træ",
        subtitle: "Fablab | Laserskærer",
        paragraphs: ["Stole og bord skåret ud i træ"],
        tags: {education:"Fablab", machine:"Laserskærer"}
    },
]

function addProjectCard(root, data) {
    let projectCardDiv = document.createElement("div");
    projectCardDiv.className = "project_card";

//Tilføjet de to linjer herunder
    projectCardDiv.setAttribute("data-education", data.tags.education);
    projectCardDiv.setAttribute("data-machine", data.tags.machine);

    root.appendChild(projectCardDiv);
    
    let imageDiv = document.createElement("div");
    imageDiv.className = "image_filters";
    projectCardDiv.appendChild(imageDiv);
    
    let image = document.createElement("img");
    image.src = data.image;
    imageDiv.appendChild(image);

    let title = document.createElement("h3");
    title.innerText = data.title;
    projectCardDiv.appendChild(title);

    let subtitle = document.createElement("h4");
    subtitle.innerText = data.subtitle;
    projectCardDiv.appendChild(subtitle);

    data.paragraphs.forEach(text =>
    {
        let paragraph = document.createElement("p");
        paragraph.innerText = text;
        paragraph.className = "project_paragraph";
        projectCardDiv.appendChild(paragraph);
    });
    
    let button = document.createElement("button");
    button.innerText = "Læs mere";
    projectCardDiv.appendChild(button);
}

let projectsDiv = document.getElementById("projects");
//hvis projectsDiv er forskellig for null, altså hvis projectsDiv eksistere, skal den køre for loopet. 
if(projectsDiv != null)
{
    for (i=0; i<projectData.length; i++)
    {
        addProjectCard(projectsDiv, projectData[i]);    
    }
}

//Integreret filtreringslogik
//Arrays til dropdown-menu
const educations = ["Personligt", "Sygeplejerske", "Bygningskonstruktør"];
const machines = ["3D-print", "Laserskærer", "Badges", "T-shirt"];

//Referencer til dropdown-menu
const educationDropdown = document.getElementById("education");
const machineDropdown = document.getElementById("machine");

//Funktion til at genere dropdown-menu
function createDropdown(options, dropdown, defaultOptionText) {
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = defaultOptionText;
    dropdown.appendChild (defaultOption);

    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        dropdown.appendChild(opt);
    });
}

//Funktion til filtrering
function filterCards() {
    const selectedEducation = educationDropdown.value;
    const selectedMachine = machineDropdown.value;

    const cards = document.querySelectorAll(".project_card");
    cards.forEach(card => {
        const cardEducation = card.getAttribute("data-education");
        const cardMachine = card.getAttribute("data-machine");
    

    const matchesEducation = !selectedEducation || cardEducation === selectedEducation;
    const matchedMachine = !selectedMachine || cardMachine === selectedMachine;

    if(matchesEducation && matchedMachine) {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
});
}

//Funktion til at generere cards og filtrere dem
function generateAndFilterCards() {
    //Rydder alle eksisterende cards
    const projectDiv = document.getElementById("projects");
    projectsDiv.innerHTML = ""; //Fjerner

    //Generere
    projectData.forEach(project => addProjectCard(projectsDiv, project));

    //Filtrere
    filterCards();
}

//Opsætning
createDropdown(educations, educationDropdown, "Vælg uddannelse");
createDropdown(machines, machineDropdown, "Vælg maskine");
educationDropdown.addEventListener("change", filterCards);
machineDropdown.addEventListener("change", filterCards);

//Generer cards og filtrering ved første initialisering
generateAndFilterCards();

