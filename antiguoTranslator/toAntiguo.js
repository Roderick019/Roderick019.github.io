const aRegex = /[àáäã]/ig
const eRegex = /[èéë]/ig
const iRegex = /[ìíï]/ig
const oRegex = /[òóöõ]/ig
const uRegex = /[ùúü]/ig
const yRegex = /[ÿý]/ig
const ñRegex = /[ñ]/ig
const çRegex = /[ç]/ig

const regexSpecialCharacters = [
  {
    regex: aRegex,
    replace: 'a'
  },
  {
    regex: eRegex,
    replace: 'e'
  },
  {
    regex: iRegex,
    replace: 'i'
  },
  {
    regex: oRegex,
    replace: 'o'
  },
  {
    regex: uRegex,
    replace: 'u'
  },
  {
    regex: yRegex,
    replace: 'y'
  },
  {
    regex: ñRegex,
    replace: 'ñ'
  },
  {
    regex: çRegex,
    replace: 'c'
  }
 ]

const knowCases = 
  {
    agua: 'HiW',
    argumento: 'Hrugumentu',
    capitulo: 'Cpitoru',
    mujer: 'DoN',
    aire: 'Er',
    espacio: 'esPi',
    fuego: 'fok',
    hombre: 'hom',
    indice: 'inodex',
    alkaesto: 'OtoseHkL',
    personajes: 'puerusoNtujes',
    abrir: 'rirubo',
    templo: 'erupmet',
    tierra: 'tera'
  }

const vowelA = 'H'

function transcribeFromInput(){
  const inputValue = $("#text-input")[0].value.toLowerCase();
  const span = $('#antiguo-from-spanish')[0]

  let procededText = inputValue

  procededText = this.replaceLettersWithSimbols(procededText)

  procededText = this.replaceKnowCases(procededText)

  procededText = this.replaceConstantsWithA(procededText)

  span.innerHTML = procededText;
  console.log(procededText)
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