// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
const content = document.getElementById("content");
const time = document.getElementById("time");
const form = document.getElementById("form");
const to_who = document.getElementById("to-who");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});

function validation() {
  validatContent(content.value);
  validatTime(time.value);
  validatTo_who(to_who.value);
}

function validatContent(value) {
  console.log(`Content value: ${value}`);
  //validat chak
  //if valid add good class
  addGoodToInput();
  //if notValid add bad class
  addErrToInput(/* input obj ,and err */);
}
function validatTime(value) {
  console.log(`time value: ${value}`);
  //validat chak
  let valid = true;
  //if valid add good class
  if (valid) {
    addGoodToInput();
  }
  if (!valid) {
    addErrToInput(/* input obj ,and err */);
  }

  //if notValid add bad class
}
function validatTo_who(value) {
  console.log(`to_who value: ${value}`);
  //validat chak
  //if valid add good class
  addGoodToInput();
  //if notValid add bad class
  addErrToInput(/* input obj ,and err */);
}

function addErrToInput(input, err) {
  //add remove display none from fa-xmark;
  //from input
  //and chaege the p to err
}
function addGoodToInput(input) {
  //add remove display none from fa-square-check;
  //from input
}
