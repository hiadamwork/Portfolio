# 🌐 API Documentation

> Portfolio Backend API Specification

Version: 1.0.0

---

# Overview

This document defines the REST API used by the Portfolio application.

The API is designed to be:

- RESTful
- Predictable
- Versioned
- Secure
- Scalable
- Well documented

Base URL

```
/api/v1
```

Future versions

```
/api/v2
```

---

# Architecture

```
React Frontend

↓

API Client

↓

REST API

↓

Controllers

↓

Services

↓

Repositories

↓

Database
```

---

# Response Format

Every endpoint returns the same response structure.

## Success

```json
{
  "success": true,
  "data": {},
  "message": "Success"
}
```

---

## Error

```json
{
  "success": false,
  "message": "Something went wrong.",
  "errors": []
}
```

---

# HTTP Status Codes

```
200 OK

201 Created

204 No Content

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

409 Conflict

422 Validation Error

429 Too Many Requests

500 Internal Server Error
```

---

# Authentication

Public API

No authentication required.

Admin API

```
JWT Access Token
```

Future

```
Refresh Token

HTTP Only Cookies
```

Authorization Header

```
Authorization: Bearer <token>
```

---

# Pagination

Request

```
?page=1&limit=10
```

Response

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 58,
    "pages": 6
  }
}
```

---

# Sorting

```
?sort=createdAt

?sort=-createdAt

?sort=title
```

---

# Filtering

```
?category=react

?featured=true

?published=true
```

---

# Searching

```
?search=react
```

---

# API Modules

- Projects
- Blog
- Contact
- Services
- Technologies
- GitHub
- Statistics
- Newsletter
- SEO
- Settings (Admin)

---

# Projects API

Base

```
/api/v1/projects
```

---

## Get All Projects

GET

```
/projects
```

Response

```json
{
  "success": true,
  "data": [
    {
      "id": "...",
      "title": "...",
      "slug": "...",
      "featured": true
    }
  ]
}
```

---

## Featured Projects

GET

```
/projects/featured
```

---

## Project Details

GET

```
/projects/{slug}
```

---

## Create Project

POST

```
/projects
```

Authentication required.

---

## Update Project

PUT

```
/projects/{id}
```

---

## Delete Project

DELETE

```
/projects/{id}
```

---

# Project Model

```json
{
  "id": "uuid",
  "title": "AI Dashboard",
  "slug": "ai-dashboard",
  "description": "",
  "content": "",
  "coverImage": "",
  "gallery": [],
  "technologies": [],
  "githubUrl": "",
  "liveUrl": "",
  "featured": true,
  "published": true,
  "createdAt": "",
  "updatedAt": ""
}
```

---

# Blog API

Base

```
/api/v1/blog
```

---

## Get Articles

GET

```
/blog
```

---

## Featured Article

GET

```
/blog/featured
```

---

## Article Detail

GET

```
/blog/{slug}
```

---

## Categories

GET

```
/blog/categories
```

---

## Tags

GET

```
/blog/tags
```

---

## Related Articles

GET

```
/blog/{slug}/related
```

---

## Create Article

POST

```
/blog
```

Admin only.

---

## Update Article

PUT

```
/blog/{id}
```

---

## Delete Article

DELETE

```
/blog/{id}
```

---

# Blog Model

```json
{
  "id": "uuid",
  "title": "",
  "slug": "",
  "excerpt": "",
  "content": "",
  "coverImage": "",
  "category": "",
  "tags": [],
  "readingTime": 6,
  "published": true,
  "featured": false,
  "createdAt": "",
  "updatedAt": ""
}
```

---

# Services API

Base

```
/services
```

---

## Get Services

GET

```
/services
```

---

## Service Detail

GET

```
/services/{slug}
```

---

## Create Service

POST

```
/services
```

---

## Update Service

PUT

```
/services/{id}
```

---

## Delete Service

DELETE

```
/services/{id}
```

---

# Technologies API

GET

```
/technologies
```

Returns

- frontend
- backend
- databases
- tools

---

# Contact API

Base

```
/contact
```

---

## Send Contact Form

POST

```
/contact
```

Request

```json
{
  "name": "",
  "email": "",
  "company": "",
  "projectType": "",
  "budget": "",
  "timeline": "",
  "message": ""
}
```

Response

```json
{
  "success": true,
  "message": "Message sent successfully."
}
```

Rate Limited

Yes.

Captcha

Future.

---

# Newsletter API

POST

```
/newsletter
```

Subscribe email.

DELETE

```
/newsletter/{email}
```

Unsubscribe.

---

# GitHub API

GET

```
/github/profile
```

---

GET

```
/github/repositories
```

---

GET

```
/github/contributions
```

---

GET

```
/github/activity
```

---

GET

```
/github/pinned
```

---

# Statistics API

GET

```
/statistics
```

Returns

```json
{
  "projects": 12,
  "articles": 25,
  "technologies": 18,
  "experience": 3
}
```

---

# SEO API

GET

```
/seo
```

Returns

- title
- description
- open graph
- twitter
- robots

---

# Search API

GET

```
/search
```

Query

```
?q=react
```

Returns

Projects

Articles

Services

Technologies

---

# Upload API

POST

```
/upload
```

Multipart

Images only.

Future

Videos

PDF

Documents

---

# Admin Authentication

POST

```
/auth/login
```

Request

```json
{
  "email": "",
  "password": ""
}
```

Response

```json
{
  "accessToken": "",
  "expiresIn": 3600
}
```

---

POST

```
/auth/logout
```

---

POST

```
/auth/refresh
```

Future.

---

GET

```
/auth/me
```

Returns authenticated user.

---

# Health Check

GET

```
/health
```

Response

```json
{
  "status": "ok"
}
```

---

# Validation Rules

Examples

Contact

```
Name

Required

2–100 characters
```

```
Email

Required

Valid email
```

```
Message

Required

10–5000 characters
```

Project

```
Title

Required
```

```
Slug

Unique
```

Article

```
Title

Required
```

```
Content

Required
```

---

# Error Codes

```
PROJECT_NOT_FOUND

ARTICLE_NOT_FOUND

SERVICE_NOT_FOUND

INVALID_TOKEN

UNAUTHORIZED

VALIDATION_FAILED

EMAIL_ALREADY_EXISTS

UPLOAD_FAILED

RATE_LIMIT_EXCEEDED

UNKNOWN_ERROR
```

---

# Rate Limiting

Public

```
100 requests / 15 minutes
```

Contact Form

```
5 requests / hour
```

Authentication

```
10 attempts / 15 minutes
```

---

# Security

- JWT Authentication
- HTTPS Only
- Input Validation
- Output Sanitization
- Rate Limiting
- CORS
- Helmet
- Secure Headers
- File Type Validation
- File Size Limits

---

# Versioning

Current

```
v1
```

Future

```
v2
```

Breaking changes only in new versions.

---

# Future Endpoints

```
/dashboard

/users

/settings

/analytics

/media

/comments

/case-studies

/testimonials

/notifications

/activity

/tags

/categories

/experiments
```

---

# API Design Rules

- Use plural resource names.
- Use nouns instead of verbs.
- Keep endpoints predictable.
- Return consistent response objects.
- Never expose internal database structure.
- Validate every request.
- Return meaningful error messages.
- Use pagination for collections.
- Keep APIs backward compatible whenever possible.

---

# Summary

The Portfolio API is designed as a clean, modular REST API that supports both the public portfolio and future administrative features.

Its goals are:

- Scalability
- Maintainability
- Consistency
- Security
- Performance
- Developer Experience

The API should remain stable as the application grows, making it easy to add new modules without changing existing integrations.