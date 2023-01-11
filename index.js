function addWish() {
  const name = document.getElementById("wish-name").value;
  const item = document.getElementById("wish-input").value;
  const ul = document.getElementById("wish-items");
  const li = document.createElement("li");
  const p = document.createElement("p");
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "REMOVE";
  p.textContent = name + " wishes for " + item;
  li.append(p, removeBtn);

  removeBtn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    localStore();
  });
  ul.append(li);
  document.getElementById("wish-input").value = "";
  localStore();
}

const button = document.getElementById("wish-button");
button.addEventListener("click", () => {
  addWish();
});

function localStore() {
  let list = document.querySelectorAll("li");
  let storedList = [];
  list.forEach((li) => {
    storedList.push({
      text: li.firstChild.textContent,
    });
  });
  localStorage.setItem("isTask", JSON.stringify(storedList));
}

function getWish() {
  const storedItem = JSON.parse(localStorage.getItem("isTask"));
  if (storedItem) {
    storedItem.forEach((task) => {
      const ul = document.getElementById("wish-items");
      const li = document.createElement("li");
      const p = document.createElement("p");
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "REMOVE";
      p.textContent = task.text;
      li.append(p, removeBtn);
      ul.append(li);

      removeBtn.addEventListener("click", (e) => {
        e.target.parentElement.remove();
        localStore();
      });
    });
  }
}
document.getElementById("wish-input").value = "";
localStore();

window.addEventListener("load", () => {
  getWish();
});

window.onload = function () {
  function myAudio() {
    const audio = document.getElementById("audio");
    audio.play();
  }

  document.getElementById("audio").addEventListener("click", myAudio);
};
