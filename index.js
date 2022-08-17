// Write your code in this file!
const currentUser = 'Grace Hopper';


// when javascript is expecting a variable to contain one thing, and it does not that is known as AssertionError


// string interpolation  using template literal
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;