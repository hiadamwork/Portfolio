# 📁 Portfolio Project Structure

> This document describes the folder architecture of the Portfolio project.

---

# Philosophy

This project follows several principles:

- Feature First Architecture
- Component Driven Development
- Design System First
- Reusable Components
- Scalability
- Maintainability
- Clean Architecture
- Separation of Concerns

The goal is to make the project easy to maintain even after several years.

---

# Root Structure

```
portfolio/
│
├── public/
│
├── src/
│
├── docs/
│
├── scripts/
│
├── tests/
│
├── .github/
│
├── package.json
├── vite.config.js
├── jsconfig.json
├── README.md
└── ...
```

---

# public/

Contains static assets that never go through React.

Examples

- favicon
- robots.txt
- sitemap.xml
- manifest.json
- social preview image

Never place React assets here.

---

# src/

Contains the entire application.

```
src/
```

Everything inside src is compiled by Vite.

---

# app/

Application bootstrap.

Contains

- Providers
- Router
- Theme
- Layout initialization
- Global configuration

Example

```
app/

App.jsx

main.jsx

router/

providers/

layouts/

config/

hooks/

```

---

# assets/

Contains raw assets.

```
assets/

images/

icons/

videos/

fonts/

svg/

lottie/

```

Assets here are imported by React.

---

# components/

Reusable UI components.

These components know nothing about business logic.

```
components/

ui/

forms/

layout/

navigation/

feedback/

display/

charts/

animations/

icons/

typography/

```

Examples

```
Button

Input

Card

Modal

Tooltip

Avatar

Badge

Spinner

Navbar

Footer

```

Rule

If a component can be reused in multiple pages,
it belongs here.

---

# features/

This is the most important folder.

Every business feature lives here.

```
features/

home/

projects/

blog/

contact/

services/

about/

playground/

ui-kit/

```

Each feature contains everything it needs.

Example

```
projects/

components/

hooks/

pages/

services/

api/

utils/

constants/

types/

animations/

```

Nothing leaks outside.

---

# pages/

Contains route definitions only.

Example

```
HomePage

ProjectsPage

AboutPage

BlogPage

```

Page files should be extremely small.

Usually

20-40 lines.

---

# layouts/

Website layouts.

```
MainLayout

DashboardLayout

EmptyLayout

```

---

# hooks/

Global reusable hooks.

Example

```
useScroll

useTheme

useWindowSize

useDebounce

useMediaQuery

```

Feature-specific hooks stay inside features.

---

# services/

Global services.

```
api/

github/

analytics/

email/

storage/

logger/

```

These communicate with external systems.

---

# api/

HTTP client.

Contains

Axios

Interceptors

Base URL

Authentication

Error Handling

Retry Logic

---

# lib/

External libraries configuration.

Example

```
axios

framer-motion

lenis

three

gsap

react-query

```

---

# context/

React Contexts.

```
ThemeContext

CursorContext

ModalContext

```

Avoid putting business logic here.

---

# store/

Global state.

If using Zustand.

```
themeStore

modalStore

navigationStore

```

Don't store everything globally.

---

# constants/

Application constants.

```
routes

links

colors

breakpoints

animations

seo

```

---

# config/

Configuration.

```
environment

site

navigation

social

theme

```

---

# data/

Static data.

```
projects.js

services.js

technologies.js

faq.js

timeline.js

```

Later can become API.

---

# utils/

Pure helper functions.

Example

```
formatDate()

slugify()

calculateReadingTime()

generateId()

```

No React code.

---

# helpers/

Higher-level helpers.

Example

```
scrollToSection()

copyToClipboard()

downloadCV()

```

---

# animations/

Reusable animations.

```
fade.js

slide.js

scale.js

stagger.js

pageTransition.js

```

---

# styles/

Global styles.

```
globals.css

variables.css

reset.css

typography.css

animations.css

utilities.css

```

Components should still use CSS Modules.

---

# themes/

Theme definitions.

```
dark.js

light.js

tokens.js

```

---

# types/

JSDoc typedefs (or TS types later).

```
Project

Article

Technology

Service

```

---

# seo/

SEO utilities.

```
meta

schema

openGraph

twitter

robots

```

---

# content/

Markdown content.

```
blog/

case-studies/

```

Useful if blog becomes Markdown powered.

---

# mocks/

Fake API responses.

Useful during development.

---

# tests/

```
unit/

integration/

e2e/

```

---

# docs/

Documentation.

```
architecture.md

structure.md

design-system.md

api.md

deployment.md

coding-standards.md

animations.md

components.md

```

---

# scripts/

Automation scripts.

```
generate-sitemap.js

optimize-images.js

generate-rss.js

```

---

# Naming Rules

Folders

```
camelCase
```

Components

```
PascalCase
```

Hooks

```
useSomething.js
```

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

# CSS Rules

Always

```
Component.module.css
```

Never

```
component.css
```

---

# Component Structure

Every reusable component should look like this

```
Button/

Button.jsx

Button.module.css

Button.test.jsx

Button.stories.jsx

index.js

```

---

# Feature Structure

Example

```
projects/

components/

ProjectCard/

ProjectGrid/

ProjectFilter/

pages/

ProjectDetailPage.jsx

hooks/

services/

api/

constants/

animations/

utils/

types/

```

---

# Imports

Always

```
@/components

@/features

@/hooks

@/utils
```

Never

```
../../../
```

Use path aliases.

---

# General Rules

✅ Small components

✅ Single Responsibility Principle

✅ Reusable code

✅ Composition over inheritance

✅ Feature isolation

✅ No duplicated logic

✅ Keep files focused

✅ Consistent naming

✅ Clean folder hierarchy

✅ Easy future scaling