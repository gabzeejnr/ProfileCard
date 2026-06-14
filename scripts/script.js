import {
  viewButtons,
  closeProfileCard,
  overlay,
} from "./selectors.js";

import {
  populateCard,
  openCard,
  closeCard,
} from "./card.js";

viewButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const row = btn.closest("tr");

    populateCard(row);
    openCard();
  });
});

closeProfileCard.addEventListener("click", closeCard);

overlay.addEventListener("click", closeCard);
