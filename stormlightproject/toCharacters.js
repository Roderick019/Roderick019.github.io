const characters = ['A','B','CH','D', 'E','F','G','H','I','J','K','L','M','N','O','P','R','S','SH','T','TH','U','V','Y','Z'];


function createButtons(){
  const grid = document.getElementById("grid-buttons");

  grid.append(createButton('SPACE', ' ', '[ ]', 'SPACE'));

  characters.forEach(char => {
    const button = createButton(char, char, char, char);
    grid.append(button);
  });
}

function createButton(nameURL, buttonSymbolAttr, innerHTML, className){
  const img = document.createElement("img");
  img.src = "imgs/" + nameURL + ".svg"
  img.setAttribute('button-symbol', buttonSymbolAttr);
  img.className = 'button-symbol-image ' + className;

  const label =  document.createElement("label");
  label.setAttribute("for", 'button-symbol-label ' + buttonSymbolAttr);
  label.className = 'button-symbol-label ' + className;
  label.setAttribute('button-symbol', buttonSymbolAttr);
  label.innerHTML = innerHTML;

  const button = document.createElement("button");
  button.className = 'button-symbol ' + className;
  button.setAttribute('button-symbol', buttonSymbolAttr);
  button.onclick = printWord;
  button.append(img);
  button.append(label);

  return button;
}

function printWord(event){
  const test = event.target;
  const attribute = test.getAttribute('button-symbol');
  const printWord = document.getElementById('words-container');
  const newText = (printWord.innerHTML + attribute).toLowerCase(); 

  printWord.innerHTML = newText[0].toUpperCase()+newText.slice(1); ;
}

$( document ).ready(function() {
  createButtons();
});