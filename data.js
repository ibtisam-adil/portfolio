import { arr } from "./array.js";

let sectionCard = document.querySelector(".cards");

let cardHTMLs = arr.map((val, id) => {
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
                <button id="${id}" class="btn">See projects</button>
            </div>
        </div>
    `;
});

sectionCard.innerHTML = cardHTMLs.join("");

let a = document.querySelector(".popup");

let button = document.querySelectorAll(".btn");
button.forEach((btn) => {
  btn.addEventListener("click", (butn) => {
    openPopup(butn.target.id);
  });
});

function openPopup(id) {
  let b = arr[id];
  a.innerHTML = `
    <div class="overlay"></div>
        <div class="pop-card">
            <div class="crossbtn">
                <div class="content-heading">
                <h3 class="Bold-h">${b.name}</h3>
                <div class="info">
                    <p>${b.work[0]}</p>
                    <img src="./assets/images/dot.png"/>
                    <p class="light">${b.work[1]}</p>
                    <img src="./assets/images/dot.png"/>
                    <p class="light">${b.work[2]}</p>
                </div>
                </div>
                <p id="close-popup">&times;</p>
            </div>    
            <div class="popcard-img">
                <img src="${b.img}"/>
            </div>
            <div class="popcard-content">
                <div class="popcard-desc">
                    <p class="desc-p">${b.detailedDesc}</p>
                    </div>
                <div class="btn-lang">
                    <div class="content-lang">
                        <p>html</p>
                        <p>css</p>
                        <p>javascript</p>
                        <p>ruby</p>
                        <p>bootstrap</p>
                    </div>
                    <div class="pop-btn">
                        <button class="btn">See Live</button>
                        <button class="btn">See Source</button>
                    </div>
                </div>
            </div>
        </div>
    `;

  let popup = document.querySelector(".overlay");

  popup.classList.add("open-popup");
  a.classList.remove("hide");

  let closePopup = document.querySelector("#close-popup");
  closePopup.addEventListener("click", () => {
    popup.classList.remove("open-popup");
    a.classList.add("hide");
  });
}

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// remove toggle icon and navbar
window.onscroll = () => {


  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
