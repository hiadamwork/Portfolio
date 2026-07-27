# 🎨 Design System

> Portfolio Design System Documentation

Version: 1.0.0

---

# Overview

This document defines the visual language, reusable design tokens, UI components and interaction principles used throughout the Portfolio application.

The goal is to ensure every page, component and interaction feels like part of one premium product.

This Design System is inspired by:

- Apple
- Linear
- Vercel
- Stripe
- Framer
- Raycast
- shadcn/ui

---

# Design Principles

Every interface should follow these principles.

## Simplicity

Remove unnecessary elements.

If something does not improve usability, remove it.

---

## Consistency

Every page must look like it belongs to the same application.

Users should instantly recognize the design language.

---

## Clarity

Content always has higher priority than decoration.

---

## Hierarchy

Important content should immediately attract attention.

Typography, spacing and contrast create hierarchy.

---

## Performance

Beautiful UI should also be fast.

Animations should enhance the experience, never slow it down.

---

## Accessibility

Every interaction should be usable with

- keyboard
- screen readers
- reduced motion
- high contrast

---

# Color System

## Primary

```
Primary 50
Primary 100
Primary 200
Primary 300
Primary 400
Primary 500

#3B82F6

Primary 600
Primary 700
Primary 800
Primary 900
```

---

## Background

```
Background

#09090B
```

---

## Surface

```
Surface

#111114
```

---

## Surface Elevated

```
Surface Elevated

#18181B
```

---

## Border

```
#27272A
```

---

## Text

Primary

```
#FFFFFF
```

Secondary

```
#A1A1AA
```

Muted

```
#71717A
```

Disabled

```
#52525B
```

---

## Status Colors

Success

```
#22C55E
```

Warning

```
#F59E0B
```

Error

```
#EF4444
```

Information

```
#3B82F6
```

---

# Gradients

## Hero

```
Blue → Purple
```

---

## CTA

```
Blue → Indigo
```

---

## Glow

```
Transparent → Blue
```

---

## Card Glow

```
Blue → Transparent
```

---

# Typography

Primary Font

```
Inter
```

Fallback

```
System UI
```

Monospace

```
JetBrains Mono
```

---

# Font Scale

Display

```
72px
```

---

Heading 1

```
56px
```

---

Heading 2

```
42px
```

---

Heading 3

```
32px
```

---

Heading 4

```
24px
```

---

Heading 5

```
20px
```

---

Heading 6

```
18px
```

---

Body Large

```
18px
```

---

Body

```
16px
```

---

Small

```
14px
```

---

Caption

```
12px
```

---

Code

```
14px
```

---

# Font Weights

```
300
400
500
600
700
800
```

---

# Letter Spacing

Display

```
-2%
```

Heading

```
-1%
```

Body

```
0%
```

---

# Line Height

Heading

```
120%
```

Body

```
160%
```

---

# Spacing System

Base Unit

```
4px
```

Scale

```
4

8

12

16

20

24

32

40

48

56

64

72

80

96

112

128
```

Never use arbitrary spacing.

---

# Border Radius

Small

```
8px
```

Medium

```
12px
```

Large

```
16px
```

XL

```
20px
```

XXL

```
24px
```

Pill

```
999px
```

Circle

```
50%
```

---

# Shadows

Small

```
0 4 12
```

Medium

```
0 10 30
```

Large

```
0 20 60
```

Glow

```
Soft Blue Glow
```

No harsh shadows.

---

# Blur

Cards

```
16px
```

Navbar

```
24px
```

Modal

```
28px
```

Glass only where appropriate.

---

# Layout

Container Width

```
1440px
```

Content Width

```
1200px
```

Reading Width

```
720px
```

---

# Grid

Desktop

```
12 Columns
```

Tablet

```
8 Columns
```

Mobile

```
4 Columns
```

---

# Breakpoints

```
640

768

1024

1280

1536
```

---

# Component Principles

Components should be

Reusable

Composable

Predictable

Accessible

Responsive

Animated

---

# Buttons

Variants

```
Primary

Secondary

Outline

Ghost

Danger

Success

Icon
```

Sizes

```
Small

Medium

Large
```

States

```
Default

Hover

Pressed

Focused

Disabled

Loading
```

---

# Cards

Card types

```
Project

Article

Feature

Glass

Statistics

Profile

Dashboard

Pricing
```

Every card has

Rounded Corners

Soft Shadow

Hover Animation

Glass Background

---

# Forms

Supported Inputs

```
Input

Textarea

Password

Email

Search

Select

Checkbox

Radio

Switch

File Upload

OTP

Date Picker
```

