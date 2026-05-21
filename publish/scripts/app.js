const cards = [
  {
    image: "./assets/F4280016_Slabbed_1x1_FRONT.jpg",
    player: "Mario Götze",
    title: "2023 Topps Chrome Bundesliga Sapphire",
    details: "#31 · Eintracht Frankfurt · Padparadscha Refractor 1/1 · TAG 8.5 NM-MT+ · Cert F4280016",
  },
  {
    image: "./assets/92676667-front.jpg",
    player: "Harvey Elliott",
    title: "2023-24 Prizm P/L Black Finite",
    details: "#79 · Liverpool FC · Black Finite 1/1 · PSA Mint 9 · Cert 92676667",
  },
  {
    image: "./assets/124068835-front.jpg",
    player: "Harry Wilson",
    title: "2024-25 Impeccable P/L Stars AU-PLT",
    details: "#ISHW · Fulham · Impeccable Stars autograph platinum 1/1 · PSA Mint 9 / Auto 10 · Cert 124068835",
  },
  {
    image: "./assets/124334311-front.jpg",
    player: "Harry Wilson",
    title: "2024-25 Prizm P/L Sig-Black Shimmer",
    details: "#SHW · Fulham · Signature Black Shimmer 1/1 · PSA/DNA Authentic / Auto 9 · Cert 124334311",
  },
];

const viewer = document.querySelector("#viewer");
const viewerImage = document.querySelector("#viewerImage");
const viewerPlayer = document.querySelector("#viewerPlayer");
const viewerTitle = document.querySelector("#viewerTitle");
const viewerDetails = document.querySelector("#viewerDetails");
const closeViewer = document.querySelector("#closeViewer");
const themeToggle = document.querySelector("#themeToggle");

function openCard(index) {
  const card = cards[index];
  viewerImage.src = card.image;
  viewerImage.alt = `${card.player} ${card.title}`;
  viewerPlayer.textContent = card.player;
  viewerTitle.textContent = card.title;
  viewerDetails.textContent = card.details;
  viewer.showModal();
}

document.querySelectorAll(".feature-card").forEach((element) => {
  element.addEventListener("click", () => openCard(Number(element.dataset.card)));
});

document.querySelectorAll(".collectible-card .image-frame").forEach((button) => {
  const card = button.closest(".collectible-card");
  button.addEventListener("click", () => openCard(Number(card.dataset.card)));
});

closeViewer.addEventListener("click", () => viewer.close());

viewer.addEventListener("click", (event) => {
  if (event.target === viewer) {
    viewer.close();
  }
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("lights-on");
});
