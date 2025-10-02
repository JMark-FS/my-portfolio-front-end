import { z } from 'zod';

/**
 * Common API response wrapper validator
 */
export const ApiResponseValidator = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  data: z.unknown().optional(),
  error: z.string().optional(),
  timestamp: z.string().datetime().optional(),
  requestId: z.string().uuid().optional(),
});

/**
 * Paginated response validator
 */
export const PaginatedResponseValidator = z.object({
  success: z.boolean(),
  data: z.array(z.unknown()),
  pagination: z.object({
    page: z.number().int().positive(),
    limit: z.number().int().positive(),
    total: z.number().int().min(0),
    totalPages: z.number().int().min(0),
    hasNext: z.boolean(),
    hasPrevious: z.boolean(),
  }),
  message: z.string().optional(),
  timestamp: z.string().datetime().optional(),
});

/**
 * Error response validator
 */
export const ErrorResponseValidator = z.object({
  success: z.literal(false),
  error: z.string(),
  message: z.string(),
  statusCode: z.number().int(),
  timestamp: z.string().datetime().optional(),
  path: z.string().optional(),
  details: z.array(z.object({
    field: z.string().optional(),
    message: z.string(),
    code: z.string().optional(),
  })).optional(),
});

/**
 * File upload validator
 */
export const FileUploadValidator = z.object({
  file: z.object({
    name: z.string().min(1, 'Filename is required'),
    size: z.number().int().positive('File size must be positive'),
    type: z.string().min(1, 'File type is required'),
    lastModified: z.number().int().optional(),
  }),
  uploadUrl: z.string().url('Upload URL must be valid'),
  maxSize: z.number().int().positive().optional(),
  allowedTypes: z.array(z.string()).optional(),
});

/**
 * Generic ID validator
 */
export const IdValidator = z.string().uuid('Must be a valid UUID');

/**
 * Generic slug validator
 */
export const SlugValidator = z.string()
  .min(1, 'Slug cannot be empty')
  .max(100, 'Slug must be less than 100 characters')
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must contain only lowercase letters, numbers, and hyphens');

/**
 * Generic email validator
 */
export const EmailValidator = z.string().email('Must be a valid email address');

/**
 * Generic URL validator
 */
export const UrlValidator = z.string().url('Must be a valid URL');

/**
 * Generic date validator (ISO 8601)
 */
export const DateValidator = z.string().datetime('Must be a valid ISO 8601 date');

/**
 * Generic phone number validator
 */
export const PhoneValidator = z.string()
  .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Must be a valid phone number');

/**
 * Search query validator
 */
export const SearchQueryValidator = z.object({
  query: z.string().min(1, 'Search query cannot be empty').max(255, 'Search query must be less than 255 characters'),
  page: z.number().int().positive().optional().default(1),
  limit: z.number().int().positive().max(100).optional().default(20),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).optional().default('desc'),
  filters: z.record(z.string(), z.unknown()).optional(),
});

/**
 * Inferred TypeScript types from validators
 */
export type ApiResponse<T = unknown> = Omit<z.infer<typeof ApiResponseValidator>, 'data'> & {
  data?: T;
};

export type PaginatedResponse<T = unknown> = Omit<z.infer<typeof PaginatedResponseValidator>, 'data'> & {
  data: T[];
};

export type ErrorResponse = z.infer<typeof ErrorResponseValidator>;
export type FileUpload = z.infer<typeof FileUploadValidator>;
export type SearchQuery = z.infer<typeof SearchQueryValidator>;

/**
 * Validation helper functions
 */
export const validateApiResponse = <T>(data: unknown, dataValidator?: z.ZodSchema<T>): ApiResponse<T> => {
  const result = ApiResponseValidator.parse(data);
  if (dataValidator && result.data !== undefined) {
    result.data = dataValidator.parse(result.data);
  }
  return result as ApiResponse<T>;
};

export const validatePaginatedResponse = <T>(
  data: unknown, 
  itemValidator: z.ZodSchema<T>
): PaginatedResponse<T> => {
  const result = PaginatedResponseValidator.parse(data);
  const validatedData = result.data.map(item => itemValidator.parse(item));
  return { ...result, data: validatedData };
};

export const validateErrorResponse = (data: unknown): ErrorResponse => {
  return ErrorResponseValidator.parse(data);
};

export const validateSearchQuery = (data: unknown): SearchQuery => {
  return SearchQueryValidator.parse(data);
};

/**
 * Safe validation functions
 */
export const safeValidateApiResponse = (data: unknown) => {
  return ApiResponseValidator.safeParse(data);
};

export const safeValidateErrorResponse = (data: unknown) => {
  return ErrorResponseValidator.safeParse(data);
};

export const safeValidateSearchQuery = (data: unknown) => {
  return SearchQueryValidator.safeParse(data);
};