import Validator from '../Validator';

test('validate success', () => {
  const name = new Validator('Napoleon');
  expect(name.validateUsername()).toBe('validation success');
});

test('validation !latin failed', () => {
  const name = new Validator('Наполеон');
  expect(name.validateUsername()).toBe('validation failed');
});

test('validation no more three failed', () => {
  const name = new Validator('Napo7777leon');
  expect(name.validateUsername()).toBe('validation failed');
});


test('validation dontSymbolsBefore failed', () => {
  const name = new Validator('77Napoleon');
  expect(name.validateUsername()).toBe('validation failed');
});


test('validation dontSymbolsAfter failed', () => {
  const name = new Validator('Napoleon-');
  expect(name.validateUsername()).toBe('validation failed');
});