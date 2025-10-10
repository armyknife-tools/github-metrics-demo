const fs = require('fs').promises;
class Database {
  constructor() { this.data = new Map(); }
  async save(key, value) { this.data.set(key, value); }
  async find(key) { return this.data.get(key); }
}
module.exports = { Database };
