const profileCard = document.querySelector("#profile-card");
const viewButtons = document.querySelectorAll(".view-btn");
let closeProfileCard = document.querySelector("#close-profile-card");

viewButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const row = btn.closest("tr");

    const name = row.querySelector(".holder-name").innerText;
    console.log(name);
    document.querySelector("#card-holder-name").innerText = name;
    
    const role = row.querySelector(".holder-role").innerText;
    document.querySelector("#card-holder-role").innerText = role;
    console.log(role);
    
    const department = row.querySelector(".holder-department").innerText;
    document.querySelector("#card-holder-department").innerText = department;
    console.log(department);

    const email = row.querySelector(".holder-email").innerText;
    document.querySelector(".holder-detail #email").innerHTML = `<i class="fa-regular fa-envelope"></i> ${email}`;
    
    profileCard.style.display = "flex";
  });
}); 


closeProfileCard.addEventListener("click", () => {
  profileCard.style.cssText = `display: none;`;
  console.log("Profile Card Closed");
})