# Domain Validators

This directory contains Zod validators for all data structures used in the portfolio application. These validators ensure type safety and data validation when fetching from external APIs or processing user input.

## Overview

All validators are built using [Zod](https://zod.dev/) and provide:
- Runtime type validation
- TypeScript type inference
- Detailed error messages
- Safe parsing options
- Helper functions for common validation patterns

## Validators

### 📋 Project Validators (`project.ts`)
Validates project portfolio data from external APIs or CMS.

```typescript
import { validateProject, safeValidateProjects } from '@/domain/validators';

// Validate single project
const project = validateProject(apiData);

// Safe validation with error handling
const result = safeValidateProjects(apiData);
if (result.success) {
  console.log(result.data); // Array<Project>
} else {
  console.error(result.error); // ZodError
}
```

**Types Available:**
- `Project` - Complete project data
- `ProjectCreate` - For creating new projects (without ID)
- `ProjectUpdate` - For updating projects (partial fields)

### 📧 Contact Validators (`contact.ts`)
Validates contact form submissions and contact information.

```typescript
import { validateContactForm, safeValidateContactForm } from '@/domain/validators';

// Validate form submission
try {
  const formData = validateContactForm(userInput);
  // Submit to API
} catch (error) {
  // Handle validation errors
}

// Real-time field validation
const emailResult = validateEmail(email);
if (!emailResult.success) {
  setEmailError(emailResult.error.message);
}
```

**Types Available:**
- `ContactForm` - Basic contact form data
- `ContactInfo` - Contact information structure
- `ContactFormSubmission` - Extended form with metadata

### 🔐 Auth Validators (`auth.ts`)
Validates authentication-related data including login, registration, and user profiles.

```typescript
import { validateUserProfile, validateLoginCredentials } from '@/domain/validators';

// Validate login
const credentials = validateLoginCredentials({
  email: 'user@example.com',
  password: 'SecurePass123!'
});

// Validate API response
const userProfile = validateUserProfile(authApiResponse.user);
```

**Types Available:**
- `UserProfile` - Complete user profile
- `LoginCredentials` - Login form data
- `Registration` - User registration data
- `AuthResponse` - API authentication response

### 👤 Portfolio Validators (`portfolio.ts`)
Validates portfolio/about page data including skills, experience, and education.

```typescript
import { validateSkills, validateExperience } from '@/domain/validators';

// Validate skills array from CMS
const skills = validateSkills(cmsSkillsData);

// Validate work experience
const experience = validateExperience({
  title: 'Senior Developer',
  company: 'Tech Corp',
  startDate: '2023-01-01',
  // ...
});
```

**Types Available:**
- `Skill` - Individual skill data
- `Experience` - Work experience entry
- `Education` - Educational background
- `PortfolioData` - Complete portfolio data structure

### 🔧 Common Validators (`common.ts`)
Provides common validation patterns and API response structures.

```typescript
import { validateApiResponse, validatePaginatedResponse } from '@/domain/validators';

// Validate API response with typed data
const response = validateApiResponse(apiData, ProjectValidator);

// Validate paginated response
const paginatedProjects = validatePaginatedResponse(apiData, ProjectValidator);
```

**Types Available:**
- `ApiResponse<T>` - Generic API response wrapper
- `PaginatedResponse<T>` - Paginated API response
- `ErrorResponse` - API error response
- `SearchQuery` - Search/filter parameters

## Usage Patterns

### Basic Validation
```typescript
import { validateProject } from '@/domain/validators';

try {
  const project = validateProject(unknownData);
  // Use validated project data
} catch (error) {
  // Handle validation error
  console.error('Validation failed:', error.message);
}
```

### Safe Validation
```typescript
import { safeValidateProject } from '@/domain/validators';

const result = safeValidateProject(unknownData);
if (result.success) {
  // Use result.data (fully typed)
} else {
  // Handle result.error (ZodError)
  console.error('Validation errors:', result.error.issues);
}
```

### API Integration Example
```typescript
import { validateProjects, validateApiResponse } from '@/domain/validators';

async function fetchProjects(): Promise<Project[]> {
  const response = await fetch('/api/projects');
  const data = await response.json();
  
  // Validate API response structure
  const apiResponse = validateApiResponse(data);
  
  if (!apiResponse.success) {
    throw new Error(apiResponse.error);
  }
  
  // Validate and return projects data
  return validateProjects(apiResponse.data);
}
```

### Form Validation Example
```typescript
import { safeValidateContactForm } from '@/domain/validators';

const handleFormSubmit = (formData: unknown) => {
  const result = safeValidateContactForm(formData);
  
  if (!result.success) {
    // Set form errors
    const errors = result.error.issues.reduce((acc, issue) => {
      acc[issue.path[0]] = issue.message;
      return acc;
    }, {});
    setFormErrors(errors);
    return;
  }
  
  // Submit valid data
  submitContactForm(result.data);
};
```

## Error Handling

### Validation Error Structure
```typescript
// Zod validation error provides:
error.issues.forEach(issue => {
  console.log(issue.path);    // ['email'] - field path
  console.log(issue.message); // 'Invalid email address'
  console.log(issue.code);    // 'invalid_string' - error type
});
```

### Custom Error Messages
All validators include human-readable error messages suitable for displaying to users.

## Best Practices

1. **Use safe validation** for user input to handle errors gracefully
2. **Use strict validation** for trusted API data where errors should throw
3. **Validate at boundaries** - API responses, form submissions, external data
4. **Leverage TypeScript inference** - let Zod generate your types
5. **Compose validators** - use existing validators to build complex structures

## Adding New Validators

When adding new validators:

1. Create a new file in this directory
2. Export validation schemas, types, and helper functions
3. Add exports to `index.ts`
4. Include documentation and usage examples
5. Write tests for validation logic

## Dependencies

- `zod`: ^4.0.13 - Schema validation and type inference