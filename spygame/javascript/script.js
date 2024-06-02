
const levels = [
    {
        image: "images/messyroom.png",
        items: [
            { id: "item1", name: "Red Car", coords: "1058,477,1164,597" },
            { id: "item2", name: "Flip Flops", coords: "221,647,321,736" },
            { id: "item3", name: "Math Book", coords: "101,1100,403,907" },
            { id: "item4", name: "Poster", coords: "607,37,838,268" },
            { id: "item5", name: "Yellow Book", coords: "830,675,962,767" }
        ]
    },
    {
        image: "images/messygirl.png",
        items: [
            { id: "item6", name: "Doll", coords: "29,517,176,630" },
            { id: "item7", name: "Lobster", coords: "678,832,839,682" },
            { id: "item8", name: "Hawks", coords: "197,137,303,214" },
            { id: "item9", name: "Little Gecko", coords: "525,54,632,145" },
            { id: "item10", name: "Small Plane", coords: "815,443,900,509" }
        ]
    }
];

// Function to randomly select a level
function getRandomLevel() {
    const randomIndex = Math.floor(Math.random() * levels.length);
    return levels[randomIndex];
}


function setupGame(level) {
    const img = document.getElementById('ispypic');
    img.src = level.image;

    const map = document.querySelector('map[name="ispy-map"]');
    map.innerHTML = ''; 

    const objectList = document.getElementById('object-list');
    objectList.innerHTML = ''; 

    level.items.forEach(item => {
       
        const area = document.createElement('area');
        area.setAttribute('target', '');
        area.setAttribute('alt', item.name);
        area.setAttribute('title', item.name);
        area.setAttribute('href', '#');
        area.setAttribute('coords', item.coords);
        area.setAttribute('shape', 'rect');
        area.setAttribute('id', item.id);
        map.appendChild(area);

        const listItem = document.createElement('li');
        listItem.setAttribute('id', `li-${item.id}`);
        listItem.textContent = item.name;
        objectList.appendChild(listItem);

       
        area.addEventListener('click', function(event) {
            event.preventDefault();
            foundItem(`li-${item.id}`);
        }, false);
    });

    document.querySelectorAll('#object-list li').forEach(function(item) {
        item.style.textDecoration = "none";
    });
}


let currentLevel = getRandomLevel();
setupGame(currentLevel);

function foundItem(itemId) {
    var item = document.getElementById(itemId);
    item.style.textDecoration = "line-through";
    checkAllFound();
}

function checkAllFound() {
    var items = document.querySelectorAll('#object-list li');
    var allFound = true;
    items.forEach(function(item) {
        if (item.style.textDecoration !== "line-through") {
            allFound = false;
        }
    });
    if (allFound) {
        setTimeout(() => {
            if (confirm("Congratulations! You found all the items. Do you want to play again?")) {
                replay();
            }
        }, 100);
    }
}

function replay() {
    currentLevel = getRandomLevel();
    setupGame(currentLevel);
}

document.getElementById('car').addEventListener('click', function(event) {
    event.preventDefault();
    foundItem('li-item1');
}, false);

document.getElementById('flipflops').addEventListener('click', function(event) {
    event.preventDefault();
    foundItem('li-item2');
}, false);

document.getElementById('mathbook').addEventListener('click', function(event) {
    event.preventDefault();
    foundItem('li-item3');
}, false);

document.getElementById('poster').addEventListener('click', function(event) {
    event.preventDefault();
    foundItem('li-item4');
}, false);

document.getElementById('yellowbook').addEventListener('click', function(event) {
    event.preventDefault();
    foundItem('li-item5');
}, false);

document.getElementById('doll').addEventListener('click', function(event) {
    event.preventDefault();
    foundItem('li-item6');
}, false);

document.getElementById('lobster').addEventListener('click', function(event) {
    event.preventDefault();
    foundItem('li-item7');
}, false);

document.getElementById('hawks').addEventListener('click', function(event) {
    event.preventDefault();
    foundItem('li-item8');
}, false);

document.getElementById('gecko').addEventListener('click', function(event) {
    event.preventDefault();
    foundItem('li-item9');
}, false);

document.getElementById('plane').addEventListener('click', function(event) {
    event.preventDefault();
    foundItem('li-item10');
}, false);


