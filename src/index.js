const express = require('express');
const axios = require('axios');
const _ = require('lodash');
const moment = require('moment');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'GitHub Metrics Demo API',
    version: '1.0.0',
    timestamp: moment().format()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/metrics', async (req, res) => {
  try {
    const data = _.range(1, 10).map(i => ({
      id: i,
      value: _.random(0, 100),
      timestamp: moment().subtract(i, 'days').format()
    }));
    
    res.json({
      metrics: data,
      summary: {
        average: _.meanBy(data, 'value'),
        max: _.maxBy(data, 'value').value,
        min: _.minBy(data, 'value').value
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
