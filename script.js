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
const butotonDeAjouterdanslessalle = document.querySelectorAll(
  ".ajouterdanslessalle"
);
const buttonToshowModal = document.querySelectorAll(".ajouterdanslessalle");
const searchDivContainer = document.getElementById("modalholder");
const searchInput = document.getElementById("inputSearch");
const AjouterNovelExperiece = document.getElementById("AjouterNovelExperiece");
const addExperienceButoon = document.getElementById("AjouterNovelExperiece");
const experienceContainer = document.getElementById("cardofexperience");
const companyName = document.getElementById("companyname");

const conferenceNumber = document.getElementById("conferencenombre");
const receptionNombre = document.getElementById("receptionnombre");
var buttonsearchchecker;

const conferenceCard = document.getElementById("cont1");
const receptioncard = document.getElementById("cont2");
const serveurcard = document.getElementById("cont3");
const securityCard = document.getElementById("cont4");
const employeeCard = document.getElementById("cont5");
const archifCard = document.getElementById("cont6");

const roleExperience = document.getElementById("roleExperience");
const startDate = document.getElementById("startdate");
const endDate = document.getElementById("enddate");
const fullNameInput = document.getElementById("fullname");
const role = document.getElementById("Role");
const imgUrl = document.getElementById("imgurl");

