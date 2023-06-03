let itm = document.querySelectorAll(".item");
let img = document.querySelectorAll("img");

let count = [];
let index = [];
const enable = (item, i) => {
  img[i].style.display = "block";
  if (index.length === 2) {
    if (img[index[0]].src === img[index[1]].src) {
      setTimeout(() => {
        itm[index[0]].innerHTML = "COMPLETED";
        itm[index[0]].style.backgroundColor = "Lightgreen";
        itm[index[1]].innerHTML = "COMPLETED";
        itm[index[1]].style.backgroundColor = "Lightgreen";
        count = [];
        index = [];
        alert("congo matched");
      }, 500);
    } else {
      setTimeout(() => {
        img[index[0]].style.display = "none";
        img[index[1]].style.display = "none";
        count = [];
        index = [];
        alert("try again");
      }, 500);
    }
  }
};

itm.forEach((item, i) => {
  item.addEventListener("click", () => {
    if (
      !count.includes(item) &&
      count.length !== 2 &&
      itm[i].innerHTML !== "COMPLETED"
    ) {
      count.push(item);
      index.push(i);
      enable(item, i);
    }
  });
});
function resetButton() {
  itm.forEach((item, i) => {
    if (item.innerHTML === "COMPLETED") {
      item.innerHTML = "";
      item.appendChild(img[i]);
      img[i].style.display = "none";
      item.style.backgroundColor = "yellow";
    }
  });

  try {
    let len = Math.floor(Math.random() * img.length);

    for (let i = 0; i < img.length; i++) {
      img[i].src = img[len].src;

      len--;
    }
  } catch (error) {
    console.log("reset done");
  }
}
