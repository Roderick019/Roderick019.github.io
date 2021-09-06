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

 const numbers = [0, 1, 2, 3, 4]

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

const antiguoButtons = [
  {
    value: 'H',
    text: 'a'
  },
  {
    value: 'b',
    text: 'b'
  },
  {
    value: 'B',
    text: 'ba'
  },
  {
    value: 'c',
    text: 'c'
  },
  {
    value: 'C',
    text: 'ca'
  },
  {
    value: 'd',
    text: 'd'
  },
  {
    value: 'D',
    text: 'da'
  },
  {
    value: 'e',
    text: 'e'
  },
  {
    value: 'f',
    text: 'f'
  },
  {
    value: 'F',
    text: 'fa'
  },
  {
    value: 'g',
    text: 'g'
  },
  {
    value: 'G',
    text: 'ga'
  },
  {
    value: 'h',
    text: 'h'
  },
  {
    value: 'H',
    text: 'ha'
  },
  {
    value: 'i',
    text: 'i'
  },
  {
    value: 'j',
    text: 'j'
  },
  {
    value: 'J',
    text: 'ja'
  },
  {
    value: 'k',
    text: 'k'
  },
  {
    value: 'K',
    text: 'ka'
  },
  {
    value: 'l',
    text: 'l'
  },
  {
    value: 'L',
    text: 'la'
  },
  {
    value: 'm',
    text: 'm'
  },
  {
    value: 'M',
    text: 'ma'
  },
  {
    value: 'n',
    text: 'n'
  },
  ,
  {
    value: 'N',
    text: 'na'
  },
  {
    value: 'o',
    text: 'o'
  },
  {
    value: 'p',
    text: 'p'
  },
  {
    value: 'P',
    text: 'pa'
  },
  {
    value: 'q',
    text: 'q'
  },
  {
    value: 'Q',
    text: 'qa'
  },
  {
    value: 'r',
    text: 'r'
  },
  {
    value: 'R',
    text: 'ra'
  },
  {
    value: 's',
    text: 's'
  },
  {
    value: 'S',
    text: 'sa'
  },
  {
    value: 't',
    text: 't'
  },
  {
    value: 't',
    text: 'ta'
  },
  {
    value: 'u',
    text: 'u'
  },
  {
    value: 'v',
    text: 'v'
  },
  {
    value: 'V',
    text: 'va'
  },
  {
    value: 'w',
    text: 'w'
  },
  {
    value: 'W',
    text: 'wa'
  },
  {
    value: 'x',
    text: 'x'
  },
  {
    value: 'X',
    text: 'xa'
  },
  {
    value: 'y',
    text: 'y'
  },
  {
    value: 'Y',
    text: 'ya'
  },
  {
    value: 'z',
    text: 'z'
  },
  {
    value: 'Z',
    text: 'za'
  }
]