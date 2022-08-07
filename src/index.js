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
  let validLangth = value.langth <= 8;
  //if valid add "good" class
  if (validLangth) {
    addGoodToInput();
    console.log(`Content value:valid`);
  }
  //if notValid add "bad" class
  if (!validLangth) {
    console.log(`Content value:not valid`);
    addErrToInput(
      content,
      "invalid langth, 8 or less" /* input obj ,and err */
    );
  }
}
function validatTime(value) {
  console.log(`time value: ${value}`);
  //validat chak
  let valid = true;
  //if valid add "good" class
  if (valid) {
    addGoodToInput();
  }
  //if notValid add "bad" class
  if (!valid) {
    addErrToInput(/* input obj ,and err */);
  }
}
function validatTo_who(value) {
  console.log(`to_who value: ${value}`);
  //validat chak
  let valid = true;
  //if valid add "good" class
  if (valid) {
    addGoodToInput();
  }
  //if notValid add "bad" class
  if (!valid) {
    addErrToInput(/* input obj ,and err */);
  }
}

function addErrToInput(input, err) {
  //add remove display none from fa-xmark;
  input.classList.add("input--err");
  input.classList.remove("input--");
  console.log(`the err m- ${err}`);
  //from input
  //and chaege the p to err
}

function addGoodToInput(input) {
  //add remove display none from fa-square-check;
  //from input
}
