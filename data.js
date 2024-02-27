

let sectionCard = document.querySelector('.cards');

let arr = [
    { img: "./assets/images/poppic.svg", name: "Tonic", desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.", work: ['CANOPY', 'Back End Dev', '2015'], lang: ['html', 'css', 'javaScript', 'Ruby on rails']},
    { img: "./assets/images/poppic.svg", name: "Multi-Post Stories", desc: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.", work: ['FACEBOOK', 'Full Stack Dev', '2015'], lang: ['html', 'css', 'javaScript', 'Ruby on rails']},
    { img: "./assets/images/poppic.svg", name: "Facebook 360", desc: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.", work: ['FACEBOOK', 'Full Stack Dev', '2015'], lang: ['html', 'css', 'javaScript', 'Ruby on rails']},
    { img: "./assets/images/poppic.svg", name: "Uber Navigation", desc: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.", work: ['UBER', 'Lead Developer', '2018'], lang: ['html', 'css', 'javaScript', 'Ruby on rails']}
];

let cardHTMLs = arr.map((val)=>{
    return `
        <div class="card-one">
            <div class="card-img">
                <img src="${val.img}"/>
            </div>
            <div class="card-content">
                <div class="content-heading">
                    <h3 class="Bold-h">${val.name}</h3>
                    <div class="info">
                        <p>${val.work[0]}</p>
                        <img src="./assets/images/dot.png"/>
                        <p class="light">${val.work[1]}</p>
                        <img src="./assets/images/dot.png"/>
                        <p class="light">${val.work[2]}</p>
                    </div>
                </div>
                <p class="content-p">${val.desc}</p>
                <div class="content-lang">
                    <p>${val.lang[0]}</p>
                    <p>${val.lang[1]}</p>
                    <p>${val.lang[2]}</p>
                    <p>${val.lang[3]}</p>
                    
                </div>
                <button class="btn" onclick="openPopup()">See projects</button>
            </div>
        </div>
    `;
});

sectionCard.innerHTML = cardHTMLs.join('');

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}
