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
  let validTime = true;
  //if valid add "good" class
  if (validTime) {
    addGoodToInput(time);
  }
  //if notValid add "bad" class
  if (!validTime) {
    addErrToInput(/* input obj ,and err */);
  }
}
function validatTo_who() {
  const value = to_who.value;

  console.log(`to_who value: ${value}`);
  //validat chak
  let valid = true;
  //if valid add "good" class
  if (valid) {
    addGoodToInput(to_who);
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
  // elementCheck =  div with p or p i
  const elementCheck = document.getElementById(`${input.name}-check`);
  // if  elementCheck is not jast p then remove i`s
  if (elementCheck.childNodes.length > 1) {
    elementCheck.removeChild(elementCheck.lastChild);
  }
  // errIcon = i with class fa-xmark and fa-xmark
  const errIcon = document.createElement(`i`);
  errIcon.classList.add('fa-xmark', 'fa-xmark');
  elementCheck.appendChild(errIcon);
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
  // elementCheck div with p
  const elementCheck = document.getElementById(`${input.name}-check`);
  // if  elementCheck is not jast p then remove i`s
  if (elementCheck.childNodes.length > 1) {
    elementCheck.removeChild(elementCheck.lastChild);
  }
  // checkIcon = i with class fa-square-check and fa-xmark
  const checkIcon = document.createElement(`i`);
  checkIcon.classList.add('fa-solid', 'fa-square-check');
  elementCheck.appendChild(checkIcon);
  const elementMessage = document.getElementById(`${input.name}Message`);
  elementMessage.innerText = '';
  console.log(`${elementMessage.innerText}Message`);

  //from input
}
