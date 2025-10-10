/**
 * Authentication Module
 * Handles user login, registration, and JWT tokens
 */

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class AuthService {
  constructor() {
    this.users = new Map();
    this.secret = process.env.JWT_SECRET || 'demo-secret';
  }

  async register(username, password, email) {
    if (this.users.has(username)) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      username,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };

    this.users.set(username, user);
    return this.generateToken(username);
  }

  async login(username, password) {
    const user = this.users.get(username);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    return this.generateToken(username);
  }

  generateToken(username) {
    return jwt.sign({ username }, this.secret, { expiresIn: '24h' });
  }

  verifyToken(token) {
    try {
      return jwt.verify(token, this.secret);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}

module.exports = { AuthService };
