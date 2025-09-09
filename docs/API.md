# API Documentation

## Overview
This API provides access to GitHub metrics and analytics data for the demo repository.

## Endpoints

### GET /
Returns API information and available endpoints.

**Response:**
```json
{
  "message": "GitHub Metrics Demo API",
  "version": "1.0.0",
  "endpoints": {
    "health": "/health",
    "metrics": "/metrics",
    "stats": "/stats"
  }
}
```

### GET /health
Health check endpoint for monitoring.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-10-08T15:45:30.123Z"
}
```

### GET /metrics
Returns summary metrics including deployments, PRs, issues, and commits.

**Response:**
```json
{
  "deployments": 156,
  "pullRequests": 89,
  "issues": 45,
  "commits": 892
}
```

### GET /stats
Returns detailed statistics including performance and usage metrics.

**Response:**
```json
{
  "performance": {
    "responseTime": 45,
    "throughput": 1200,
    "errorRate": 0.2,
    "uptime": 99.9
  },
  "usage": {
    "activeUsers": 342,
    "totalRequests": 15678,
    "peakConcurrent": 89,
    "avgSessionDuration": 423
  },
  "cicd": {
    "deploymentFrequency": "Daily",
    "leadTime": 2.5,
    "changeFailureRate": 5.2,
    "mttr": 0.8
  }
}
```

## DORA Metrics

The API tracks all four key DORA (DevOps Research and Assessment) metrics:

- **Deployment Frequency**: How often code is deployed to production
- **Lead Time**: Time from commit to production deployment
- **Change Failure Rate**: Percentage of deployments causing failures
- **Mean Time to Recovery (MTTR)**: Average time to recover from failure

## Rate Limiting
Currently no rate limiting is enforced on this demo API.

## Authentication
This demo API does not require authentication.
