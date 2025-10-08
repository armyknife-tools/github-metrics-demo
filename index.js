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
// Commit 1 - Wed Oct  8 10:35:48 CDT 2025
// Commit 2 - Wed Oct  8 10:35:48 CDT 2025
// Commit 3 - Wed Oct  8 10:35:48 CDT 2025
// Commit 4 - Wed Oct  8 10:35:48 CDT 2025
// Commit 5 - Wed Oct  8 10:35:49 CDT 2025
// Commit 6 - Wed Oct  8 10:35:49 CDT 2025
// Commit 7 - Wed Oct  8 10:35:50 CDT 2025
// Commit 8 - Wed Oct  8 10:35:50 CDT 2025
// Commit 9 - Wed Oct  8 10:35:50 CDT 2025
