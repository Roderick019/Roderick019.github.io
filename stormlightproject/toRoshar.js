$( document ).ready(function() {
  transcribe('Hello world');
  $('.char-to-roshar-title').on('click', showToWomensWriting);
  $('.roshar-to-char-title').on('click', showToLatinWriting);
});

function transcribe(text){
  const paragraphs = text.toUpperCase().split('\n');
  const imageContainer = $("#image-container")[0];
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

function changeImageWidth(newWidth) {
  $('.character').css('width', newWidth.concat('%'));
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
  const imageContainer = $("#image-container")[0];
  
  imageContainer.append(paragraph);
}

function showToWomensWriting(){
  $('#roshar-to-char').hide();
  $('#char-to-roshar').show();
}

function showToLatinWriting(){
  $('#char-to-roshar').hide();
  $('#roshar-to-char').show();
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
    const inputValue = $("#text-input")[0].value;
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
      elementToAppend = createDiv("special-case", element);
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
  img.setAttribute('style', "width:"+$('.slider').val()+"%");

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

