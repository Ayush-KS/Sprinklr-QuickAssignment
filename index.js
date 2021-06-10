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

const setImage = function (url) {
  const imageContainer = document.querySelector("#image-box img");
  imageContainer.setAttribute("src", url);
};

const loadPictures = function () {
  const imageList = document.querySelector("#image-list");
  data.forEach(({ previewImage: url, title }) => {
    const listItem = document.createElement("li");
    listItem.classList.add("image-list_item");

    listItem.innerHTML = `
      <div class='image-list_image'>
        <img src=${url}>
      </div>
      <div class='image-list_title'> ${title} </div>
    `;

    // const previewImage = document.createElement("img");
    // previewImage.classList.add("image-list_image");
    // const imageTitle = document.createElement("p");
    // imageTitle.classList.add("image-list_title");

    // previewImage.setAttribute("src", url);
    // imageTitle.textContent = title;

    // listItem.append(previewImage);
    // listItem.append(imageTitle);
    imageList.append(listItem);
  });
  const imageContainer = document.createElement("img");
  const imageBox = document.querySelector("#image-box");
  imageBox.append(imageContainer);

  //setImage(data[0].previewImage);
};

loadPictures();

const imageListItems = document.querySelectorAll(".image-list_item");

console.log(imageListItems);

imageListItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log(event);
  });
});
