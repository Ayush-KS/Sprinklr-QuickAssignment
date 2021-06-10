const data = [
  {
    previewImage:
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "cat.jpeg",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "cooking couple shoot portofilio(1).jpg",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "bali-kelingking-beach-plastic-removal-drive.key",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "NextByk Investor Pitch 2021.ppt",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    title: "interns-performance-report-june-2021.key",
  },
];

const removeActive = function () {
  const activeItem = document.querySelector(".image-list_item.active");
  activeItem.classList.remove("active");
  return parseInt(activeItem.getAttribute("index"));
};

const setImage = function (listItem) {
  listItem.classList.add("active");
  const url = listItem.getAttribute("image-url");
  const title = listItem.getAttribute("image-title");

  const imageContainer = document.querySelector("#image-box_image img");
  const imageTitleContainer = document.querySelector("#image-box_title");
  imageContainer.setAttribute("src", url);
  imageTitleContainer.textContent = title;
};

const loadPictures = function () {
  const imageList = document.querySelector("#image-list");
  data.forEach(({ previewImage: url, title }, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("image-list_item");
    listItem.setAttribute("image-url", url);
    listItem.setAttribute("image-title", title);
    listItem.setAttribute("index", index);

    listItem.innerHTML = `
      <div class='image-list_image'>
        <img src=${url}>
      </div>
      <div class='image-list_title'> ${title} </div>
    `;

    imageList.append(listItem);
  });
  const imageContainer = document.createElement("img");
  const imageBox = document.querySelector("#image-box_image");
  imageBox.append(imageContainer);

  setImage(document.querySelectorAll(".image-list_item")[0]);
};

loadPictures();

const imageListItems = document.querySelectorAll(".image-list_item");

imageListItems.forEach((item) => {
  console.log(item);
  item.addEventListener("click", function () {
    removeActive();
    setImage(this);
  });
});

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
