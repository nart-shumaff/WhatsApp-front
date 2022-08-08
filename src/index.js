const content = document.getElementById('content');
const time = document.getElementById('time');
const form = document.getElementById('form');
const to_who = document.getElementById('to-who');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validation();
});

function validation() {
  validatContent();
  //validatTime();
  //validatTo_who();
}

function validatContent() {
  //
  const value = content.value;
  console.log(`Content value: ${value}`);
  //validat chak

  let validLength = value.length <= 8;
  let validNotEmpty = value.length !== 0;
  //if valid add "good" class
  console.log(`Content validLength: ${value.length}`);
  console.log(`Content validLength: ${validLength}`);
  if (validLength && validNotEmpty) {
    addGoodToInput(content);
    console.log(`Content value:valid`);
    //return true;
  } else if (!validNotEmpty) {
    //if notValid add "bad" class(!validLength)
    console.log(`Content value:not valid Empty`);
    addErrToInput(content, 'Content cant be empty');
    //return false;
  } else {
    console.log(`Content value:not valid langth`);
    addErrToInput(content, 'invalid langth, 8 or less');
  }
  // return
}
function validatTime() {
  const value = time.value;

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
  input.classList.add('input--err');
  input.classList.remove('input--');
  const elementMessage = document.getElementById(`${input.name}Message`);
  elementMessage.innerText = err;
  console.log(`${elementMessage.innerText}Message`);
  console.log(`the err m- ${err}`);
  //from input
  //and chaege the p to err
}

function addGoodToInput(input) {
  //add remove display none from fa-square-check;
  if (input.classList.contains('input--err')) {
    input.classList.remove('input--err');
  }
  const elementMessage = document.getElementById(`${input.name}Message`);
  elementMessage.innerText = '';
  console.log(`${elementMessage.innerText}Message`);

  //from input
}
