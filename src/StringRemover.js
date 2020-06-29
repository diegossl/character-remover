const Validator = require('./Validator')
const { 
  hexadecimalAccentsMap,
  specialCharactersMaps,
  completeAlphabet
} = require('./CharacterMaps')

module.exports = {

  removeAccents (text) {
    if (text) {
      for (let char in hexadecimalAccentsMap ) {
        let regex = hexadecimalAccentsMap[char]
        text = text.replace(regex, char)
      }
      return text
    }
    return null
  },

  removeAll (text) {
    if (text) {
      for (let char in specialCharactersMaps ) {
        let regex = specialCharactersMaps[char]
        text = text.replace(regex, "")
      }
      return text
    }
    return null
  },

  removeOnly (text, chars = []) {
    if (text && chars.length > 0) {
      for (let char in chars) {
        let validatedChar = Validator.validate(chars[char])
        let regex = new RegExp(validatedChar, "g")
        text = text.replace(regex, "")
      }
      return text
    }
    return null
  },

  removeExcept (text, chars = []) {
    if (text && chars.length > 0) {
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
    return null
  },

  removeExtraSpaces (text) {
    if (text) {
      text = text.trim().split(" ")
      var newText = text.filter(function(item, i) {
        if (item != " ") {
          text.slice(i, 1)
        }
        return item
      }).join(" ")
      return newText
    }
    return null
  }

}