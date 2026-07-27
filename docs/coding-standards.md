# 💻 Coding Standards

> Portfolio Coding Standards & Best Practices

Version: 1.0.0

---

# Overview

This document defines the coding standards used throughout the Portfolio project.

The purpose of these standards is to ensure that every part of the codebase is:

- Consistent
- Readable
- Predictable
- Scalable
- Testable
- Maintainable
- Professional

These rules apply to the entire project.

---

# Core Philosophy

Always write code for humans first.

The computer only needs correct code.

Future developers (including yourself) need understandable code.

Good code is:

- Easy to read
- Easy to modify
- Easy to debug
- Easy to test
- Easy to review

---

# General Principles

Always follow

- KISS (Keep It Simple)
- DRY (Don't Repeat Yourself)
- SOLID
- YAGNI (You Aren't Gonna Need It)
- Composition over Inheritance
- Single Responsibility Principle

---

# Clean Code

Always

✅ Write expressive code

✅ Prefer clarity over cleverness

✅ Keep functions small

✅ Keep components focused

✅ Avoid duplicated logic

✅ Remove dead code

Never

❌ Write unnecessary abstractions

❌ Leave commented-out code

❌ Create giant files

❌ Ignore lint warnings

---

# Folder Structure

Always follow

```
Feature First Architecture
```

Never organize business logic by file type alone.

Good

```
features/

projects/

blog/

contact/
```

Bad

```
pages/

components/

everything/
```

---

# File Naming

React Components

```
PascalCase
```

Example

```
ProjectCard.jsx
```

---

Hooks

```
useSomething.js
```

Example

```
useScroll.js
```

---

Utilities

```
verbNoun.js
```

Example

```
formatDate.js

calculateReadingTime.js
```

---

Constants

```
UPPER_SNAKE_CASE
```

Example

```
MAX_ITEMS

DEFAULT_LANGUAGE
```

---

CSS Modules

```
Component.module.css
```

---

Assets

```
kebab-case
```

Example

```
hero-background.webp
```

---

# Import Order

Always

```javascript
// React

// Third-party libraries

// Internal aliases

// Components

// Hooks

// Services

// Utilities

// Styles
```

Example

```javascript
import { useState } from "react";

import { motion } from "framer-motion";

import { Button } from "@/components/ui";

import { useTheme } from "@/hooks";

import "./Component.module.css";
```

---

# Import Rules

Always use aliases.

Good

```javascript
import Button from "@/components/ui/Button";
```

Bad

```javascript
import Button from "../../../../Button";
```

---

# Components

A component should

- Have one responsibility
- Be reusable
- Be predictable
- Be composable

Avoid large components.

Maximum recommendation

```
250 lines
```

Split earlier whenever possible.

---

# Component Structure

Recommended order

```javascript
Imports

Constants

Hooks

State

Refs

Effects

Handlers

Render

Export
```

---

# Props

Always destructure props.

Good

```javascript
function Button({ children, onClick })
```

Bad

```javascript
function Button(props)
```

---

# Functions

Prefer

```javascript
const handleClick = () => {};
```

Instead of

```javascript
function handleClick() {}
```

unless hoisting is required.

---

# Variable Naming

Good

```javascript
projectCount

userProfile

isLoading

hasPermission
```

Bad

```javascript
x

tmp

data2

value1
```

Names should explain intent.

---

# Boolean Variables

Always start with

```
is

has

can

should

was

will
```

Example

```javascript
isVisible

hasProjects

canDelete
```

---

# Event Handlers

Prefix with

```
handle
```

Example

```javascript
handleSubmit()

handleClick()

handleSearch()
```

---

# Custom Hooks

Prefix with

```
use
```

Example

```javascript
useTheme()

useScroll()

useProjects()
```

Hooks should never render UI.

---

# State

Keep state as close as possible to where it is used.

Avoid unnecessary global state.

Never duplicate state.

---

# Effects

Use

```
useEffect()
```

Only when necessary.

Avoid using effects for derived values.

Prefer

```javascript
useMemo()
```

or

```javascript
const fullName = `${first} ${last}`;
```

---

# Styling

Use

```
CSS Modules
```

Never

```
Global Component CSS
```

Global styles only for

- Reset
- Variables
- Typography
- Utilities

---

# CSS Rules

Use

```css
.card {}

.cardTitle {}
```

Avoid

```css
.redText {}

.bigBlueBox {}
```

Name by purpose.

---

# Comments

Comments should explain

WHY

not

WHAT

Bad

```javascript
// Increment counter
counter++;
```

Good

```javascript
// Delay prevents duplicate submissions.
```

---

# Magic Numbers

Avoid

```javascript
if (age > 17)
```

Prefer

```javascript
const ADULT_AGE = 18;
```

---

# Error Handling

Never ignore errors.

Good

```javascript
try {

} catch (error) {

}
```

Always provide meaningful messages.

---

# Async Code

Always

```javascript
async

await
```

Avoid

```javascript
.then()

.catch()
```

unless chaining is more readable.

---

# API Calls

Never

```javascript
fetch(...)
```

inside components.

Always

```
Component

↓

Hook

↓

Service

↓

API
```

---

# Constants

Avoid hardcoded values.

Bad

```javascript
padding: 32
```

Good

```javascript
spacing.xl
```

---

# Responsive Design

Never hardcode screen sizes inside components.

Use

```
breakpoints
```

from the Design System.

---

# Accessibility

Every interactive element must

- Be keyboard accessible
- Have focus styles
- Have accessible labels
- Meet contrast requirements

---

# Performance

Prefer

- Lazy Loading
- Memoization when appropriate
- Code Splitting
- Optimized images

Avoid premature optimization.

Measure before optimizing.

---

# React Rules

Prefer

Functional Components

Hooks

Composition

Avoid

Class Components

---

# Keys

Never use

```javascript
index
```

as a key unless the list is static.

---

# Forms

Always validate

Frontend

AND

Backend

---

# Animations

Animations should

- Improve UX
- Be smooth
- Respect reduced motion
- Never block interaction

---

# Testing

Every reusable component should eventually include

- Unit Tests
- Accessibility Tests (where practical)

Critical flows should have

- Integration Tests
- E2E Tests

---

# Git Commit Convention

Follow Conventional Commits.

Examples

```
feat:

fix:

refactor:

docs:

style:

test:

perf:

build:

ci:

chore:

revert:
```

Examples

```
feat(projects): add project filters

fix(contact): validate email field

docs: update architecture guide
```

---

# Pull Requests

Every PR should

- Have a clear description
- Be focused on one change
- Pass all checks
- Be reviewed before merge

---

# Documentation

Public utilities

Reusable hooks

Reusable components

Complex services

should include documentation.

---

# Code Review Checklist

Before merging

- Code is readable
- No duplicated logic
- Naming is consistent
- No dead code
- Lint passes
- Build passes
- Responsive
- Accessible
- Tested where appropriate
- Documentation updated if necessary

---

# Things to Avoid

Never

- Nested ternaries
- Deep prop drilling (consider composition or context)
- Giant components
- Giant functions
- Inline business logic in JSX
- Inline styles (except rare dynamic cases)
- Hardcoded colors
- Hardcoded spacing
- Duplicate API calls
- Global mutable state
- Unused imports
- Console logs in production
- TODO comments without context or tracking

---

# Preferred Patterns

Prefer

```javascript
const isDisabled =
    isLoading ||
    !isValid ||
    hasPermission === false;
```

instead of

```javascript
const isDisabled = isLoading || !isValid || hasPermission == false;
```

Prioritize readability.

---

# JSX Guidelines

Avoid deeply nested JSX.

Extract reusable UI into components.

Good

```
Page

↓

Section

↓

Card

↓

Button
```

Avoid giant render methods.

---

# Security

Never trust client input.

Always

- Validate input
- Sanitize output
- Escape user-generated content
- Protect secrets
- Keep API keys on the backend

---

# Refactoring

When refactoring

- Preserve behavior
- Improve readability
- Reduce complexity
- Remove duplication
- Update tests if needed

Never mix major refactoring with unrelated feature work.

---

# Definition of Done

A task is complete only when:

- Functionality works
- Code follows standards
- Lint passes
- Build passes
- Responsive behavior verified
- Accessibility considered
- Documentation updated (if applicable)
- No known regressions introduced

---

# Coding Philosophy

The best code is not the shortest.

The best code is the one that another developer can understand immediately.

Optimize for long-term maintainability over short-term convenience.

Every file committed to the repository should be something you are proud to maintain.

---

# Summary

These coding standards establish a consistent foundation for the Portfolio project.

Every contribution should aim to produce code that is:

- Readable
- Predictable
- Reusable
- Testable
- Accessible
- Performant
- Maintainable
- Well documented

Consistency across the entire codebase is more valuable than individual coding preferences.