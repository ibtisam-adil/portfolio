

let sectionCard = document.querySelector('.cards');

let arr = [
    { img: "./assets/images/poppic.svg", name: "Tonic", desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.", work: ['CANOPY', 'Back End Dev', '2015'], lang: ['html', 'css', 'javaScript']},
    { img: "./assets/images/poppic.svg", name: "Tonic", desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.", work: ['CANOPY', 'Back End Dev', '2015'], lang: ['html', 'css', 'javaScript']},
    { img: "./assets/images/poppic.svg", name: "Tonic", desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.", work: ['CANOPY', 'Back End Dev', '2015'], lang: ['html', 'css', 'javaScript']},
    { img: "./assets/images/poppic.svg", name: "Tonic", desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.", work: ['CANOPY', 'Back End Dev', '2015'], lang: ['html', 'css', 'javaScript']}
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
                </div>
                <button class="btn">See projects</button>
            </div>
        </div>
    `;
});
sectionCard.innerHTML = cardHTMLs.join('');
