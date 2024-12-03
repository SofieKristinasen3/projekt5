const projectData = [
    {
        image: "img/gronburger skitse.jpg",
        title: "3D-printet hjerte",
        subtitle: "Sygeplejerske | 3D-print",
        paragraphs: ["Et 3D-printet hjerte til forskning i hjerteoperationer", "mere tekst","lidt mere tekst."]
    },
    {
        image: "img/gronburger skitse.jpg",
        title: "Noget andet",
        subtitle: "Sygeplejerske | 3D-print",
        paragraphs: ["Et 3D-printet hjerte til forskning i hjerteoperationer"]
    },
    {
        image: "img/gronburger skitse.jpg",
        title: "Noget helt andet",
        subtitle: "Sygeplejerske | 3D-print",
        paragraphs: ["Et 3D-printet hjerte til forskning i hjerteoperationer"]
    },
] 

function addProjectCard(root, data) {
    let projectCardDiv = document.createElement("div");
    projectCardDiv.className = "project_card";
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