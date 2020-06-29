const test = require('tape')
const StringRemover = require('../index')
const stringRemover = require('../index')

test('Test to remove all accents', function (s) {
  let input = 'áàâãäéèêëíìïîóòôõöúûùüçñÁÀÂÃÄÉÊÈËÍÌÏÎÓÒÔÕÖÚÛÙÜÇÑ'
	let output = StringRemover.removeAccents(input)
	let expected = 'aaaaaeeeeiiiiooooouuuucnAAAAAEEEEIIIIOOOOOUUUUCN'

	s.same(output, expected)
	s.end()
})

test('Test with null entry to remove all accents', function (s) {
  let input = ''
	let output = StringRemover.removeAccents(input)
	let expected = null

	s.same(output, expected)
	s.end()
})

test('Test to remove all special characters', function (s) {
  let input = '  ]-{&  } --- //          %   [~ Olá *-*. Tudo {[ bem?'
	let output = StringRemover.removeAll(input)
	let expected = 'OláTudobem'

	s.same(output, expected)
	s.end()
})

test('Test with null entry to remove all special characters', function (s) {
  let input = ''
	let output = StringRemover.removeAll(input)
	let expected = null

	s.same(output, expected)
	s.end()
})

test('Test to remove only selected special characters', function (s) {
  let input = 'Olá *-*. Tudo bem?'
	let output = StringRemover.removeOnly(input, ['*', '-'])
	let expected = 'Olá . Tudo bem?'

	s.same(output, expected)
	s.end()
})

test('Test with null entry to remove only selected special characters', function (s) {
  let input = ''
	let output = StringRemover.removeOnly(input, ['*', '-'])
	let expected = null

	s.same(output, expected)
	s.end()
})

test('Test to remove only special characters without selecting them', function (s) {
  let input = ''
	let output = StringRemover.removeOnly(input, [])
	let expected = null

	s.same(output, expected)
	s.end()
})

test('Test to remove all special characters except the selected ones', function (s) {
	let input = '  ]-{&  } --- //;          %   [~ Olá *-*. Tudo {[ bem?'
  let output = stringRemover.removeExcept(input, ['?', '.', ' '])
	let expected = '                    Olá . Tudo  bem?'

	s.same(output, expected)
	s.end()
})

test('Test with null entry to remove all special characters except selected ones', function (s) {
	let input = ''
	let output = stringRemover.removeExcept(input, ['?', '.', ' '])
	let expected = null

	s.same(output, expected)
	s.end()
})

test('Test to remove all special characters except the selected ones, without selecting them', function (s) {
	let input = '  ]-{&  } --- //;          %   [~ Olá *-*. Tudo {[ bem?'
  let output = stringRemover.removeExcept(input, [])
	let expected = null

	s.same(output, expected)
	s.end()
})

test('Test to remove all extra spaces', function (s) {
	let input = '                    Olá.                Tudo      bem?'
  let output = stringRemover.removeExtraSpaces(input)
	let expected = 'Olá. Tudo bem?'

	s.same(output, expected)
	s.end()
})

test('Test with null entry to remove all extra spaces', function (s) {
	let input = ''
  let output = stringRemover.removeExtraSpaces(input)
	let expected = null

	s.same(output, expected)
	s.end()
})