Validation

```
Success

Error

Warning

Loading
```

---

# Navigation

Navigation consists of

Floating Navbar

Footer

Breadcrumb

Sidebar

Tabs

Pagination

Dropdown

---

# Icons

Style

```
Outline
```

Stroke

```
2px
```

Rounded

Minimal

Consistent

---

# Animations

Animations should be

Fast

Smooth

Purposeful

Minimal

Never distracting.

---

# Motion Duration

Fast

```
150ms
```

Normal

```
250ms
```

Slow

```
400ms
```

Page Transition

```
600ms
```

---

# Motion Curves

Ease Out

Default

Spring

---

# Animation Library

Framer Motion

GSAP (only when necessary)

CSS Transitions

---

# Animation Types

Fade

Slide

Scale

Rotate

Blur

Stagger

Page Reveal

Cursor Glow

Floating

Parallax

Magnetic Button

Glass Reflection

Counter

Progress

---

# Hover Effects

Cards

```
Lift

Glow

Shadow
```

Buttons

```
Brightness

Scale

Shadow
```

Images

```
Zoom

Glow
```

Links

```
Underline Reveal
```

---

# Loading States

Skeleton

Spinner

Progress

Button Loading

Card Placeholder

---

# Empty States

Illustration

Headline

Description

Primary Action

Secondary Action

---

# Toasts

Variants

Success

Warning

Error

Information

Loading

Position

```
Top Right
```

---

# Modals

Every modal includes

Overlay

Glass Background

Blur

Animation

Escape Close

Focus Trap

---

# Accessibility

Minimum touch target

```
44px
```

Keyboard Support

Required

Focus Ring

Visible

Reduced Motion

Supported

ARIA Labels

Required

Contrast

WCAG AA

---

# Images

Formats

```
AVIF

WebP
```

Fallback

PNG

Loading

Lazy

---

# Icons

SVG only.

Avoid PNG icons.

---

# Illustration Style

Minimal

Abstract

Premium

Soft Gradients

No cartoons.

---

# Code Blocks

Font

```
JetBrains Mono
```

Rounded

Syntax Highlighting

Copy Button

---

# Page Structure

Every page follows

```
Navbar

↓

Hero

↓

Content Sections

↓

CTA

↓

Footer
```

---

# Section Rules

Each section has

Headline

Supporting Text

Content

Whitespace

Optional CTA

---

# Content Width

Text

```
720px
```

Cards

```
1200px
```

Hero

```
1440px
```

---

# Design Tokens

Everything should use tokens.

Never hardcode

Colors

Spacing

Radius

Typography

Shadow

Animation

---

# Naming Convention

Example

```
color.primary

color.background

spacing.md

radius.lg

shadow.glow

font.heading

animation.fast
```

---

# Theme Support

Current

Dark

Future

Light

High Contrast

Reduced Motion

---

# Component Lifecycle

Design

↓

Prototype

↓

Component

↓

Documentation

↓

Testing

↓

Production

---

# Responsive Strategy

Desktop First

Adapt gracefully to

Laptop

Tablet

Mobile

Never hide important content.

---

# Quality Checklist

Every component should satisfy:

- Responsive
- Accessible
- Reusable
- Animated
- Keyboard Friendly
- Consistent
- Well Documented
- Easy to Maintain

---

# Design Philosophy

The Portfolio should feel like a premium software product rather than a personal website.

Every interaction should communicate:

- Professionalism
- Trust
- Precision
- Performance
- Simplicity
- Attention to Detail

The design should never feel trendy for the sake of being trendy.

Instead, it should feel timeless, elegant and carefully crafted.

The user should immediately think:

> "This developer builds software at a professional level."

---

# Future Extensions

The Design System is built to support future growth.

Planned additions:

- Motion Design Guidelines
- Icon Library Documentation
- Illustration Guidelines
- Component API Documentation
- Figma Design Tokens
- Theme Builder
- Brand Assets
- Accessibility Audit Checklist
- Design Review Checklist
- Design Patterns Library
- Mobile Design System
- Dashboard Design System
- Email Template Design System

---

# Summary

This Design System defines the visual foundation of the Portfolio application.

Every page, component and interaction must follow this document to ensure a consistent, scalable and premium user experience.

When introducing a new component or feature:

1. Reuse existing design tokens.
2. Follow established interaction patterns.
3. Maintain visual consistency.
4. Prioritize accessibility and performance.
5. Document the component if it becomes reusable.

The Design System should evolve carefully while preserving the overall identity of the portfolio.