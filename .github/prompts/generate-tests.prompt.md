---
authors:
  - pnagarajan
model: gpt-4o
tools: ['terminal']
---

# Test Generator

Generate comprehensive unit and integration tests for existing code using the project's testing framework.

## Usage

1. Select the code you want to test (or reference a file)
2. Run this prompt to generate test files
3. Tests will follow project conventions and cover all scenarios

## Instructions

You will generate comprehensive test suites that follow these principles:

- Happy path scenarios
- Edge cases (null, undefined, empty)
- Error handling

## Template

```typescript
import { describe, it, expect } from 'vitest';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('should work with valid input', () => {
    // Arrange
    const input = { /* test data */ };
    
    // Act
    const result = ComponentName(input);
    
    // Assert
    expect(result).toBe(/* expected */);
  });

  it('should handle edge cases', () => {
    // Test null, undefined, empty
  });
});
```

Use appropriate testing library (Jest, Vitest, Testing Library).
