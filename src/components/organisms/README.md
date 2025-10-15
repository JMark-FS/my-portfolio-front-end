# Organisms Folder

This folder contains **organism components** for the project, following the Atomic Design methodology.

## What is an Organism?

An **organism** is an individual, self-contained, working component composed of multiple atoms and molecules. Organisms are more complex than molecules and are designed to be reusable building blocks for page layouts and templates.

### Characteristics of Organisms

- Composed of atoms and molecules
- Encapsulate a distinct section of UI or functionality
- Reusable across different pages and templates
- Can manage their own state and logic
- Examples: Navigation bars, user profile sections, contact forms, project grids, etc.

## Folder Structure

Each subfolder in `organisms/` should contain:

- The main organism component (e.g., `UserProfileHeader.tsx`)
- Supporting types/interfaces (if needed)
- Related styles or helper files (if needed)
- An optional `index.ts` for exports

## Examples

- `user/` — User profile header, bio section, skills section
- `project/` — Project card, projects grid, project CTA
- `contact/` — Contact form, contact info, availability status, FAQ section

## Purpose

Organisms are designed to be the core building blocks for assembling templates and pages, promoting reusability, maintainability, and clear separation of concerns in your UI architecture.
