# Character Remover

This library has the purpose of treating strings by removing or replacing, in a generic or specific way, characters that are within the UTF-8 standard.

## Use

```javascript
const CharacterRemover = require('character-remover') 
```

## Features

The library has the following features:

```javascript
  /*
    Name: removeAccents
    Description: Removes all accents from a string.
    Parameter: text = 'áàâãäéèêëíìïîóòôõöúûùüçñÁÀÂÃÄÉÊÈËÍÌÏÎÓÒÔÕÖÚÛÙÜÇÑ'
    Output: 'aaaaaeeeeiiiiooooouuuucnAAAAAEEEEIIIIOOOOOUUUUCN'
  */
  removeAccents (text)

  /*
    Name: removeAll
    Description: Removes all special characters from a string.
    Parameter: text = '  ]-{&  } --- //          %   [~ Hello *-*. How {[ are you?'
    Output: 'HelloHowareyou'
  */
  removeAll (text)

  /*
    Name: removeOnly
    Description: Removes only selected special characters from a string.
    Parameter 1: text = 'Hello *-*. How are you?'
    Parameter 2: chars = ['*', '-']
    Output: 'Hello . How are you?'
  */
  removeOnly (text, chars = [])

  /*
    Name: removeExcept
    Description: Removes all the special characters except the selected ones from a string.
    Parameter 1: text = '  ]-{&  } --- //          %   [~ Hello *-*. How {[ are you?'
    Parameter 2: chars = ['?', '.', ' ']
    Output: '                    Hello . How  are you?'
  */
  removeExcept (text, chars = [])

  /*
    Name: removeExtraSpaces
    Description: Removes all extra spaces from a string.
    Parameter: text = '                    Hello.                How are      you?'
    Output: 'Hello. How are you?'
  */
  removeExtraSpaces (text)
```

# License

MIT