const regexName = /^[a-zA-ZÀ-ÿ\s\-']{2,}$/;
const urlRegex =
  /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;

let ExperienceArray = [];

let unsnighedCards = [
  {
    name: "Alice",
    role: "Manager",
    img: "alice.jpg",
    experience: [
      {
        company: "TechCorp",
        roleE: "React Developer",
        startDate: "12-03-2022",
        enddate: "28-07-2023",
      },
    ],
    id: Date.now() + 3456,
    email: "alice@techcorp.com",
    phone: "+1-555-0101",
  },
  {
    name: "Bob",
    role: "Nettoyage",
    img: "bob.jpg",
    experience: [
      {
        company: "CodeBase",
        roleE: "Node.js Engineer",
        startDate: "05-01-2021",
        enddate: "19-11-2022",
      },
    ],
    id: Date.now() + 2345678,
    email: "bob@codebase.io",
    phone: "+1-555-0102",
  },
  {
    name: "Charlie",
    role: "Techniciens IT",
    img: "charlie.jpg",
    experience: [
      {
        company: "DevWorks",
        roleE: "MERN Stack Dev",
        startDate: "17-06-2020",
        enddate: "03-03-2022",
      },
    ],
    id: Date.now() + 3754,
    email: "charlie@devworks.dev",
    phone: "+1-555-0103",
  },
  {
    name: "Diana",
    role: "sécurité",
    img: "diana.jpg",
    experience: [
      {
        company: "Designify",
        roleE: "Product Designer",
        startDate: "09-09-2021",
        enddate: "14-02-2023",
      },
    ],
    id: Date.now() + 345654,
    email: "diana@designify.co",
    phone: "+1-555-0104",
  },
  {
    name: "Ethan",
    role: "Autre",
    img: "ethan.jpg",
    experience: [
      {
        company: "BugSquashers",
        roleE: "Test Automation Lead",
        startDate: "22-04-2019",
        enddate: "30-10-2020",
      },
    ],
    id: Date.now() + 346754,
    email: "ethan@bugsquashers.io",
    phone: "+1-555-0105",
  },
  {
    name: "Fiona",
    role: "Réceptionnist",
    img: "fiona.jpg",
    experience: [
      {
        company: "AgileFlow",
        roleE: "Scrum Master",
        startDate: "11-01-2020",
        enddate: "25-06-2021",
      },
    ],
    id: Date.now() + 34562,
    email: "fiona@agileflow.org",
    phone: "+1-555-0106",
  },
  {
    name: "George",
    role: "Manager",
    img: "george.jpg",
    experience: [
      {
        company: "CloudOps",
        roleE: "CI/CD Specialist",
        startDate: "03-05-2022",
        enddate: "18-09-2023",
      },
    ],
    id: Date.now() + 34345,
    email: "george@cloudops.net",
    phone: "+1-555-0107",
  },
  {
    name: "Hannah",
    role: "Techniciens IT",
    img: "hannah.jpg",
    experience: [
      {
        company: "SecureNet",
        roleE: "Penetration Tester",
        startDate: "27-08-2020",
        enddate: "10-12-2021",
      },
    ],
    id: Date.now() + 33,
    email: "hannah@securenet.org",
    phone: "+1-555-0108",
  },
  {
    name: "Ian",
    role: "sécurité",
    img: "ian.jpg",
    experience: [
      {
        company: "DataDive",
        roleE: "ML Engineer",
        startDate: "06-02-2021",
        enddate: "29-11-2022",
      },
    ],
    id: Date.now() + 342,
    email: "ian@datadive.ai",
    phone: "+1-555-0109",
  },
  {
    name: "Julia",
    role: "Autre",
    img: "julia.jpg",
    experience: [
      {
        company: "NeuroTech",
        roleE: "NLP Specialist",
        startDate: "15-07-2019",
        enddate: "04-01-2021",
      },
    ],
    id: Date.now() + 345,
    email: "julia@neurotech.ai",
    phone: "+1-555-0110",
  },
  {
    name: "Karim",
    role: "Autre",
    img: "karim.jpg",
    experience: [
      {
        company: "WebForge",
        roleE: "Frontend Developer",
        startDate: "10-02-2018",
        enddate: "15-06-2019",
      },
      {
        company: "CodeNest",
        roleE: "Backend Engineer",
        startDate: "01-07-2019",
        enddate: "30-11-2020",
      },
      {
        company: "AppVision",
        roleE: "Full Stack Engineer",
        startDate: "05-01-2021",
        enddate: "20-08-2022",
      },
      {
        company: "DevSphere",
        roleE: "Tech Lead",
        startDate: "01-09-2022",
        enddate: "10-11-2023",
      },
    ],
    id: Date.now() + 987654,
    email: "karim@devsphere.io",
    phone: "+1-555-0111",
  },
];

afficherlescard();

var cardsContainerInsideZone;
searchInput.addEventListener("input", () => {
  if (searchInput.value !== "") {
    showunshinedemployees(searchInput.value);
  } else {
    searchDivContainer.innerHTML = "";
  }
});

butotonDeAjouterdanslessalle.forEach((button) => {
  button.addEventListener("click", () => {
    buttonsearchchecker = button.id;
    cardsContainerInsideZone = button;
    showSearchModal();
  });
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

imgUrl.addEventListener("input", () => {
  imgContainer.innerHTML = `<img src="${imgUrl.value}" alt="Pic" class="profile-img" />`;
});

searchDivContainer.addEventListener("click", (e) => {
  addemployeetoacard(e.target);
});
function addemployeetoacard(targetButton) {
  if (targetButton.className == "confirm") {
    unsnighedCards.forEach((employee) => {
      if (employee.id == targetButton.id) {
        if (buttonsearchchecker == "id1" || buttonsearchchecker == "id5") {
          cardsContainerInsideZone.parentElement.innerHTML +=
            createcardtoputinsignedcards(employee);
          removemodalandaddemployeetothezone(employee);

          return;
        }
        if (
          (employee.role == "Réceptionnist" ||
            employee.role == "Nettoyage" ||
            employee.role == "Manager") &&
          buttonsearchchecker == "id2"
        ) {
          receptioncard.innerHTML += createcardtoputinsignedcards(employee);
          removemodalandaddemployeetothezone(employee);
          receptionNombre.innerText += 1;

          return;
        }
        if (
          (employee.role == "Techniciens IT" ||
            employee.role == "Nettoyage" ||
            employee.role == "Manager") &&
          buttonsearchchecker == "id3"
        ) {
          serveurcard.innerHTML += createcardtoputinsignedcards(employee);
          removemodalandaddemployeetothezone(employee);
          return;
        }
        if (
          (employee.role == "sécurité" ||
            employee.role == "Manager" ||
            employee.role == "Nettoyage") &&
          buttonsearchchecker == "id4"
        ) {
          securityCard.innerHTML += createcardtoputinsignedcards(employee);
          removemodalandaddemployeetothezone(employee);
          return;
        }
        if (employee.role == "Autre" && buttonsearchchecker != "id6") {
          cardsContainerInsideZone.parentElement.innerHTML +=
            createcardtoputinsignedcards(employee);
          removemodalandaddemployeetothezone(employee);
          return;
        }
        if (employee.role != "Autre" && buttonsearchchecker == "id6") {
          cardsContainerInsideZone.parentElement.innerHTML +=
            createcardtoputinsignedcards(employee);
          removemodalandaddemployeetothezone(employee);
          return;
        }
      }
    });
  }
}
function removemodalandaddemployeetothezone(employee) {
  modalPourSearchEmployee.style.display = "none";
  unsnighedCards.splice(unsnighedCards.indexOf(employee), 1);
  afficherlescard();
}
function createcardtoputinsignedcards(employee) {
  const employeeCard = `
     <div class="mini-card">
  <img src="${employee.img}" alt="Pic" class="mini-pic">
  <span class="mini-name">${employee.name}</span>
  <button class="mini-delete" id="${employee.id}">x</button>
</div>
    `;
  return employeeCard;
}
function showunshinedemployees(employeesName) {
  const cardsShownAfterShow = unsnighedCards.filter((ele) =>
    ele.name.includes(employeesName)
  );
  cardsShownAfterShow.forEach((ele) => {
    searchDivContainer.innerHTML += `
      <div class="simple-card">
  <img src="${ele.img}" alt="Pic" class="pic">
  <span class="name">${ele.name}</span>
  <button class="confirm" id="${ele.id}">✅</button>
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
          <button class="detail" id="${employee.id}">👤 </button>
        </div>
      </div>
     `;
  });
  console.log(unsnighedCards);
  const detailsEmployee = document.querySelectorAll(".detail");
  detailsEmployee.forEach((detailbutton) => {
    detailbutton.addEventListener("click", () => {
      showDetailModalwithvalues(detailbutton.id);
    });
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
var modalcontainer;
function showdDetailsOfTheEmployee(emp) {
  var theExpereiencesOTheClickedEmployee =
    emp.experience.length > 0
      ? Array.from(emp.experience)
          .map(
            (exp) =>
              `
    <li>
      <p><strong>Company:</strong> ${exp.company} </p>
      <p><strong>Role:</strong> ${exp.roleE} </p>
      <p><strong>From:</strong> ${exp.startDate}</p>
      <p><strong>To:</strong> ${exp.enddate}</p>
    </li>
    `
          )
          .join("")
      : `<p>No Experience</p>`;

  conferenceCard.innerHTML += `
  <div id="modalbg" class="modal-bg">
  <div class="modal-box">
    
    <button class="close-btn" id="closeModaldetail">✖</button>

    <img src="${emp.img}" class="profile-pic" />

    <div class="info">
      <p><strong>Name:</strong> ${emp.name}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
      <p><strong>Experience:</strong> ${emp.experience.length} Experiences </p>
    </div>

    <div class="company">
      
      <ul id="lesexperiencedetails"> 
       
     ${theExpereiencesOTheClickedEmployee}
      </ul>
    </div>

  </div>
</div>
  `;
  let closeModaldetail = document.getElementById("closeModaldetail");
  modalcontainer = document.getElementById("modalbg");
  closeModaldetail.addEventListener("click", removeModalDetail);
}

function showDetailModalwithvalues(ID) {
  const clickedButton = unsnighedCards.find((e) => e.id == ID);
  console.log(clickedButton);

  showdDetailsOfTheEmployee(clickedButton);
}

function removeModalDetail() {
  modalcontainer.remove();
}
