fetch('items.json').then(
    response => response.json()
).then(items => {
    const section = document.querySelector('section');

    for (let i of items) {
        section.innerHTML += `
            <div class="card" data-bs-theme="dark">
                <video muted loop">
                    <source src="${i.video}">
                </video>
                <div class="card-body">
                    <h5 class="card-title">${i.name}</h5>
                    <p class="card-text">${i.discription}</p>
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