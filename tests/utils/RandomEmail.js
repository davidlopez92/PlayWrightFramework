// Function to generate a random string
function generateRandomString(length) {
    const characters = '0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  // Function to generate a random email
  function generateRandomEmail() {
    const randomString = generateRandomString(3);
    return `test${randomString}@yopmail.com`;
  }

  module.exports = { 
    generateRandomString, 
    generateRandomEmail 
  };