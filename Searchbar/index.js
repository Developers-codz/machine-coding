const cardWrapper = document.querySelector(".card-wrapper");
const inputbox = document.querySelector(".inputbox");
var totalData = [];

inputbox.addEventListener("input", onChangeHandler);

function onChangeHandler(e) {
  let inputValue = e.target.value;
  console.log("inputValue", inputValue.toLowerCase());
  console.log("totalData", totalData);
  const newData = totalData.filter((el) =>
    el.firstName.toLowerCase().includes(inputValue.toLowerCase())
  );
  console.log("newData", newData);
  callCardMaker(newData);
}
fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((res) => {
    console.log(res.users);
    totalData = res.users;
    callCardMaker(res.users);
  });

function callCardMaker(data) {
  for (let i = 0; i < data.length; i++) {
    let card = document.createElement("div");
    card.innerText = data[i].firstName + " " + data[i].lastName;
    card.classList.add("card");
    cardWrapper.appendChild(card);
  }
}
