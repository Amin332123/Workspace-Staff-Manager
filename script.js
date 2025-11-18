const showside = document.getElementById("show-side");
const hideside = document.getElementById("hideside");
const sideBar = document.getElementById("sideBar");
const ajouteButton = document.getElementById("ajoute-btn");
const showMoodal = document.getElementById("profileMoodal");
const saveButtonForAddingEmployee = document.getElementById("SaveEmployee");
const closeBtn = document.getElementById("closebtn");
var profileCardContainer = document.getElementById("profilecardcontainer");
const modalPourSearchEmployee = document.getElementById("modalpoursearch");
const closesearchmodal = document.getElementById("closesearchmodal");
const butotonDeAjouterdanslessalle = document.querySelectorAll(
  ".ajouterdanslessalle"
);
const AjouterNovelExperiece = document.getElementById("AjouterNovelExperiece");
const regexName = /^[a-zA-ZÀ-ÿ\s\-']{2,}$/;
const urlRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
const addExperienceButoon = document.getElementById("AjouterNovelExperiece");
var experienceContainer = document.getElementById("cardofexperience");

butotonDeAjouterdanslessalle.forEach((button) => {
  button.addEventListener("click", showSearchModal);
});
// setTimeout(() => {
//     const deleteButtons = dovument.getElementById("deleteButton")
// }, 2000);

// inputs place (for creating new experience)

const companyName = document.getElementById("companyname");
var roleExperience = document.getElementById("roleExperience");
const startDate = document.getElementById("startdate");
const endDate = document.getElementById("enddate");

// deleteButtons.forEach((button) => {
//     button.addEventListener("click" , () => {
//         removeemployee(button)
//     })
// })

// function removeemployee(button) {

//   console.log("vvv")
// }

addExperienceButoon.addEventListener("click", displayexperience);

function displayexperience() {
  if (roleExperience.value !== "") {
    experienceContainer.innerHTML += `
     <span class="rounded-span"> ${roleExperience.value}</span>
     `;
  }
}

// Array that has unsigned cards
var unsnighedCards = [];

//  object of each card


// inputs place (for creating new employee):
const fullNameInput = document.getElementById("fullname");
const role = document.getElementById("Role");
const imgUrl = document.getElementById("imgurl");

// Areays part :

// const stockEmployeesInfo = []

hideside.addEventListener("click", hideSideBar);

function hideSideBar() {
  sideBar.style.display = "none";
  hideside.style.display = "none";
  showside.style.display = "block";
  showside.style.height = "100vh";
}

showside.addEventListener("click", showSideBar);

function showSideBar() {
  document.getElementById("cont").style.zIndex = "1";
  sideBar.style.zIndex = "1";
  sideBar.style.width = "200px";
  sideBar.style.display = "block";
  hideside.style.display = "block";
  showside.style.display = "none";
}

ajouteButton.addEventListener("click", showModal);

function showModal() {
  showMoodal.style.display = "flex";
}

var deleteButtons;
// onclick="document.getElementById('profileModal').style.display='none'

closeBtn.addEventListener("click", closeMoodal);

function closeMoodal() {
  showMoodal.style.display = "none";
}
saveButtonForAddingEmployee.addEventListener("click", AjouterEmployee);

const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;

function AjouterEmployee() {
    console.log("a")
  if (!regexName.test(fullNameInput.value)) {

    return;
  }
  if (!urlRegex.test(imgUrl.value)) {

    return;
  }
  const experienceInputsChecker =  checkExperienceinputs()



  if (experienceInputsChecker) {
    const newCard = {
    name: fullNameInput.value,
    role: role.value,
    img: imgUrl.value,
    experience: [],
  };
//   unsnighedCards.push(newCard);
 
  console.log(unsnighedCards);
  
  showMoodal.style.display = "none";
  afficherlescard();
  fullNameInput.value = " ";
  imgUrl.value = "";
  }
  
}
function afficherlescard() {
  profileCardContainer.innerText = "";
  unsnighedCards.forEach((employee) => {
    profileCardContainer.innerHTML += `
     <div class="profile-card">
        <img src="${employee.img}" class="avatar" />
        <div class="info">
          <h4>${employee.name}</h4>
          <p>${employee.role}</p>
        </div>
        <div class="buttons">
          <button class="modify">✎</button>
          <button class="delete" id="deleteButton">×</button>
        </div>
      </div>
     `;
  });

  deleteButtons = document.getElementById("deleteButton");
}

function showSearchModal() {
  modalPourSearchEmployee.style.display = "flex";
  modalPourSearchEmployee.style.zIndex = "1";
  closesearchmodal.addEventListener("click", () => {
    modalPourSearchEmployee.style.display = "none";
  });
}



function checkExperienceinputs() {
    if (!regexName.test(companyName.value)) {
    
    return;
  }
  if (!regexName.test(roleExperience.value)) {
    
    return;
  }
  if (!startDate.value || !endDate.value) {
    
    return;
  }

  return true
}