# Zod Schemas

This directory contains Zod validation schemas that mirror the TypeScript types defined in `/src/types/`.

## Structure

- **app.schemas.ts** - Application settings schemas
- **test.schemas.ts** - Test configuration schemas
- **questions.schemas.ts** - Question type schemas with discriminated unions
- **answers.schemas.ts** - Answer and result schemas
- **validation.utils.ts** - Helper functions for validation
- **index.ts** - Centralized exports

## Usage

### Basic Validation

```typescript
import { questionSchema, safeParse } from '@/schemas';

// Parse and validate data
const question = safeParse(questionSchema, unknownData);

// Or use the schema directly
const result = questionSchema.safeParse(data);
if (result.success) {
  console.log(result.data);
} else {
  console.error(result.error);
}
```

### Type Inference

All schemas export corresponding TypeScript types:

```typescript
import { Question, Answer, UnloveTestState } from '@/schemas';

// These types are inferred from the Zod schemas
const myQuestion: Question = {
  id: "q1",
  format: "radio",
  category: "values",
  wording: { EN: "Do you agree?" },
  advice: { EN: "Think carefully" },
  coefficient: 1.5,
};
```

### Validation Utilities

```typescript
import { validate, createValidator, validatePartial } from '@/schemas/validation.utils';
import { testSettingsStateSchema } from '@/schemas';

// Non-throwing validation
const result = validate(testSettingsStateSchema, data);
if (result.success) {
  // result.data is typed
} else {
  // result.error is ZodError
}

// Create reusable validator
const validateTestSettings = createValidator(testSettingsStateSchema);
const settings = validateTestSettings(data);

// Partial validation (optional fields)
const partial = validatePartial(testSettingsStateSchema, { testType: "quick" });
```

### API/Form Validation

```typescript
import { answeredQuestionSchema } from '@/schemas';

// Validate API responses
fetch('/api/answer')
  .then(res => res.json())
  .then(data => {
    const validAnswer = answeredQuestionSchema.parse(data);
    // Safe to use validAnswer
  });

// Validate form submissions
function handleSubmit(formData: unknown) {
  const result = answeredQuestionSchema.safeParse(formData);
  if (!result.success) {
    return { errors: result.error.format() };
  }
  // Process valid data
}
```

### Discriminated Unions

The schemas use Zod's discriminated unions for type-safe variant handling:

```typescript
import { questionSchema } from '@/schemas';

function processQuestion(q: unknown) {
  const question = questionSchema.parse(q);
  
  // TypeScript knows the exact type based on format
  switch (question.format) {
    case "radio":
      // question is RadioQuestion
      console.log(question.wording);
      break;
    case "inputSlider":
      // question is InputSliderQuestion
      console.log(question.mainWording, question.min, question.max);
      break;
    case "slider":
      // question is SliderQuestion
      console.log(question.min, question.max, question.step);
      break;
  }
}
```

## Benefits

1. **Runtime Safety**: Validate data at runtime (API responses, user input, etc.)
2. **Type Inference**: Generate TypeScript types from schemas (single source of truth)
3. **Better Errors**: Get detailed validation error messages
4. **Documentation**: Schemas serve as living documentation
5. **Parsing**: Transform and coerce data during validation

## Migration Path

You can gradually adopt these schemas:

1. Keep existing types in `/src/types/` for now
2. Use Zod schemas for validation at boundaries (API, forms, storage)
3. Eventually, migrate to using Zod-inferred types everywhere
4. Remove old type files once fully migrated

## Example: State Validation

```typescript
import { unloveTestStateSchema } from '@/schemas';

// Validate Redux state on hydration
const persistedState = localStorage.getItem('unloveTest');
if (persistedState) {
  const parsed = JSON.parse(persistedState);
  const validated = unloveTestStateSchema.safeParse(parsed);
  
  if (validated.success) {
    // Safe to restore state
    store.dispatch(restoreState(validated.data));
  } else {
    // Invalid state, start fresh
    console.error('Invalid persisted state:', validated.error);
  }
}
```
