const { RegexReservedChars } = require('./CharacterMaps')

exports.validate = (char) => {
  if (RegexReservedChars.indexOf(char) > -1) {
    return `\\${char}`
  }
  return char
}