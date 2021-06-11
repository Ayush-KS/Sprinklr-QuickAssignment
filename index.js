// Importing Images
import images from "./images.js";

/**
 * @returns index of active list item
 */
const removeActive = function () {
  const activeItem = document.querySelector(".image-list_item.active");
  activeItem.classList.remove("active");
  return parseInt(activeItem.getAttribute("index"));
};

/**
 * Sets image in the image box
 * @param {node} listItem
 */
const setImage = function (listItem) {
  listItem.classList.add("active");
  const url = listItem.getAttribute("image-url");
  const title = listItem.getAttribute("image-title");

  const imageContainer = document.querySelector("#image-box_image img");
  const imageTitleContainer = document.querySelector("#image-box_title");
  imageContainer.setAttribute("src", url);
  imageTitleContainer.textContent = title;
};

// Finds the most optimal placement of ellipsis such that filetype is always visible
const setTitles = function () {
  const imageList = document.querySelectorAll(".image-list_item");
  imageList.forEach((listItem) => {
    const titleContainer = listItem.querySelector(".image-list_title");
    const title = listItem.getAttribute("image-title");
    const containerWidth = titleContainer.clientWidth;
    titleContainer.textContent = title;
    let textWidth = titleContainer.scrollWidth;

    let sub = 3;
    while (textWidth > containerWidth) {
      const left = parseInt((sub + 1) / 2);
      const right = parseInt(sub / 2);
      const half = parseInt(title.length / 2);
      const leftString = title.slice(0, half - left);
      const rightString = title.slice(Math.min(title.length - 5, half + right));
      const newTitle = leftString + "..." + rightString;
      titleContainer.textContent = newTitle;
      textWidth = titleContainer.scrollWidth;
      sub++;
      if (sub > half) break;
    }
  });
};

// Loads thumbnails and details in the selection box
const loadPictures = function () {
  const imageList = document.querySelector("#image-list");

  images.forEach(({ previewImage: url, title }, index) => {
    const listItem = document.createElement("li");

    // Adding class, and custom attributes(url, title, index)
    listItem.classList.add("image-list_item");
    listItem.setAttribute("image-url", url);
    listItem.setAttribute("image-title", title);
    listItem.setAttribute("index", index);

    // Adding HTML for image and title (with ellipsis in case of large titles)
    listItem.innerHTML = `
      <div class='image-list_image'>
        <img src=${url}>
      </div>
      <div class='image-list_title'>
      </div>
    `;

    imageList.append(listItem);
  });

  setTitles();

  // Creating an image element and appending it to the image box
  const imageContainer = document.createElement("img");
  const imageBox = document.querySelector("#image-box_image");
  imageBox.append(imageContainer);

  // Initially setting the very first image as the default active image
  setImage(document.querySelectorAll(".image-list_item")[0]);
};

loadPictures();

// Adding event listener to set ellipsis in titles as window resizes
window.addEventListener("resize", setTitles);

// Adding event listener to each selection list item
const imageListItems = document.querySelectorAll(".image-list_item");
imageListItems.forEach((item) => {
  item.addEventListener("click", function () {
    removeActive();
    setImage(this);
  });
});

// Adding event listener to enable keypress functionality
document.addEventListener("keydown", (event) => {
  if (event.code == "ArrowDown") {
    let index = removeActive();
    index = (index + 1) % imageListItems.length;

    setImage(imageListItems[index]);
  } else if (event.code == "ArrowUp") {
    let index = removeActive();
    index = (index - 1 + imageListItems.length) % imageListItems.length;

    setImage(imageListItems[index]);
  }
});
