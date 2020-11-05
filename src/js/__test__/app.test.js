import Validator from '../app';

test('correct name1', () => {
  const result = new Validator('Ivan_Deamon').validateUsername();

  expect(result).toBe('Ivan_Deamon');
});

test('incorrect name1 ', () => {
  const result = new Validator('21-Ivan_Demon').validateUsername();

  expect(result).toBe('Invalid name format!!!');
});

test('incorrect name2', () => {
  const result = new Validator('Ivan_Demon-007').validateUsername();

  expect(result).toBe('Invalid name format!!!');
});

test('incorrect name3', () => {
  const result = new Validator('Ivan_Demon_2005').validateUsername();

  expect(result).toBe('Invalid name format!!!');
});

test('incorrect name4', () => {
  const result = new Validator('-Ivan_Demon').validateUsername();

  expect(result).toBe('Invalid name format!!!');
});

