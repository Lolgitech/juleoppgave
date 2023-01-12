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
function myAudio() {
  audio.play();
}

document.getElementById("wish-name").addEventListener("focus", myAudio);


/*
const nameInput = document.querySelector('.wish-name'); // Select the name input
const nameDisplay = document.querySelector('.name-display'); // Select the name display

nameInput.addEventListener('input', e => {
    nameDisplay.textContent = e.target.value; 

});*/




/*const saveBtn = document.querySelector(".save-btn"); // Select the save button
saveBtn.addEventListener("click", () => {
  const name = document.querySelector(".wish-name").value; // Get the current name value
  const wishItems = document.querySelectorAll(".wish-items li"); // Get all the wish items

  // Convert the wish items to an array
  const wishes = Array.from(wishItems).map((item) => item.textContent);
  localStorage.setItem("name", name); // Save the name in local storage
  localStorage.setItem("wishes", JSON.stringify(wishes)); // Save the wish items in local storage
});

html : <div id="wish">
  <input class="wish-input" placeholder="Enter a wish" />
  <button class="wish-button">Add Wish</button>
  <button class="save-btn">Save</button> <!-- Save button -->
  <ul class="wish-items"></ul>
</div>
<div class="saved-data">
  <p>Saved Name: <span id="saved-name"></span></p>
  <p>Saved Wishes: <span id="saved-wishes"></span></p>
</div>

*/
