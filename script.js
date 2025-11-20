// 🔝 VARIABLES
const showside = document.getElementById("show-side");
const hideside = document.getElementById("hideside");
const sideBar = document.getElementById("sideBar");
const ajouteButton = document.getElementById("ajoute-btn");
const showMoodal = document.getElementById("profileMoodal");
const saveButtonForAddingEmployee = document.getElementById("SaveEmployee");
const closeBtn = document.getElementById("closebtn");
const profileCardContainer = document.getElementById("profilecardcontainer");
const modalPourSearchEmployee = document.getElementById("modalpoursearch");
const closesearchmodal = document.getElementById("closesearchmodal");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const imgContainer = document.getElementById("imgcontainer");
const butotonDeAjouterdanslessalle = document.querySelectorAll(".ajouterdanslessalle");
const buttonToshowModal = document.querySelectorAll(".ajouterdanslessalle");
const searchDivContainer = document.getElementById("modalholder");
const searchInput = document.getElementById("inputSearch");
const AjouterNovelExperiece = document.getElementById("AjouterNovelExperiece");
const addExperienceButoon = document.getElementById("AjouterNovelExperiece");
const experienceContainer = document.getElementById("cardofexperience");
const companyName = document.getElementById("companyname");
const roleExperience = document.getElementById("roleExperience");
const startDate = document.getElementById("startdate");
const endDate = document.getElementById("enddate");
const fullNameInput = document.getElementById("fullname");
const role = document.getElementById("Role");
const imgUrl = document.getElementById("imgurl");

const regexName = /^[a-zA-ZÀ-ÿ\s\-']{2,}$/;
const urlRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;

let ExperienceArray = [];

let unsnighedCards = [
  { name: "Alice", role: "Frontend Developer", img: "alice.jpg", experience: [{ company: "TechCorp", roleE: "React Developer" }], id: Date.now() + 3456, email: "alice@techcorp.com", phone: "+1-555-0101" },
  { name: "Bob", role: "Backend Developer", img: "bob.jpg", experience: [{ company: "CodeBase", roleE: "Node.js Engineer" }], id: Date.now() + 2345678, email: "bob@codebase.io", phone: "+1-555-0102" },
  { name: "Charlie", role: "Fullstack Developer", img: "charlie.jpg", experience: [{ company: "DevWorks", roleE: "MERN Stack Dev" }], id: Date.now() + 3754, email: "charlie@devworks.dev", phone: "+1-555-0103" },
  { name: "Diana", role: "UI/UX Designer", img: "diana.jpg", experience: [{ company: "Designify", roleE: "Product Designer" }], id: Date.now() + 345654, email: "diana@designify.co", phone: "+1-555-0104" },
  { name: "Ethan", role: "QA Engineer", img: "ethan.jpg", experience: [{ company: "BugSquashers", roleE: "Test Automation Lead" }], id: Date.now() + 346754, email: "ethan@bugsquashers.io", phone: "+1-555-0105" },
  { name: "Fiona", role: "Project Manager", img: "fiona.jpg", experience: [{ company: "AgileFlow", roleE: "Scrum Master" }], id: Date.now() + 34562, email: "fiona@agileflow.org", phone: "+1-555-0106" },
  { name: "George", role: "DevOps Engineer", img: "george.jpg", experience: [{ company: "CloudOps", roleE: "CI/CD Specialist" }], id: Date.now() + 34345, email: "george@cloudops.net", phone: "+1-555-0107" },
  { name: "Hannah", role: "Security Analyst", img: "hannah.jpg", experience: [{ company: "SecureNet", roleE: "Penetration Tester" }], id: Date.now() + 33, email: "hannah@securenet.org", phone: "+1-555-0108" },
  { name: "Ian", role: "Data Scientist", img: "ian.jpg", experience: [{ company: "DataDive", roleE: "ML Engineer" }], id: Date.now() + 342, email: "ian@datadive.ai", phone: "+1-555-0109" },
  { name: "Julia", role: "AI Engineer", img: "julia.jpg", experience: [{ company: "NeuroTech", roleE: "NLP Specialist" }], id: Date.now() + 345, email: "julia@neurotech.ai", phone: "+1-555-0110" }
];


afficherlescard();

searchInput.addEventListener("input", () => {
  if (searchInput.value !== "") {
    showunshinedemployees(searchInput.value);
  } else {
    searchDivContainer.innerHTML = "";
  }
});

butotonDeAjouterdanslessalle.forEach((button) => {
  button.addEventListener("click", showSearchModal);
});

addExperienceButoon.addEventListener("click", displayexperience);

experienceContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON" && e.target.textContent === "x") {
    e.target.parentElement.remove();
    remooveexperience(e.target);
  }
});

hideside.addEventListener("click", hideSideBar);
showside.addEventListener("click", showSideBar);
ajouteButton.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeMoodal);
saveButtonForAddingEmployee.addEventListener("click", AjouterEmployee);

