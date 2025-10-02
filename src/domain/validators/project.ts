import { z } from 'zod';

/**
 * Project validator schema for validating project data from external APIs
 */
export const ProjectValidator = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  description: z.string().min(1, 'Description is required').max(1000, 'Description must be less than 1000 characters'),
  image: z.string().url('Image must be a valid URL').optional().or(z.string().min(1)),
  technologies: z.array(z.string().min(1, 'Technology name cannot be empty')).min(1, 'At least one technology is required'),
  githubUrl: z.string().url('GitHub URL must be valid').optional(),
  liveUrl: z.string().url('Live URL must be valid').optional(),
  featured: z.boolean().optional().default(false)
});

/**
 * Array of projects validator
 */
export const ProjectsArrayValidator = z.array(ProjectValidator);

/**
 * Project creation/update validator (without ID for new projects)
 */
export const ProjectCreateValidator = ProjectValidator.omit({ id: true });

/**
 * Project update validator (partial fields except ID)
 */
export const ProjectUpdateValidator = ProjectValidator.partial().required({ id: true });

/**
 * Inferred TypeScript types from validators
 */
export type Project = z.infer<typeof ProjectValidator>;
export type ProjectCreate = z.infer<typeof ProjectCreateValidator>;
export type ProjectUpdate = z.infer<typeof ProjectUpdateValidator>;

/**
 * Validation helper functions
 */
export const validateProject = (data: unknown): Project => {
  return ProjectValidator.parse(data);
};

export const validateProjects = (data: unknown): Project[] => {
  return ProjectsArrayValidator.parse(data);
};

export const validateProjectCreate = (data: unknown): ProjectCreate => {
  return ProjectCreateValidator.parse(data);
};

export const validateProjectUpdate = (data: unknown): ProjectUpdate => {
  return ProjectUpdateValidator.parse(data);
};

/**
 * Safe validation functions that return success/error results
 */
export const safeValidateProject = (data: unknown) => {
  return ProjectValidator.safeParse(data);
};

export const safeValidateProjects = (data: unknown) => {
  return ProjectsArrayValidator.safeParse(data);
};