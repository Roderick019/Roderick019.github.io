$( document ).ready(function() {
  transcribe('Hello world');
});

function transcribe(text){
  const paragraphs = text.toUpperCase().split('\n');
  const imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = '';

  paragraphs.forEach(paragraph => {
    const charArray = paragraph.split('');
    
    if (paragraph.length == 0) {
      imageContainer.append(createDiv("paragraph-separator"));
      return;
    }

    renderParagraph(charArray);
  });
}

function renderParagraph(paragraphArray) {
  const finalArray = [];

  for(let i = 0; i < paragraphArray.length; i++){
    if((paragraphArray[i] == 'T' || paragraphArray[i] == 'S' || paragraphArray[i] == 'C') && 'H' == paragraphArray[i+1] ) {
      finalArray.push(paragraphArray[i]+'H');
      i++;
    } else {
      finalArray.push(cleanSpecialCase(paragraphArray[i]));
    }
  }

  const paragraph = createParagraph(finalArray);
  const imageContainer = document.getElementById("image-container");
  
  imageContainer.append(paragraph);
}

function cleanSpecialCase(char){
  switch(char){
    case 'Q':
      return 'K';
    case 'W':
      return 'V';
    case 'C':
      return 'K';
    case 'X':
      return 'H';
    default:
      return char;
  }
}

function transcribeFromInput(){
    const inputValue = document.getElementById("text-input").value;
    transcribe(inputValue);
}

function createParagraph(finalTextArray){
  const newParaph = document.createElement("div");
  newParaph.className = "paragraph";

  finalTextArray.forEach(element => {
    let elementToAppend;

    if(element == " ") { 
      elementToAppend = createImg('SPACE', 'character');
    }else if( isSpecialCharacter(element) ) {
      elementToAppend = createDiv("specialCase", element);
    } else {
      elementToAppend = createImg(element, 'character');
    }
    
    newParaph.append(elementToAppend);
  });

  return newParaph;
}

function isSpecialCharacter(character){
  return null === character.match(/[a-zA-Z]/i);
}

function createImg(element, className){
  const img = document.createElement("img");
  img.src = "imgs/" + element + ".svg"
  img.className = className + ' ' + element
  return img;
}

function createDiv(className, innerHTML){
  const div = document.createElement("div");
  div.className = className;
  if(innerHTML) {
    div.innerHTML = innerHTML;
  } 
  return div;
}

