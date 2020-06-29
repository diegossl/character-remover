const test = require('tape')
const StringRemover = require('../index')
const stringRemover = require('../index')

test('Remove all accents', function (s) {
  let input = 'áàâãäéèêëíìïîóòôõöúûùüçñÁÀÂÃÄÉÊÈËÍÌÏÎÓÒÔÕÖÚÛÙÜÇÑ'
	let output = StringRemover.removeAccents(input)
	let expected = 'aaaaaeeeeiiiiooooouuuucnAAAAAEEEEIIIIOOOOOUUUUCN'

	s.same(output, expected)
	s.end()
})

test('Remove all special characters', function (s) {
  let input = '  ]-{&  } --- //          %   [~ Olá *-*. Tudo {[ bem?'
	let output = StringRemover.removeAll(input)
	let expected = 'OláTudobem'

	s.same(output, expected)
	s.end()
})

test('Remove only a few special characters', function (s) {
  let input = 'Olá *-*. Tudo bem?'
  let output = StringRemover.removeOnly(input, ['*', '-'])
	let expected = 'Olá . Tudo bem?'

	s.same(output, expected)
	s.end()
})

test('Remove all special characters except', function (s) {
	let input = '  ]-{&  } --- //;          %   [~ Olá *-*. Tudo {[ bem?'
  let output = stringRemover.removeExcept(input, ['?', '.', ' '])
	let expected = '                    Olá . Tudo  bem?'

	s.same(output, expected)
	s.end()
})

test('Remove extra spaces', function (s) {
	let input = '                    Olá.                Tudo      bem?'
  let output = stringRemover.removeExtraSpaces(input)
	let expected = 'Olá. Tudo bem?'

	s.same(output, expected)
	s.end()
})

