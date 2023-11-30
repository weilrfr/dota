const form = document.querySelector('form');
const nameInput = form.querySelector('input[type="text"]');
const videoInput = form.querySelectorAll('input[type="text"]')[1];
const descriptionInput = form.querySelectorAll('input[type="text"]')[2];

async function sendRequest(name, video, description) {
    const response = await fetch('http://192.168.20.101:8000/api/cards/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            video: video,
            description: description
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
}

const addButton = form.querySelector('button');
addButton.addEventListener('click', async () => {
    const name = nameInput.value;
    const video = videoInput.value;
    const description = descriptionInput.value;
    console.log(name)
    console.log(video)
    console.log(description)

    try {
        const responseData = await sendRequest(name, video, description);
        location.reload();
        console.log('Data successfully added:', responseData);
    } catch (error) {
        console.error('Error:', error);
    }
});



let btn = document.getElementById('deleteBtn')

btn.addEventListener('click', function() {
    var heroName = document.getElementById('heroName').value;

    fetch('http://192.168.20.101:8000/api/cards/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Include any other headers you need, like authorization tokens
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then(heroes => {
        const heroToDelete = heroes.find(hero => hero.name === heroName);

        if (!heroToDelete) {
            console.error('No hero found with that name');
            return;
        }

        return fetch('http://192.168.20.101:8000/api/cards/' + heroToDelete.id + '/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        location.reload();
        console.log('Hero deleted successfully');
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
});


fetch('http://192.168.20.101:8000/api/cards/').then(
// fetch('items.json').then(
    response => response.json(),
).then(items => {
    const section = document.querySelectorAll('section')[1];

    for (let i of items) {
        section.innerHTML += `
            <div class="card" data-bs-theme="dark">
                <video muted loop">
                    <source src="${i.video}">
                </video>
                <div class="card-body">
                    <h5 class="card-title">${i.name}</h5>
                    <p class="card-text">${i.description}</p>
                </div>
            </div>
        `
    }

    let cards = document.querySelectorAll('.card');
    cards.forEach(element => {
        element.addEventListener('mouseenter', () => {
            let video = element.querySelector('video');
            video.play();
        })
        element.addEventListener('mouseleave', () => {
            let video = element.querySelector('video');
            video.pause();
        })
    });

    })