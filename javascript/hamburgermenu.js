//Thea 

const sidebar = document.querySelector('.sidebar');

function showSidebar(){
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    sidebar.style.display = 'none'
}


const menuItems = [
    {   listItem: "Tidligere projekter",
        toUrl: "index.html" // Relativ URL     
    },

    {   listItem: "Guide",
        toUrl: "guide.html"
     },

    {   listItem: "Kommende kurser",
      toUrl: "courses.html"
    }
  ];
  
  
  function addMenuItems(root, data) {
    let menuItemsList = document.createElement("ul"); //opretter liste i root som er angivet til sidebar
    root.appendChild(menuItemsList);
    
    let listItem = document.createElement("li"); //opretter  listepunkter 
    listItem.innerHTML = "<a href='"+ data.toUrl +"'>"+ data.listItem + "</a>";
    menuItemsList.appendChild(listItem);
  }
  
  if (sidebar != null) {
    for (let i = 0; i < menuItems.length; i++) {
        addMenuItems(sidebar, menuItems[i]);
    }
  }

