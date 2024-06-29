const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Elephant Beside on Baby Elephant",
  },
  {
    url: "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Blue Geeen and Orange Parrot",
  },
  {
    url: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Zebras on Zebra",
  },
];
const gallery = document.querySelector(".gallery");
const createGallery = (images) =>
  images
    .map(
      (image) => `
    <li>
      <img class= "photo" src="${image.url}" width="200" height = "120" alt="${image.alt}" />
    </li>`
    )
    .join("");
const galleryMarkup = createGallery(images);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

// const photos = document.querySelectorAll(".photo");

gallery.style.display = "flex";
gallery.style.gap = "10px";
gallery.style.padding = "30px";
gallery.style.justifyContent = "center";
gallery.style.alignItems = "center";
gallery.style.listStyleType = "none";
gallery.style.borderRadius = "20px";
gallery.style.backgroundColor = "darkseagreen";
