// Enhanced metrics endpoint with detailed analytics

const getDetailedMetrics = () => {
  return {
    performance: {
      responseTime: 45,
      throughput: 1200,
      errorRate: 0.2,
      uptime: 99.9
    },
    usage: {
      activeUsers: 342,
      totalRequests: 15678,
      peakConcurrent: 89,
      avgSessionDuration: 423
    },
    cicd: {
      deploymentFrequency: 'Daily',
      leadTime: 2.5,
      changeFailureRate: 5.2,
      mttr: 0.8
    }
  };
};

const getMetricsSummary = () => {
  return {
    deployments: 156,
    pullRequests: 89,
    issues: 45,
    commits: 892,
    contributors: 12,
    codeReviews: 134
  };
};

module.exports = {
  getDetailedMetrics,
  getMetricsSummary
};
