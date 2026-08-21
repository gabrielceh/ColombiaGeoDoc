---
sidebar_position: 5
---

# Infrastructure and Availability

Colombia Geo API is currently deployed using free-tier services for both the application and the database.

This configuration allows the API to remain available for demonstrations, learning, testing, and project evaluation without requiring paid infrastructure.

## Current infrastructure

| Component | Service | Plan |
|-----------|---------|------|
| API | Render | Free |
| Database | PostgreSQL | Free Tier |

## Availability

Free-tier plans may have certain infrastructure limitations.

As a result, situations such as the following may occur:

- Service restarts.
- Increased response times.
- Temporary instance suspension.
- Occasional periods of unavailability.

This means that the API may not respond immediately after a period of inactivity or may experience higher-than-expected response times.

:::warning

The current infrastructure is primarily intended for demonstration, learning, testing, and evaluation purposes.

**It is not recommended to use this instance for critical applications or production environments.**

:::

## Production use

For a production environment, it is recommended to use infrastructure with adequate resources and availability guarantees.

A production setup should consider, among other aspects:

- Adequate server resources.
- Managed database with availability guarantees.
- Backups and a recovery strategy.
- Monitoring.
- Centralized logging.
- Alerts.
- Scalability.
- Security policies.
- High availability according to the application's requirements.

## The project

The limitation described above applies to the **current infrastructure**, not necessarily to the application's design.

The API was developed following practices such as:

- Modular architecture.
- Clean Code.
- Hexagonal Architecture.
- Data validation.
- Centralized exception handling.
- Authentication and authorization.
- Rate limiting.
- CORS.
- Security headers.
- Health checks.
- PostgreSQL persistence.

Therefore, the application can later be deployed on infrastructure suitable for production.