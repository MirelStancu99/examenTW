function textProcessor(input, tokens) {
    if (typeof input !== 'string') {
      throw new Error('Input should be a string');
    }
  
    if (input.length < 6) {
      throw new Error('Input should have at least 6 characters');
    }
  
    if (!Array.isArray(tokens)) {
      throw new Error('Invalid array format');
    }
  
    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];
  
      if (!token.hasOwnProperty('tokenName') || !token.hasOwnProperty('tokenValue')) {
        throw new Error('Invalid array format');
      }
    }
  
    let processedInput = input;
    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];
      let tokenName = token.tokenName;
      let tokenValue = token.tokenValue;
  
      processedInput = processedInput.replace(`\$\{${tokenName}\}`, tokenValue);
    }
  
    return processedInput;
  }
  
  
  
  

const app = {
    textProcessor: textProcessor
};

module.exports = app;