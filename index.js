// Assignment 6
const running = true; 

const shows = [
    {
        title: "Sons of Anarchy",
        creator: "Kurt Sutter", 
        isWatched: true,
    },

    {
        title: "Peaky Blinders",
        creator: "Steven Knight", 
        isWatched: true,
    },

    {
        title: "Yellowstone",
        creator: "Taylor Sheridan", 
        isWatched: true,
    },

    {
        title: "La Casa De Papel",
        creator: "Àlex Pina", 
        isWatched: true,
    },

    {
        title: "Breaking Bad",
        creator: "Vince Gilligan", 
        isWatched: false,
    }
]


function addShow () {

}

function listShows () {

}

function markAsWatched (title) {

}





while (running) {
    /*const choice = prompt(`Tv-show tracker
        1. Add Show
        2. List Shows
        3. Mark Show as Watched 
        4. Exit 
        Enter your choice`); */

switch (choice) {
    case "1": 
        addShow();
        break; 
    case "2":
        listShows(); 
        break;
    case "3":
        const title = prompt("Enter the title of the show to mark as read:");
        markAsWatched(title);
        break;
    case "4":
        running = false; 
        alert("Goodbye!");
        break;
    default: 
        alert("Invalid choice"); 

    }
}

