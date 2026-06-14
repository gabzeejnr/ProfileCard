const profileCard = document.querySelector<HTMLElement>("#profile-card");
const viewButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".view-btn"));
const closeProfileCard = document.querySelector<HTMLElement>("#close-profile-card");

const setCardText = (selector: string, text: string): void => {
  const target = document.querySelector<HTMLElement>(selector);
  if (target) target.innerText = text;
};

const getRowText = (row: Element, selector: string): string => {
  return row.querySelector<HTMLElement>(selector)?.innerText ?? "";
};

viewButtons.forEach((button): void => {
  button.addEventListener("click", (): void => {
    if (!profileCard) return;

    const row = button.closest("tr");
    if (!row) return;

    setCardText("#card-holder-name", getRowText(row, ".holder-name"));
    setCardText("#card-holder-role", getRowText(row, ".holder-role"));
    setCardText("#card-holder-department", getRowText(row, ".holder-department"));

    profileCard.style.display = "flex";
  });
});

closeProfileCard?.addEventListener("click", (): void => {
  if (!profileCard) return;

  profileCard.style.display = "none";
  console.log("Profile Card Closed");
});