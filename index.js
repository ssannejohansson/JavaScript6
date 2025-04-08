// Assignment 6

let running = true; 

const show = [
    {   title: "Sons of Anarchy",
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
];


function addShow (addTitle, addCreator) {
    show.push({title: addTitle, creator: addCreator, isWatched: false}); 
    alert(`You have now added ${addTitle} by ${addCreator} to your list`);
}

function listShows () {
return console.log(show); 
}

function markAsWatched (title) {
    let foundShow = show.find(show => show.title === title);
    foundShow.isWatched = true; 
    alert (`${title} is now marked as Watched`);
    return console.log(foundShow); 

}

while (running) {
   const choice = prompt(`Tv-show tracker
        1. Add Show
        2. List Shows
        3. Mark Show as Watched 
        4. Exit 
        Enter your choice`); 

switch (choice) {
    case "1": 
        let addTitle = prompt("Enter the title of the show you want to add"); 
        let addCreator = prompt("Enter the name of the creator of the show"); 
        addShow(addTitle, addCreator);
        break; 
    case "2":
        listShows();
        running = false; 
        break;
    case "3":
        const title = prompt ("Enter the title of the show to mark as watched:");
        markAsWatched(title);
        running = false; 
        break;
    case "4":
        alert("Goodbye!");
        running = false; 
        break;
    default: 
        alert("Invalid choice"); 
    }
}

