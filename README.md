# Removedor de Strings especiais

Essa bibliteca, escrita em JavaScript, tem a finalizade de tratar strings removendo ou subistituindo caracteres específicos ou genericos que estejam dentro do padrão UTF-8 (Hexadecimal).

## Features

A biblioteca possui 5 métodos, que são:

```javascript
  /*
    Nome: removeAccents
    Descrição: Remove todos os acentos de uma string.
    parametro: text = 'áàâãäéèêëíìïîóòôõöúûùüçñÁÀÂÃÄÉÊÈËÍÌÏÎÓÒÔÕÖÚÛÙÜÇÑ'
    saída: 'aaaaaeeeeiiiiooooouuuucnAAAAAEEEEIIIIOOOOOUUUUCN'
  */
  removeAccents (text)

  /*
    Nome: removeAll
    Descrição: Remove todos os caracteres especiais de uma string.
    parametro: text = '  ]-{&  } --- //          %   [~ Olá *-*. Tudo {[ bem?'
    saída: 'OláTudobem'
  */
  removeAll (text)

  /*
    Nome: removeOnly
    Descrição: Remove de uma string somente os caracteres especiais selecionados.
    parametro 1: text = 'Olá *-*. Tudo bem?'
    parametro 2: chars = ['*', '-']
    saída: 'Olá . Tudo bem?'
  */
  removeOnly (text, chars = [])

  /*
    Nome: removeExcept
    Descrição: Remove de uma string todos os caracteres especiais, exceto os selecionados.
    parametro 1: text = '  ]-{&  } --- //;          %   [~ Olá *-*. Tudo {[ bem?'
    parametro 2: chars = ['?', '.', ' ']
    saída: '                    Olá . Tudo  bem?'
  */
  removeExcept (text, chars = [])

  /*
    Nome: removeExtraSpaces
    Descrição: Remove todos os espaços extras de uma string.
    parametro: text = '                    Olá.                Tudo      bem?'
    saída: 'Olá. Tudo bem?'
  */
  removeExtraSpaces (text)
```

# Licença

MIT
