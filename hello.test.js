const greet = require('./hello');

describe('test greet()', () => {
  it('should return a string with a name', () => {
    expect(greet('Elizabeth')).toBe('Hello, Elizabeth');
  });
  it('should return a string with null name', () => {
    expect(greet(null)).toBe('Hello there!');
  });
  it('should return an uppercase string', () => {
    expect(greet('JOSE')).toBe('HELLO JOSE!');
  });
  it('should return a string with two names', () => {
    expect(greet(['Jose', 'Pep'])).toBe('Hello,Jose,Pep');
  });
  it('should return a string with multiple names', () => {
    expect(greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toBe('Hello,Alex,Arsene,Jose,Zidane');
  });
});