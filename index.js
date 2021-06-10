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

// Loads thumbnails and details in the selection box
const loadPictures = function () {
  const imageList = document.querySelector("#image-list");

  data.forEach(({ previewImage: url, title }, index) => {
    const listItem = document.createElement("li");

    // Adding class, and custom attributes(url, title, index)
    listItem.classList.add("image-list_item");
    listItem.setAttribute("image-url", url);
    listItem.setAttribute("image-title", title);
    listItem.setAttribute("index", index);

    // Adding ellipsis for large titles
    if (title.length > 30) {
      title = title.slice(0, 12) + "..." + title.slice(title.length - 12);
    }

    // Adding HTML for image and title
    listItem.innerHTML = `
      <div class='image-list_image'>
        <img src=${url}>
      </div>
      <div class='image-list_title'> ${title} </div>
    `;

    imageList.append(listItem);
  });

  // Creating an image element and appending it to the image box
  const imageContainer = document.createElement("img");
  const imageBox = document.querySelector("#image-box_image");
  imageBox.append(imageContainer);

  // Initially setting the very first image as the default active image
  setImage(document.querySelectorAll(".image-list_item")[0]);
};

loadPictures();

// Adding event lister to each selection list item
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
