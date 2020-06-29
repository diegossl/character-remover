const Validator = require('./Validator')
const { 
  hexadecimalAccentsMap,
  specialCharactersMaps,
  completeAlphabet
} = require('./CharacterMaps')

module.exports = {

  removeAccents (text) {
    for (let char in hexadecimalAccentsMap ) {
      let regex = hexadecimalAccentsMap[char]
      text = text.replace(regex, char)
    }
    return text
  },

  removeAll (text) {
    for (let char in specialCharactersMaps ) {
      let regex = specialCharactersMaps[char]
      text = text.replace(regex, "")
    }
    return text
  },

  removeOnly (text, chars = []) {
    for (let char in chars) {
      let validatedChar = Validator.validate(chars[char])
      let regex = new RegExp(validatedChar, "g")
      text = text.replace(regex, "")
    }
    return text
  },

  removeExcept (text, chars = []) {
    const testRegex = new RegExp(completeAlphabet)
    var specialChars = []

    for (var key in text) {
      if (chars.indexOf(text[key]) === -1 && !testRegex.test(text[key])) {
        specialChars.push(text[key])
      }
    }
    for (let char in specialChars) {
      let validatedChar = Validator.validate(specialChars[char])
      let regex = new RegExp(validatedChar, "g")
      text = text.replace(regex, "")
    }
    return text
  }

}