    //  working (audio + title + author) in console on mixkit.co
// let cardsArray = [...document.getElementsByClassName('item-grid__item')];
// let arr = [];
// let newArr = cardsArray.map(card => {
//     arr.push({
//         audio: card.querySelector('audio').src,
//         title: card.querySelector('h2').outerText,
//         author: card.querySelector('p').outerText,
//     })
// });
// console.log(arr);

        //   working (audio, genre, author, title) in console on mixkit.co
// let arrCards = [...document.getElementsByClassName('item-grid__item')];
// let musicArr = arrCards.map( card => {
//     let linkArr = [];
//     let myNodeList= card.querySelectorAll('a');
//     console.log(myNodeList);
//     for (let i = 0; i < myNodeList.length; i++) {
//         let item = myNodeList[i];
//         if(linkArr.includes(item.outerText))continue;
//         linkArr.push(item.outerText);
//     }
//     return {
//         title: card.querySelector('h2').outerText,
//         author: card.querySelector('p').outerText,
//         mp3: card.querySelector('audio').src,
//         links: linkArr,
//     }
// });
// console.log(musicArr);

let arrAudioWithGenre = [
    {
        "title": "Tech House vibes",
        "author": "by Alejandro Magaña (A. M.)",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3",
        "genre": [
            "House & Electronica",
            "Mellow",
            "Smooth",
            "Background",
            "Intro",
            "Electronic",
            "Inspirational",
            "Lounge",
            "Vocals"
        ]
    },
    {
        "title": "Hazy After Hours",
        "author": "by Alejandro Magaña (A. M.)",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-hazy-after-hours-132.mp3",
        "genre": [
            "House & Electronica",
            "Mellow",
            "Upbeat",
            "House",
            "Uplifting",
            "Lo-fi",
            "Bass"
        ]
    },
    {
        "title": "Hip Hop 02",
        "author": "by Lily J",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-738.mp3",
        "genre": [
            "Experimental",
            "Sad",
            "Mellow",
            "Electronica",
            "Motivational",
            "Calm",
            "House",
            "Piano"
        ]
    },
    {
        "title": "A Very Happy Christmas",
        "author": "by Michael Ramir C.",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-a-very-happy-christmas-897.mp3",
        "genre": [
            "Corporate",
            "Happy",
            "Whimsical",
            "Motivational",
            "Holiday",
            "Seasonal",
            "Piano",
            "Christmas"
        ]
    },
    {
        "title": "Sun and His Daughter",
        "author": "by Eugenio Mininni",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-sun-and-his-daughter-580.mp3",
        "genre": [
            "Experimental",
            "Dramatic",
            "Smooth",
            "Indie",
            "Vocals",
            "Drums",
            "Folk"
        ]
    },
    {
        "title": "Driving Ambition",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3",
        "genre": [
            "Corporate",
            "Dramatic",
            "Mysterious",
            "News",
            "Epic",
            "Background",
            "Motivational",
            "Workout",
            "Uplifting"
        ]
    },
    {
        "title": "Raising Me Higher",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-raising-me-higher-34.mp3",
        "genre": [
            "Corporate",
            "Happy",
            "Mellow",
            "Intro",
            "Guitar",
            "House",
            "Motivational"
        ]
    },
    {
        "title": "Life is a Dream",
        "author": "by Michael Ramir C.",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-life-is-a-dream-837.mp3",
        "genre": [
            "Corporate",
            "Happy",
            "Uplifting",
            "Intense",
            "Inspirational",
            "Drums",
            "Motivational"
        ]
    },
    {
        "title": "Deep Urban",
        "author": "by Eugenio Mininni",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3",
        "genre": [
            "House & Electronica",
            "Happy",
            "Upbeat",
            "Electro",
            "Video Game",
            "Dance",
            "Workout"
        ]
    },
    {
        "title": "Serene View",
        "author": "by Arulo",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3",
        "genre": [
            "Ambient",
            "Mysterious",
            "Smooth",
            "Forest",
            "Background",
            "Slow",
            "Nature",
            "Drums",
            "Yoga",
            "Lounge",
            "Relaxation",
            "Meditation"
        ]
    },
    {
        "title": "Dance with Me",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-dance-with-me-3.mp3",
        "genre": [
            "Corporate",
            "Uplifting",
            "Whimsical",
            "Song",
            "Dance",
            "Guitar",
            "Motivational",
            "Melodic"
        ]
    },
    {
        "title": "Complicated",
        "author": "by Arulo",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-complicated-281.mp3",
        "genre": [
            "Hip Hop",
            "Sad",
            "Dramatic",
            "Dubstep",
            "Downtempo",
            "Melodic",
            "Breakbeat"
        ]
    },
    {
        "title": "Cat Walk",
        "author": "by Arulo",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-cat-walk-371.mp3",
        "genre": [
            "Pop",
            "Happy",
            "Upbeat",
            "Celebration",
            "EDM",
            "Dance",
            "Electric",
            "Synth"
        ]
    },
    {
        "title": "C.B.P.D",
        "author": "by Arulo",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-cbpd-400.mp3",
        "genre": [
            "Hip Hop",
            "Sad",
            "Dramatic",
            "Alternative",
            "Indie",
            "Breakbeat",
            "Calm",
            "Vocals",
            "Lo-fi"
        ]
    },
    {
        "title": "Dreaming Big",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3",
        "genre": [
            "Corporate",
            "Uplifting",
            "Smooth",
            "News",
            "Celebration",
            "Intense",
            "Motivational",
            "Piano"
        ]
    },
    {
        "title": "Games Worldbeat",
        "author": "by Bernardo R.",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-games-worldbeat-466.mp3",
        "genre": [
            "Cinematic",
            "Happy",
            "Mellow",
            "Flute",
            "Nature",
            "Motivational",
            "Seasonal",
            "Calm"
        ]
    },
    {
        "title": "Silent Descent",
        "author": "by Eugenio Mininni",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-silent-descent-614.mp3",
        "genre": [
            "Cinematic",
            "Sad",
            "Slow",
            "Melodic",
            "Calm",
            "Piano"
        ]
    },
    {
        "title": "Beautiful Dream",
        "author": "by Diego Nava",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3",
        "genre": [
            "Ambient",
            "Sad",
            "Romantic",
            "Relaxation",
            "Atmospheres",
            "Calm",
            "Guitar",
            "Strings"
        ]
    },
    {
        "title": "Feeling Happy",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-feeling-happy-5.mp3",
        "genre": [
            "Children",
            "Happy",
            "Uplifting",
            "Drums",
            "Inspirational",
            "Motivational",
            "Guitar"
        ]
    },
    {
        "title": "Valley Sunset",
        "author": "by Alejandro Magaña (A. M.)",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-valley-sunset-127.mp3",
        "genre": [
            "Ambient",
            "Dramatic",
            "Smooth",
            "Intro",
            "Futuristic",
            "Relaxation",
            "Chill",
            "Meditation"
        ]
    },
    {
        "title": "Playground Fun",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-playground-fun-12.mp3",
        "genre": [
            "Children",
            "Mellow",
            "Whimsical",
            "Kids",
            "Nostalgic",
            "Xylophone"
        ]
    },
    {
        "title": "Pop 05",
        "author": "by Grigoriy Nuzhny",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-pop-05-695.mp3",
        "genre": [
            "Pop",
            "Happy",
            "Uplifting",
            "Vocals",
            "Melodic",
            "Lounge",
            "Relaxation",
            "Fashion"
        ]
    },
    {
        "title": "Comical",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-comical-2.mp3",
        "genre": [
            "Children",
            "Happy",
            "Upbeat",
            "Funny",
            "Comical",
            "Marimba",
            "Motivational",
            "Festival",
            "Xylophone"
        ]
    },
    {
        "title": "Island Beat",
        "author": "by Arulo",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-island-beat-250.mp3",
        "genre": [
            "R&B",
            "Mellow",
            "Mysterious",
            "Summer",
            "Beach",
            "Nature",
            "Chill",
            "Relaxation"
        ]
    },
    {
        "title": "Piano Reflections",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-piano-reflections-22.mp3",
        "genre": [
            "Classical",
            "Sad",
            "Dramatic",
            "Love",
            "Instrumental",
            "Relaxation",
            "Piano",
            "Nostalgic"
        ]
    },
    {
        "title": "BRIDGE N° 98",
        "author": "by Eugenio Mininni",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-bridge-n-98-621.mp3",
        "genre": [
            "Corporate",
            "Whimsical",
            "Smooth",
            "Intro",
            "Strings",
            "Guitar",
            "Positive",
            "Motivational"
        ]
    },
    {
        "title": "Summer Fun",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-summer-fun-13.mp3",
        "genre": [
            "Cinematic",
            "Dramatic",
            "Smooth",
            "Funny",
            "Summer",
            "Motivational",
            "Cheerful",
            "Positive",
            "Downtempo",
            "Bass"
        ]
    },
    {
        "title": "Just Chill",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-just-chill-16.mp3",
        "genre": [
            "Acoustic",
            "Sad",
            "Mysterious",
            "Calm",
            "Meditation",
            "Atmospheres",
            "Relaxation"
        ]
    },
    {
        "title": "Getting Ready",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-getting-ready-46.mp3",
        "genre": [
            "House & Electronica",
            "Aggressive",
            "Dramatic",
            "Urban",
            "Electric",
            "Retro",
            "Drums",
            "Mysterious",
            "Bass"
        ]
    },
    {
        "title": "Relaxing in Nature",
        "author": "by Diego Nava",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-relaxing-in-nature-522.mp3",
        "genre": [
            "Cinematic",
            "Sad",
            "Dramatic",
            "Water",
            "Rain",
            "Forest",
            "Soul",
            "Nature",
            "Vocals",
            "Piano",
            "Positive",
            "Atmospheres"
        ]
    },
    {
        "title": "Spirit in the Woods",
        "author": "by Alejandro Magaña (A. M.)",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-spirit-in-the-woods-139.mp3",
        "genre": [
            "Ambient",
            "Mysterious",
            "Smooth",
            "Forest",
            "Nature",
            "Meditation",
            "Relaxation",
            "Nostalgic",
            "Vocals"
        ]
    },
    {
        "title": "Motivating Mornings",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-motivating-mornings-33.mp3",
        "genre": [
            "House & Electronica",
            "Dramatic",
            "Upbeat",
            "Epic",
            "House",
            "Motivational",
            "Workout"
        ]
    },
    {
        "title": "Sports Highlights",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-sports-highlights-51.mp3",
        "genre": [
            "Rock",
            "Aggressive",
            "Mysterious",
            "Sports",
            "Punk",
            "Suspense",
            "Retro",
            "Guitar",
            "Electric"
        ]
    },
    {
        "title": "Sleepy Cat",
        "author": "by Alejandro Magaña (A. M.)",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-sleepy-cat-135.mp3",
        "genre": [
            "House & Electronica",
            "Sad",
            "Mellow",
            "House",
            "Chill",
            "Breakbeat",
            "Lo-fi"
        ]
    },
    {
        "title": "Piano Horror",
        "author": "by Francisco Alvear",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-piano-horror-671.mp3",
        "genre": [
            "Cinematic",
            "Sad",
            "Eerie",
            "Horror",
            "Intense",
            "Suspense",
            "Atmospheres",
            "Dark",
            "Mysterious"
        ]
    },
    {
        "title": "Deep Meditation",
        "author": "by Alejandro Magaña (A. M.)",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-deep-meditation-109.mp3",
        "genre": [
            "Ambient",
            "Mysterious",
            "Smooth",
            "Atmospheres",
            "Vocals",
            "Electronica",
            "Relaxation",
            "Chill"
        ]
    },
    {
        "title": "Epical Drums 01",
        "author": "by Grigoriy Nuzhny",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-epical-drums-01-676.mp3",
        "genre": [
            "Cinematic",
            "Aggressive",
            "Mysterious",
            "Folk",
            "Atmospheres",
            "Intense",
            "Suspense",
            "Drums"
        ]
    },
    {
        "title": "Delightful",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-delightful-4.mp3",
        "genre": [
            "Children",
            "Mellow",
            "Whimsical",
            "Guitar",
            "Positive",
            "Inspirational"
        ]
    },
    {
        "title": "Fun Times",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-fun-times-7.mp3",
        "genre": [
            "Corporate",
            "Happy",
            "Uplifting",
            "Motivational",
            "Cheerful",
            "Clapping",
            "Guitar",
            "Positive"
        ]
    },
    {
        "title": "Slow Trail",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-slow-trail-71.mp3",
        "genre": [
            "Cinematic",
            "Sad",
            "Dramatic",
            "Epic",
            "Nostalgic",
            "Violin",
            "Mysterious"
        ]
    },
    {
        "title": "Just Kidding",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-just-kidding-11.mp3",
        "genre": [
            "Children",
            "Sad",
            "Mellow",
            "Kids",
            "Lullaby",
            "Guitar",
            "Nostalgic"
        ]
    },
    {
        "title": "Forest Treasure",
        "author": "by Alejandro Magaña (A. M.)",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-forest-treasure-138.mp3",
        "genre": [
            "Ambient",
            "Dramatic",
            "Mysterious",
            "Intro",
            "Relaxation",
            "Atmospheres",
            "Vocals"
        ]
    },
    {
        "title": "Night Sky Hip Hop",
        "author": "by Michael Ramir C.",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-night-sky-hip-hop-970.mp3",
        "genre": [
            "Hip Hop",
            "Aggressive",
            "Dramatic",
            "Romantic",
            "Synth",
            "Motivational",
            "Intense"
        ]
    },
    {
        "title": "Kodama Night Town",
        "author": "by Alejandro Magaña (A. M.)",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-kodama-night-town-114.mp3",
        "genre": [
            "Ambient",
            "Mysterious",
            "Smooth",
            "Forest",
            "Background",
            "Slow",
            "Nature",
            "Dreamy"
        ]
    },
    {
        "title": "Uplift Me",
        "author": "by Ahjay Stelino",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-uplift-me-35.mp3",
        "genre": [
            "Rock",
            "Happy",
            "Smooth",
            "Inspirational",
            "Nostalgic",
            "Electric",
            "Guitar"
        ]
    },
    {
        "title": "Hollidays",
        "author": "by Grigoriy Nuzhny",
        "mp3": "https://assets.mixkit.co/music/preview/mixkit-hollidays-690.mp3",
        "genre": [
            "Classical",
            "Happy",
            "Uplifting",
            "Holiday",
            "Seasonal",
            "Christmas"
        ]
    }
];

let main = document.getElementById("main");
for (const music of arrAudioWithGenre) {
    console.log(music);
    let divTitle = document.createElement('div');
    divTitle.classList.add('card-wrapper')
    let audio = document.createElement('audio');
    audio.src = music.mp3;
    audio.controls = true;
    let h2 = document.createElement('h2');
    h2.innerText = music.title;
    let h3 = document.createElement('h3');
    h3.innerText = music.author;
    let div = document.createElement('div');
    div.classList.add('genre');
        for (const genre of music.genre) {
            let p = document.createElement('p');
            console.log(genre);
            p.innerText = genre;
            div.appendChild(p);
        }
    divTitle.append(audio, h2 , h3, div);
    main.append(divTitle);
}