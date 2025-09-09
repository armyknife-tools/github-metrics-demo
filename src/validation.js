// Input validation utilities
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateInput = (input) => {
  if (!input || typeof input !== 'string') {
    throw new Error('Invalid input');
  }
  return input.trim();
};

module.exports = {
  validateEmail,
  validateInput
};
