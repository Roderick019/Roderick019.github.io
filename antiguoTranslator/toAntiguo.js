$( document ).ready(function() {
  printAntiguoNumbersButtons();
  printAntiguoLettersButtons();
});

function printAntiguoLettersButtons() {
  const grid = $('#antiguo-letters-grid')
  antiguoButtons.forEach(buttonInfo => {
    console.log('----start----')
    const button = document.createElement('button');
    button.className = 'antiguo-button'
    button.setAttribute('button-value', buttonInfo.value);
    button.setAttribute('button-text', buttonInfo.text);

    button.onclick = printLetter.bind(this);

    const antiguoSpan = document.createElement('span')
    antiguoSpan.innerHTML = buttonInfo.value;
    antiguoSpan.className = 'antiguo-font button-content button-content-antiguo'
    antiguoSpan.setAttribute('button-value', buttonInfo.value);
    antiguoSpan.setAttribute('button-text', buttonInfo.text);

    const letterSpan = document.createElement('span')
    letterSpan.innerHTML = buttonInfo.text;
    letterSpan.className = 'button-content button-content-letter'
    letterSpan.setAttribute('button-value', buttonInfo.value);
    letterSpan.setAttribute('button-text', buttonInfo.text);

    button.append(antiguoSpan)
    button.append(letterSpan)
    
    grid.append(button)
  })
}

function printAntiguoNumbersButtons() {
  const grid = $('#antiguo-numbers-grid')
  numbers.forEach(number => {
    const button = document.createElement('button');
    button.className = 'antiguo-button'
    button.setAttribute('button-value', number);
    button.onclick = printNumber.bind(this);

    const antiguoSpan = document.createElement('span')
    antiguoSpan.innerHTML = number;
    antiguoSpan.className = 'antiguo-font button-content button-content-antiguo'
    antiguoSpan.setAttribute('button-value', number);

    const letterSpan = document.createElement('span')
    letterSpan.innerHTML = number;
    letterSpan.className = 'button-content button-content-letter'
    letterSpan.setAttribute('button-value', number);

    button.append(antiguoSpan)
    button.append(letterSpan)
    grid.append(button)
  })
}

function printLetter(event) {
  const button = event.target
  const attribute = button.getAttribute('button-value')
  const text = button.getAttribute('button-text')

  const antiguoText = $('#antiguo-from-letter')
  antiguoText.text(antiguoText.text().concat(attribute))

  const normalText = $('#antiguo-from-letter-text')
  normalText.text(normalText.text().concat(text))
}

function cleanAntiguoToLetter() {
  const antiguoLetter = $('#antiguo-from-letter')
  antiguoLetter.text('')

  const letterTranslated = $('#antiguo-from-letter-text')
  letterTranslated.text('')
}

function cleanLastAntiguoToLetter() {
  const antiguoNumber = $('#antiguo-from-letter')
  const newValue = antiguoNumber.text().substring(0, antiguoNumber.text().length - 1);

  const lastChar = antiguoNumber.text()[antiguoNumber.text().length-1]
  let substringNormalLetters = 1
  if(lastChar === lastChar.toUpperCase()) {
    substringNormalLetters = 2
  }
  
  antiguoNumber.text(newValue)

  const numberTranslated = $('#antiguo-from-letter-text')
  numberTranslated.text(numberTranslated.text().substring(0, numberTranslated.text().length - substringNormalLetters))
}

function printNumber(event) {
  const button = event.target
  const attribute = button.getAttribute('button-value')
  const antiguoNumber = $('#antiguo-number')
  antiguoNumber.text(antiguoNumber.text().concat(attribute))

  const numberTranslated = $('#number-from-antiguo-number')
  console.log(antiguoNumber.text())
  numberTranslated.text(this.convertBase(antiguoNumber.text(), 5, 10))
}

function cleanAntiguoToNumber() {
  const antiguoNumber = $('#antiguo-number')
  antiguoNumber.text('')

  const numberTranslated = $('#number-from-antiguo-number')
  numberTranslated.text('0')
}

function cleanLastAntiguoToNumber() {
  const antiguoNumber = $('#antiguo-number')
  const newValue = antiguoNumber.text().substring(0, antiguoNumber.text().length - 1);
  antiguoNumber.text(newValue)

  const numberTranslated = $('#number-from-antiguo-number')
  numberTranslated.text(this.convertBase(newValue, 5, 10))
}

function transcribeTextFromInput(){
  const inputValue = $("#text-input-text")[0].value.toLowerCase();
  const span = $('#antiguo-from-spanish-text')[0]

  let procededText = inputValue

  procededText = this.replaceLettersWithSimbols(procededText)

  procededText = this.replaceKnowCases(procededText)

  procededText = this.replaceConstantsWithA(procededText)

  span.innerHTML = procededText;
  console.log(procededText)
}

function transcribeNumberFromInput(){
  const inputValue = $("#text-input-number")[0].value.toLowerCase();
  const spanNumber = $('#antiguo-from-spanish-number')[0]

  spanNumber.innerHTML = this.convertBase(inputValue, 10, 5);
}

function convertBase(value, from_base, to_base) {
  var range = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');
  var from_range = range.slice(0, from_base);
  var to_range = range.slice(0, to_base);
  
  var dec_value = value.split('').reverse().reduce(function (carry, digit, index) {
    if (from_range.indexOf(digit) === -1) throw new Error('Invalid digit `'+digit+'` for base '+from_base+'.');
    return carry += from_range.indexOf(digit) * (Math.pow(from_base, index));
  }, 0);
  
  var new_value = '';
  while (dec_value > 0) {
    new_value = to_range[dec_value % to_base] + new_value;
    dec_value = (dec_value - (dec_value % to_base)) / to_base;
  }
  return new_value || '0';
}

function replaceConstantsWithA(text) {
  let procededText = text

  while(procededText.indexOf('a') > -1) {
    const index = procededText.indexOf('a')

    if(index == 0) {
      procededText = vowelA + procededText.substring(1)
      continue
    }

    const prevChar = procededText[index-1]

    if("eiou".indexOf(prevChar) > 0 ) {
        procededText = procededText.substring(0, index) + vowelA + procededText.substring(index+1)
        continue
    }

    procededText = procededText.substring(0, index-1) + prevChar.toUpperCase() + procededText.substring(index+1)
  }

  return procededText
}

function replaceKnowCases(text) {
  let procededText = text

  for (var key in knowCases) {
    if(procededText.includes(key)) {
      procededText = procededText.replaceAll(key, knowCases[key])
    }
  }

  return procededText
}

function replaceLettersWithSimbols(text) {
  let procededText = text

  for (var index in regexSpecialCharacters) {
    const regexObject = regexSpecialCharacters[index]
    const checkRegex = procededText.match(regexObject.regex)

    if (checkRegex) {
      checkRegex.forEach(match => {
        procededText = text.replaceAll(match, regexObject.replace)
      });
    }
  }

  return procededText
}