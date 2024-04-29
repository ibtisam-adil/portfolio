import { projects } from "./array.js";

const sectionCard = document.querySelector(".cards-section");

const generateCardHTML = (project, id) => {
  return `
        <div class="all-cards">
            <div class="card-img">
                <img src="${project.img}"/>
            </div>
            <div class="card-content">
                <div class="content-heading">
                    <h3 class="Bold-h">${project.name}</h3>
                    <div class="info">
                        <p>${project.work[0]}</p>
                        <img src="./assets/images/dot.png"/>
                        <p class="light">${project.work[1]}</p>
                        <img src="./assets/images/dot.png"/>
                        <p class="light">${project.work[2]}</p>
                    </div>
                </div>
                <p class="project-description">${project.desc}</p>
                <div class="content-lang">
                    <p>${project.lang[0]}</p>
                    <p>${project.lang[1]}</p>
                    <p>${project.lang[2]}</p>
                </div>
                <button id="${id}" class="btn">See projects</button>
            </div>
        </div>
    `;
};

const renderCards = () => {
  const cardHTMLs = projects.map((project, id) =>
    generateCardHTML(project, id)
  );
  sectionCard.innerHTML = cardHTMLs.join("");
};

renderCards();

const sectionPopup = document.querySelector(".popup");

const button = document.querySelectorAll(".btn");

button.forEach((btn) => {
  btn.addEventListener("click", (btn) => {
    openPopup(btn.target.id);
  });
});

function openPopup(id) {
  const project = projects[id];
  sectionPopup.innerHTML = `
  <div class="overlay"></div>
  <div class="pop-card">
    <div class="crossbtn">
      <div class="content-heading">
        <h3 class="Bold-h">${project.name}</h3>
        <div class="info">
          <p>${project.work[0]}</p>
          <img src="./assets/images/dot.png"/>
          <p class="light">${project.work[1]}</p>
          <img src="./assets/images/dot.png"/>
          <p class="light">${project.work[2]}</p>
        </div>
      </div>
      <p id="close-popup">&times;</p>
    </div>    
    <div class="popcard-img">
      <img src="${project.img}"/>
    </div>
    <div class="popcard-content">
      <div class="popcard-desc">
        <p class="desc-p">${project.detailedDesc}</p>
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
          <a href="${project.liveURL}" class="btn" target="_blank">See Live</a>
          <a href="${project.sourceURL}" class="btn" target="_blank">See Source</a>
        </div>
      </div>
    </div>
  </div>
  `;

  const overlay = document.querySelector(".overlay");

  overlay.classList.add("add-overlay");
  sectionPopup.classList.remove("hide-popup");

  const closePopup = document.querySelector("#close-popup");
  closePopup.addEventListener("click", () => {
    overlay.classList.remove("add-overlay");
    sectionPopup.classList.add("hide-popup");
  });
};

const headerElement = document.querySelector("header");
const logo = document.querySelector(".logo");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  logo.classList.toggle("menu-logo");
  navbar.classList.toggle("active");
  headerElement.classList.toggle("hr-color");
};

// remove toggle icon and navbar
window.onscroll = () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
