const name = login()

const person = () => {
  let name = hello {name}

  return (
    <div username="name">
      <h3> hello, {name}</h3>
</div>
  );

  
}



const wishList = [];

function addWish() {
  let item = document.getElementById("wish-input").value;
  wishList.push(item);
  displayWishes();
  document.getElementById("add-wish-form").reset();
}

function login() {
  let username = document.getElementById("login-username").value;
  document.getElementById("username").innerHTML = username;
  document.getElementById("login-form").style.display = "none";
  document.getElementById("wish-list").style.display = "block";
}
function displayWishes() {
  const list = "";
  for (const i = 0; i < wishList.length; i++) {
    list += "<li>" + wishList[i] + "</li>";
  }
  document.getElementById("wish-items").innerHTML = list;
}

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    login();
  });
document
  .getElementById("add-wish-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addWish();
  });
