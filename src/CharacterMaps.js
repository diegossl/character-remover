const hexadecimalAccentsMap = {
  a: /[\xE0-\xE6]/g,
  A: /[\xC0-\xC6]/g,
  e: /[\xE8-\xEB]/g,
  E: /[\xC8-\xCB]/g,
  i: /[\xEC-\xEF]/g,
  I: /[\xCC-\xCF]/g,
  o: /[\xF2-\xF6]/g,
  O: /[\xD2-\xD6]/g,
  u: /[\xF9-\xFC]/g,
  U: /[\xD9-\xDC]/g,
  c: /\xE7/g,
  C: /\xC7/g,
  n: /\xF1/g,
  N: /\xD1/g,
}

const specialCharactersMaps = [
  /\x40/g,
  /\x60/g,
  /[\x20-\x29]/g,
  /[\x2A-\x2F]/g,
  /[\x3A-\x3F]/g,
  /[\x20-\x29]/g,
  /[\x5B-\x5F]/g,
  /[\x5B-\x5F]/g,
  /[\x7B-\x7E]/g,
  /[\xA0-\xA9]/g,
  /[\xAA-\xAF]/g,
  /[\xB0-\xB9]/g,
  /[\xBA-\xBF]/g,
]

const RegexReservedChars = [
  '$',
  '^',
  '*',
  '(',
  ')',
  '+',
  '{',
  '}',
  '[',
  ']',
  '\\',
  '|',
  '?',
  '-',
  '.'
]

const completeAlphabet = /[A-Za-záàâãéèêëíìïîóòôõöúûùüçñÁÀÂÃÉÊÈËÍÌÏÎÓÒÔÕÖÚÛÙÜÇÑ]/

module.exports = { 
  hexadecimalAccentsMap,
  specialCharactersMaps,
  RegexReservedChars,
  completeAlphabet 
}