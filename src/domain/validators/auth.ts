import { z } from 'zod';

/**
 * Permission validator - already exists in AuthContext but defining here for completeness
 */
export const PermissionValidator = z.enum([
  'SuperAdminAccess',
  'DealerAccess',
  'ConsumerAccess',
  'StaffAccess',
]);

/**
 * Permissions array validator
 */
export const PermissionsValidator = z.array(PermissionValidator);

/**
 * User profile validator for authentication and user management
 */
export const UserProfileValidator = z.object({
  id: z.string().uuid('User ID must be a valid UUID'),
  email: z.string().email('Must be a valid email address'),
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters'),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username must be less than 30 characters')
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      'Username can only contain letters, numbers, underscores, and hyphens'
    ),
  avatar: z.string().url('Avatar must be a valid URL').optional(),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
  location: z.string().max(100, 'Location must be less than 100 characters').optional(),
  website: z.string().url('Website must be a valid URL').optional(),
  permissions: PermissionsValidator,
  isActive: z.boolean().default(true),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  lastLoginAt: z.string().datetime().optional(),
});

/**
 * Login credentials validator
 */
export const LoginCredentialsValidator = z.object({
  email: z.string().email('Must be a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional().default(false),
});

/**
 * Registration data validator
 */
export const RegistrationValidator = z
  .object({
    email: z.string().email('Must be a valid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(128, 'Password must be less than 128 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
    confirmPassword: z.string(),
    firstName: z
      .string()
      .min(1, 'First name is required')
      .max(50, 'First name must be less than 50 characters'),
    lastName: z
      .string()
      .min(1, 'Last name is required')
      .max(50, 'Last name must be less than 50 characters'),
    username: z
      .string()
      .min(3, 'Username must be at least 3 characters')
      .max(30, 'Username must be less than 30 characters')
      .regex(
        /^[a-zA-Z0-9_-]+$/,
        'Username can only contain letters, numbers, underscores, and hyphens'
      ),
    acceptTerms: z
      .boolean()
      .refine(val => val === true, 'You must accept the terms and conditions'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

/**
 * Password reset request validator
 */
export const PasswordResetRequestValidator = z.object({
  email: z.string().email('Must be a valid email address'),
});

/**
 * Password reset validator
 */
export const PasswordResetValidator = z
  .object({
    token: z.string().min(1, 'Reset token is required'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

/**
 * Auth response validator for API responses
 */
export const AuthResponseValidator = z.object({
  success: z.boolean(),
  user: UserProfileValidator.optional(),
  accessToken: z.string().optional(),
  refreshToken: z.string().optional(),
  expiresIn: z.number().positive().optional(),
  message: z.string().optional(),
});

/**
 * Token refresh validator
 */
export const TokenRefreshValidator = z.object({
  refreshToken: z.string().min(1, 'Refresh token is required'),
});

/**
 * Inferred TypeScript types from validators
 */
export type Permission = z.infer<typeof PermissionValidator>;
export type Permissions = z.infer<typeof PermissionsValidator>;
export type UserProfile = z.infer<typeof UserProfileValidator>;
export type LoginCredentials = z.infer<typeof LoginCredentialsValidator>;
export type Registration = z.infer<typeof RegistrationValidator>;
export type PasswordResetRequest = z.infer<typeof PasswordResetRequestValidator>;
export type PasswordReset = z.infer<typeof PasswordResetValidator>;
export type AuthResponse = z.infer<typeof AuthResponseValidator>;
export type TokenRefresh = z.infer<typeof TokenRefreshValidator>;

/**
 * Validation helper functions
 */
export const validateUserProfile = (data: unknown): UserProfile => {
  return UserProfileValidator.parse(data);
};

export const validateLoginCredentials = (data: unknown): LoginCredentials => {
  return LoginCredentialsValidator.parse(data);
};

export const validateRegistration = (data: unknown): Registration => {
  return RegistrationValidator.parse(data);
};

export const validatePasswordResetRequest = (data: unknown): PasswordResetRequest => {
  return PasswordResetRequestValidator.parse(data);
};

export const validatePasswordReset = (data: unknown): PasswordReset => {
  return PasswordResetValidator.parse(data);
};

export const validateAuthResponse = (data: unknown): AuthResponse => {
  return AuthResponseValidator.parse(data);
};

/**
 * Safe validation functions that return success/error results
 */
export const safeValidateUserProfile = (data: unknown) => {
  return UserProfileValidator.safeParse(data);
};

export const safeValidateLoginCredentials = (data: unknown) => {
  return LoginCredentialsValidator.safeParse(data);
};

export const safeValidateRegistration = (data: unknown) => {
  return RegistrationValidator.safeParse(data);
};

export const safeValidateAuthResponse = (data: unknown) => {
  return AuthResponseValidator.safeParse(data);
};