imgContainer.innerHTML = `<img src="${imgUrl.value}" alt="Pic" class="profile-img" />`;
imgUrl.addEventListener("input", () => {
  imgContainer.innerHTML = `<img src="${imgUrl.value}" alt="Pic" class="profile-img" />`;
});


function showunshinedemployees(employeesName) {
  const cardsShownAfterShow = unsnighedCards.filter((ele) => ele.name.includes(employeesName));
  cardsShownAfterShow.forEach((ele) => {
    searchDivContainer.innerHTML += `
      <div class="simple-card">
        <img src="${ele.img}" alt="Profile" class="simple-pic">
        <p class="simple-name">${ele.name}</p>
        <button class="confirm-btn">✅</button>
      </div>
    `;
  });
}

function displayexperience() {
  if (checkExperienceinputs()) {
    const experienceCard = {
      company: companyName.value,
      roleE: roleExperience.value,
      startDate: startDate.value,
      enddate: endDate.value,
      id: Date.now(),
    };
    ExperienceArray.push(experienceCard);
    companyName.value = "";
    roleExperience.value = "";
    startDate.value = "";
    endDate.value = "";
    renderExperience();
  }
}

function renderExperience() {
  experienceContainer.innerHTML = "";
  ExperienceArray.forEach((exp) => {
    experienceContainer.innerHTML += `
      <span class="rounded-span">
        ${exp.roleE}
        <button class="removeExperience" style="background:red; color:white; border:none; border-radius:50%; width:16px; height:16px; font-size:10px; margin-left: 5px; cursor:pointer; padding-left : 5px;" data-experience-id="${exp.id}">x</button>
      </span>
    `;
  });
}

function remooveexperience(button) {
  ExperienceArray.forEach((experience) => {
    if (button.getAttribute("data-experience-id") == experience.id) {
      const indexofexperience = ExperienceArray.indexOf(experience);
      ExperienceArray.splice(indexofexperience, 1);
    }
  });
  console.log(ExperienceArray);
}

function hideSideBar() {
  sideBar.style.display = "none";
  hideside.style.display = "none";
  showside.style.display = "block";
  showside.style.height = "100vh";
}

function showSideBar() {
  document.getElementById("cont").style.zIndex = "1";
  sideBar.style.zIndex = "1";
  sideBar.style.width = "200px";
  sideBar.style.display = "block";
  hideside.style.display = "block";
  showside.style.display = "none";
}

function showModal() {
  showMoodal.style.display = "flex";
}

function closeMoodal() {
  showMoodal.style.display = "none";
}

function AjouterEmployee() {
  if (!regexName.test(fullNameInput.value)) {
    return;
  }
  if (!urlRegex.test(imgUrl.value)) {
    return;
  }
  const experienceInputsChecker = checkExperienceinputs();

  if (experienceInputsChecker) {
    const newCard = {
      name: fullNameInput.value,
      role: role.value,
      img: imgUrl.value,
      experience: ExperienceArray,
      email: emailInput.value,
      phone: phoneInput.value,
      id: Date.now(),
    };
    unsnighedCards.push(newCard);

    showMoodal.style.display = "none";
    afficherlescard();
    fullNameInput.value = "";
    imgUrl.value = "";
    ExperienceArray = [];
    experienceContainer.innerHTML = "";
    imgContainer.innerHTML = "";
  }
}

function afficherlescard() {
  profileCardContainer.innerText = "";
  unsnighedCards.forEach((employee) => {
    profileCardContainer.innerHTML += `
     <div class="profile-card">
        <img src="${employee.img}" class="avatar" />
        <div class="info">
          <h4 style="overflow : hidden; text-overflow: ellipsis; white-space: no-wrap;">${employee.name}</h4>
          <p>${employee.role}</p>
        </div>
        <div class="buttons">
          <button class="delete" id="deleteButton" dataId="${employee.id}">×</button>
        </div>
      </div>
     `;
  });

  const deleteButtons = document.querySelectorAll("#deleteButton");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      deleteEmployee(button);
    });
  });
}

function deleteEmployee(Clickedbutton) {
  const CardOfTheClickedButton = unsnighedCards.find(
    (card) => card.id == Clickedbutton.getAttribute("dataId")
  );

  const index = unsnighedCards.indexOf(CardOfTheClickedButton);

  unsnighedCards.splice(index, 1);

  afficherlescard();
}

function showSearchModal() {
  searchDivContainer.innerHTML = "";
  modalPourSearchEmployee.style.display = "flex";
  modalPourSearchEmployee.style.zIndex = "1";
  closesearchmodal.addEventListener("click", () => {
    modalPourSearchEmployee.style.display = "none";
  });
}

function checkExperienceinputs() {
  if (ExperienceArray.length == 0) {
    if (!regexName.test(companyName.value)) {
      return;
    }
    if (!regexName.test(roleExperience.value)) {
      return;
    }
    if (!startDate.value || !endDate.value) {
      return;
    }
  }
  return true;
}