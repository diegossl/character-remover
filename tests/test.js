const test = require('tape')
const StringRemove = require('../index')

test('Remove all accents', function (s) {
  let input = 'ëËéÉèÈêÊçÇ'
	let output = StringRemove.removeAccents(input)
	let expected = 'eEeEeEeEcC'

	s.same(output, expected)
	s.end()
})

test('Remove all special characters', function (s) {
  let input = '    %   [~ Olá *-*. Tudo {[ bem?'
	let output = StringRemove.removeAll(input)
	let expected = 'OláTudobem'

	s.same(output, expected)
	s.end()
})

test('Remove only a few special characters', function (s) {
  let input = 'Olá *-*. Tudo bem?'
  let output = StringRemove.removeOnly(input, ['*', '-'])
	let expected = 'Olá . Tudo bem?'

	s.same(output, expected)
	s.end()
})

test('Remove all special characters except', function (s) {
  let input = 'Olá *-*. Tudo bem?'
  let output = StringRemove.removeExcept(input, ['-', '.', ' ', '?'])
	let expected = 'Olá -. Tudo bem?'

	s.same(output, expected)
	s.end()
})

