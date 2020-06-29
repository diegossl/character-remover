const Validator = require('./Validator')
const { 
  hexadecimalAccentsMap,
  specialCharactersMaps,
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
      let regex = null
      let validatedChar = Validator.validate(chars[char])      
      regex = new RegExp(validatedChar, "g")
      text = text.replace(regex, "")
    }
    return text
  },

  removeExcept (text, chars = []) {
  }

}