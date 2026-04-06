import { z } from "zod";

/**
 * Safely parse data with a Zod schema
 * Returns parsed data if valid, or throws descriptive error
 */
export function safeParse<T extends z.ZodTypeAny>(
  schema: T,
  data: unknown,
): z.infer<T> {
  const result = schema.safeParse(data);

  if (!result.success) {
    console.error("Validation failed:", result.error.format());
    throw new Error(`Validation error: ${result.error.message}`);
  }

  return result.data;
}

/**
 * Validate data without throwing
 * Returns { success: true, data } or { success: false, error }
 */
export function validate<T extends z.ZodTypeAny>(
  schema: T,
  data: unknown,
): { success: true; data: z.infer<T> } | { success: false; error: z.ZodError } {
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  return { success: false, error: result.error };
}

/**
 * Create a validator function for a specific schema
 * Useful for callbacks and event handlers
 */
export function createValidator<T extends z.ZodTypeAny>(schema: T) {
  return (data: unknown): z.infer<T> => safeParse(schema, data);
}

/**
 * Partial validation - validates only provided fields
 */
export function validatePartial<T extends z.ZodObject<any>>(
  schema: T,
  data: unknown,
): z.infer<T> {
  return safeParse(schema.partial(), data);
}
