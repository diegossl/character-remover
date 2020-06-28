const { 
  hexadecimalAccentsMap,
  specialCharactersMaps,
  RegexReservedChars
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

  removeOnly (text, chars =[]) {
    for (let char in chars) {
      var oldChar = chars[char]
      oldChar = `${oldChar}`
      if (RegexReservedChars.indexOf(oldChar) > -1) {
        oldChar = `\\${oldChar}`
      }
      let regex = new RegExp(oldChar, "g")
      text = text.replace(regex, "")
    }
    return text
  },

  removeExcept (text, chars = []) {
    for (let char in chars) {
      var oldChar = chars[char]
      oldChar = `${oldChar}`
      if (RegexReservedChars.indexOf(oldChar) > -1) {
        oldChar = `\\${oldChar}`
      }
      let regex = new RegExp(oldChar, "g")
      text = text.replace(regex, "")
    }
    return text
  }

}