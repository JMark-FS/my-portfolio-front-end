import { z } from 'zod';

/**
 * Skills validator for portfolio skills data
 */
export const SkillValidator = z.object({
  id: z.string().uuid().optional(),
  name: z
    .string()
    .min(1, 'Skill name is required')
    .max(50, 'Skill name must be less than 50 characters'),
  category: z.enum([
    'Frontend',
    'Backend',
    'Database',
    'DevOps',
    'Mobile',
    'Design',
    'Testing',
    'Other',
  ]),
  proficiency: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Expert']),
  yearsOfExperience: z.number().min(0).max(50).optional(),
  isActive: z.boolean().default(true),
});

/**
 * Skills array validator
 */
export const SkillsArrayValidator = z.array(SkillValidator);

/**
 * Experience validator for work experience data
 */
export const ExperienceValidator = z.object({
  id: z.string().uuid().optional(),
  title: z
    .string()
    .min(1, 'Job title is required')
    .max(100, 'Job title must be less than 100 characters'),
  company: z
    .string()
    .min(1, 'Company name is required')
    .max(100, 'Company name must be less than 100 characters'),
  location: z.string().max(100, 'Location must be less than 100 characters').optional(),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Start date must be in YYYY-MM-DD format'),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'End date must be in YYYY-MM-DD format')
    .optional(),
  isCurrent: z.boolean().default(false),
  description: z.string().max(1000, 'Description must be less than 1000 characters').optional(),
  responsibilities: z.array(z.string().min(1)).optional(),
  achievements: z.array(z.string().min(1)).optional(),
  technologies: z.array(z.string().min(1)).optional(),
  companyWebsite: z.string().url('Company website must be a valid URL').optional(),
  isActive: z.boolean().default(true),
});

/**
 * Experience array validator
 */
export const ExperienceArrayValidator = z.array(ExperienceValidator);

/**
 * Education validator for educational background data
 */
export const EducationValidator = z.object({
  id: z.string().uuid().optional(),
  institution: z
    .string()
    .min(1, 'Institution name is required')
    .max(100, 'Institution name must be less than 100 characters'),
  degree: z
    .string()
    .min(1, 'Degree is required')
    .max(100, 'Degree must be less than 100 characters'),
  fieldOfStudy: z.string().max(100, 'Field of study must be less than 100 characters').optional(),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Start date must be in YYYY-MM-DD format'),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'End date must be in YYYY-MM-DD format')
    .optional(),
  isCurrent: z.boolean().default(false),
  gpa: z.number().min(0).max(4.0).optional(),
  honors: z.array(z.string().min(1)).optional(),
  relevantCourses: z.array(z.string().min(1)).optional(),
  description: z.string().max(500, 'Description must be less than 500 characters').optional(),
  institutionWebsite: z.string().url('Institution website must be a valid URL').optional(),
  isActive: z.boolean().default(true),
});

/**
 * Education array validator
 */
export const EducationArrayValidator = z.array(EducationValidator);

/**
 * Portfolio/About page data validator
 */
export const PortfolioDataValidator = z.object({
  personalInfo: z.object({
    name: z.string().min(1, 'Name is required'),
    title: z.string().min(1, 'Professional title is required'),
    bio: z.string().max(1000, 'Bio must be less than 1000 characters'),
    location: z.string().max(100, 'Location must be less than 100 characters').optional(),
    avatar: z.string().url('Avatar must be a valid URL').optional(),
    resume: z.string().url('Resume must be a valid URL').optional(),
  }),
  skills: SkillsArrayValidator,
  experience: ExperienceArrayValidator,
  education: EducationArrayValidator,
  socialLinks: z
    .object({
      email: z.string().email().optional(),
      linkedin: z.string().url().optional(),
      github: z.string().url().optional(),
      website: z.string().url().optional(),
      twitter: z.string().url().optional(),
      portfolio: z.string().url().optional(),
    })
    .optional(),
  preferences: z
    .object({
      isPublic: z.boolean().default(true),
      showEmail: z.boolean().default(true),
      showPhone: z.boolean().default(false),
      theme: z.enum(['light', 'dark', 'auto']).default('auto'),
    })
    .optional(),
});

/**
 * Inferred TypeScript types from validators
 */
export type Skill = z.infer<typeof SkillValidator>;
export type Skills = z.infer<typeof SkillsArrayValidator>;
export type Experience = z.infer<typeof ExperienceValidator>;
export type Experiences = z.infer<typeof ExperienceArrayValidator>;
export type Education = z.infer<typeof EducationValidator>;
export type Educations = z.infer<typeof EducationArrayValidator>;
export type PortfolioData = z.infer<typeof PortfolioDataValidator>;

/**
 * Validation helper functions
 */
export const validateSkill = (data: unknown): Skill => {
  return SkillValidator.parse(data);
};

export const validateSkills = (data: unknown): Skills => {
  return SkillsArrayValidator.parse(data);
};

export const validateExperience = (data: unknown): Experience => {
  return ExperienceValidator.parse(data);
};

export const validateExperiences = (data: unknown): Experiences => {
  return ExperienceArrayValidator.parse(data);
};

export const validateEducation = (data: unknown): Education => {
  return EducationValidator.parse(data);
};

export const validateEducations = (data: unknown): Educations => {
  return EducationArrayValidator.parse(data);
};

export const validatePortfolioData = (data: unknown): PortfolioData => {
  return PortfolioDataValidator.parse(data);
};

/**
 * Safe validation functions that return success/error results
 */
export const safeValidateSkill = (data: unknown) => {
  return SkillValidator.safeParse(data);
};

export const safeValidateSkills = (data: unknown) => {
  return SkillsArrayValidator.safeParse(data);
};

export const safeValidateExperience = (data: unknown) => {
  return ExperienceValidator.safeParse(data);
};

export const safeValidateEducation = (data: unknown) => {
  return EducationValidator.safeParse(data);
};

export const safeValidatePortfolioData = (data: unknown) => {
  return PortfolioDataValidator.safeParse(data);
};
