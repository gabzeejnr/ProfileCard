import {
  profileCard,
  overlay,
  cardHolderName,
  cardHolderRole,
  cardHolderDepartment,
  emailLink,
  phoneLink,
  holderAddress,
  dateJoined,
  aboutText,
} from "./selectors.js";

export function populateCard(row) {
  cardHolderName.innerText =
    row.querySelector(".holder-name").innerText;
  cardHolderRole.innerText =
    row.querySelector(".holder-role").innerText;
  cardHolderDepartment.innerText =
    row.querySelector(".holder-department").innerText;

  const email = row.querySelector(".holder-email").innerText;
  emailLink.href = `mailto:${email}`;
  emailLink.innerText = email;

  const phone = row.dataset.phone;
  phoneLink.href = `tel:${phone}`;
  phoneLink.innerText = phone;

  holderAddress.innerHTML =
    `<i class="fa-solid fa-location-dot"></i> ${row.querySelector(".holder-address").innerText}`;

  dateJoined.innerHTML =
    `<i class="fa-solid fa-calendar-day"></i> ${row.dataset.joined}`;

  aboutText.innerText = row.dataset.about;
};

export function openCard() {
  overlay.style.display = "block";
  profileCard.style.display = "flex";
}

export function closeCard() {
  overlay.style.display = "none";
  profileCard.style.display = "none";
    }};

export function openCard() {
  overlay.style.display = "block";
  profileCard.style.display = "flex";
};

export function closeCard() {
  overlay.style.display = "none";
  profileCard.style.display = "none";
}
