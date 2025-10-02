import { z } from 'zod';

/**
 * Contact form validator schema for validating contact form submissions
 */
export const ContactFormValidator = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s\-']+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  
  email: z.string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  
  subject: z.string()
    .min(3, 'Subject must be at least 3 characters')
    .max(200, 'Subject must be less than 200 characters'),
  
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
});

/**
 * Contact information validator for external API data
 */
export const ContactInfoValidator = z.object({
  email: z.string().email('Must be a valid email address'),
  phone: z.string()
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Must be a valid phone number')
    .optional(),
  location: z.string().min(1, 'Location cannot be empty').optional(),
  linkedin: z.string().url('LinkedIn must be a valid URL').optional(),
  github: z.string().url('GitHub must be a valid URL').optional(),
  website: z.string().url('Website must be a valid URL').optional(),
});

/**
 * Contact submission response validator (for API responses)
 */
export const ContactSubmissionResponseValidator = z.object({
  success: z.boolean(),
  message: z.string(),
  id: z.string().uuid().optional(), // If the API returns a submission ID
  timestamp: z.string().datetime().optional(),
});

/**
 * Contact form with additional metadata for API submission
 */
export const ContactFormSubmissionValidator = ContactFormValidator.extend({
  timestamp: z.string().datetime().optional(),
  ip: z.string().regex(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$|^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/, 'Must be a valid IP address').optional(),
  userAgent: z.string().optional(),
  source: z.string().optional(), // Where the form was submitted from
});

/**
 * Inferred TypeScript types from validators
 */
export type ContactForm = z.infer<typeof ContactFormValidator>;
export type ContactInfo = z.infer<typeof ContactInfoValidator>;
export type ContactSubmissionResponse = z.infer<typeof ContactSubmissionResponseValidator>;
export type ContactFormSubmission = z.infer<typeof ContactFormSubmissionValidator>;

/**
 * Validation helper functions
 */
export const validateContactForm = (data: unknown): ContactForm => {
  return ContactFormValidator.parse(data);
};

export const validateContactInfo = (data: unknown): ContactInfo => {
  return ContactInfoValidator.parse(data);
};

export const validateContactSubmissionResponse = (data: unknown): ContactSubmissionResponse => {
  return ContactSubmissionResponseValidator.parse(data);
};

export const validateContactFormSubmission = (data: unknown): ContactFormSubmission => {
  return ContactFormSubmissionValidator.parse(data);
};

/**
 * Safe validation functions that return success/error results
 */
export const safeValidateContactForm = (data: unknown) => {
  return ContactFormValidator.safeParse(data);
};

export const safeValidateContactInfo = (data: unknown) => {
  return ContactInfoValidator.safeParse(data);
};

export const safeValidateContactSubmissionResponse = (data: unknown) => {
  return ContactSubmissionResponseValidator.safeParse(data);
};

/**
 * Field-specific validators for real-time validation
 */
export const validateEmail = (email: string) => {
  const emailSchema = z.string().email();
  return emailSchema.safeParse(email);
};

export const validateName = (name: string) => {
  const nameSchema = z.string()
    .min(2, 'Name must be at least 2 characters')
    .regex(/^[a-zA-Z\s\-']+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes');
  return nameSchema.safeParse(name);
};

export const validateSubject = (subject: string) => {
  const subjectSchema = z.string().min(3, 'Subject must be at least 3 characters');
  return subjectSchema.safeParse(subject);
};

export const validateMessage = (message: string) => {
  const messageSchema = z.string().min(10, 'Message must be at least 10 characters');
  return messageSchema.safeParse(message);
};