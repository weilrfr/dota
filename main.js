document.addEventListener('DOMContentLoaded', () => {
    let section = document.querySelector('.cards');
    
    // массив items с информацией о героях
    // что бы добавить героя создаете новый объект с данными полями
    // указываете ссылку на видео(можно взять любую из прошлых и в конце поменять имя героя)
    let items = [
        {
            name: 'Brewmaster',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/brewmaster.webm',
            discription: 'Пивное пузико'
        },
        {
            name: 'Tinker',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tinker.webm',
            discription: 'Сигнатурка Коли'
        },
        {
            name: 'Anti-mage',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.webm',
            discription: 'Он крип, собирающий бф к 30 минуте'
        },
        {
            name: 'Magnus',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/magnataur.webm',
            discription: 'Collapse'
        },
        {
            name: 'Arc-Warden',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/arc_warden.webm',
            discription: 'биполярОчка'
        },
        {
            name: 'Pudge',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pudge.webm',
            discription: 'Чин чопа Чин чопа'
        },
        {
            name: 'Chaos Khight',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chaos_knight.webm',
            discription: 'Сигнатурка Алимжана'
        }, 
        {
            name: 'Witct Doctor',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/witch_doctor.webm',
            discription: 'син'
        },
        {
            name: 'Hoodwink',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/hoodwink.webm',
            discription: 'Коля мечтает нятянуть ее'
        },
        {
            name: 'Phantom Lancer',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_lancer.webm',
            discription: 'Шайлушай'
        },
        {
            name: 'Bristleback',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bristleback.webm',
            discription: 'Колючий говноед'
        },
        {
            name: 'Tidehunter',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tidehunter.webm',
            discription: 'Арбуз'
        },
        {
            name: 'Invoker',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/invoker.webm',
            discription: 'Беловласый Гейлорд'
        },
        {
            name: 'Grimstroke',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/grimstroke.webm',
            discription: 'Максимчик'
        },
        {
            name: 'Doom',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/doom_bringer.webm',
            discription: 'Не думает'
        },
        {
            name: 'Bloodseeker',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bloodseeker.webm',
            discription: 'Устроит тебе месячные'
        },
        {
            name: 'Spectre',
            video: "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spectre.webm",
            discription: 'Попа'
        },
        {
            name: 'Bounty Hunter',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bounty_hunter.webm',
            discription: 'Вор в инвизе'
        },
        {
            name: 'Meepo',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/meepo.webm',
            discription: 'Самая милая улыбка в мире'
        },
        {
            name: 'Spirit Breaker',
            video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spirit_breaker.webm',
            discription: 'Синий ламборгини'
        }
    ]
    
    
    
    // цикл для создания карточек со значенями из массива items
    for (let i of items) {
        section.innerHTML += `
            <div class="card" data-bs-theme="dark">
                <video muted loop>
                    <source src="${i.video}">
                </video>
                <div class="card-body">
                    <h5 class="card-title">${i.name}</h5>
                    <p class="card-text">${i.discription}</p>
                </div>
            </div>
        `
    }
    // проигрывание видео при наведении и пауза при уходе мышки из элемента
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