const greet = (name) => {
  if(name === null) {
    return 'Hello there!';
  } else if(Array.isArray(name)) {
    let string = 'Hello';
    name.forEach(element => string += ',' + element);
    return string;
  } else if(name === name.toUpperCase()) {
    return `HELLO ${name}!`;
  } else {
    return `Hello, ${name}`;
  }
};

module.exports = greet;