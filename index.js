const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'GitHub Metrics Demo API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      metrics: '/metrics',
      stats: '/stats'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/metrics', (req, res) => {
  res.json({
    deployments: 156,
    pullRequests: 89,
    issues: 45,
    commits: 892
  });
});

app.listen(port, () => {
  console.log(`Demo app listening at http://localhost:${port}`);
});

module.exports = app;
