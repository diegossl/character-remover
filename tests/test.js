const test = require('tape')
const CharacterRemover = require('../index')

test('Test to remove all accents', function (s) {
  let input = 'áàâãäéèêëíìïîóòôõöúûùüçñÁÀÂÃÄÉÊÈËÍÌÏÎÓÒÔÕÖÚÛÙÜÇÑ'
	let output = CharacterRemover.removeAccents(input)
	let expected = 'aaaaaeeeeiiiiooooouuuucnAAAAAEEEEIIIIOOOOOUUUUCN'

	s.same(output, expected)
	s.end()
})

test('Test with null entry to remove all accents', function (s) {
  let input = ''
	let output = CharacterRemover.removeAccents(input)
	let expected = null

	s.same(output, expected)
	s.end()
})

test('Test to remove all special characters', function (s) {
  let input = '  ]-{&  } --- //          %   [~ Olá *-*. Tudo {[ bem?'
	let output = CharacterRemover.removeAll(input)
	let expected = 'OláTudobem'

	s.same(output, expected)
	s.end()
})

test('Test with null entry to remove all special characters', function (s) {
  let input = ''
	let output = CharacterRemover.removeAll(input)
	let expected = null

	s.same(output, expected)
	s.end()
})

test('Test to remove only selected special characters', function (s) {
  let input = 'Olá *-*. Tudo bem?'
	let output = CharacterRemover.removeOnly(input, ['*', '-'])
	let expected = 'Olá . Tudo bem?'

	s.same(output, expected)
	s.end()
})

test('Test with null entry to remove only selected special characters', function (s) {
  let input = ''
	let output = CharacterRemover.removeOnly(input, ['*', '-'])
	let expected = null

	s.same(output, expected)
	s.end()
})

test('Test to remove only special characters without selecting them', function (s) {
  let input = ''
	let output = CharacterRemover.removeOnly(input, [])
	let expected = null

	s.same(output, expected)
	s.end()
})

test('Test to remove all special characters except the selected ones', function (s) {
	let input = '  ]-{&  } --- //;          %   [~ Olá *-*. Tudo {[ bem?'
  let output = CharacterRemover.removeExcept(input, ['?', '.', ' '])
	let expected = '                    Olá . Tudo  bem?'

	s.same(output, expected)
	s.end()
})

test('Test with null entry to remove all special characters except selected ones', function (s) {
	let input = ''
	let output = CharacterRemover.removeExcept(input, ['?', '.', ' '])
	let expected = null

	s.same(output, expected)
	s.end()
})

test('Test to remove all special characters except the selected ones, without selecting them', function (s) {
	let input = '  ]-{&  } --- //;          %   [~ Olá *-*. Tudo {[ bem?'
  let output = CharacterRemover.removeExcept(input, [])
	let expected = null

	s.same(output, expected)
	s.end()
})

test('Test to remove all extra spaces', function (s) {
	let input = '                    Olá.                Tudo      bem?'
  let output = CharacterRemover.removeExtraSpaces(input)
	let expected = 'Olá. Tudo bem?'

	s.same(output, expected)
	s.end()
})

test('Test with null entry to remove all extra spaces', function (s) {
	let input = ''
  let output = CharacterRemover.removeExtraSpaces(input)
	let expected = null

	s.same(output, expected)
	s.end()
})


