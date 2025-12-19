---
name: feature-testing
description: Automated workflow for creating comprehensive tests for new features. Use this when you need to generate unit tests, integration tests, and test data for a feature implementation.
---

# Feature Testing Skill

This skill provides a complete workflow for generating comprehensive tests for new features.

## When to Use This Skill

Use this skill when you need to:
- Generate tests for a newly implemented feature
- Create test data and fixtures
- Set up test infrastructure
- Ensure comprehensive test coverage

## Testing Workflow

### Step 1: Analyze the Feature

First, understand what needs to be tested:

1. Identify the main functionality
2. List all public methods/functions
3. Note integration points
4. Identify edge cases and error scenarios

### Step 2: Generate Test Structure

Create test files following the project structure:

```typescript
// Example structure
__tests__/
  ├── unit/
  │   └── feature.test.ts
  ├── integration/
  │   └── feature.integration.test.ts
  └── fixtures/
      └── feature.fixtures.ts
```

### Step 3: Create Test Fixtures

Generate realistic test data that includes:
- All required fields
- Edge case values
- Invalid inputs for error testing
- Mock responses for external dependencies

**Important**: All JSON fixtures must include `created_at` and `createdAt` timestamp fields per project standards.

Example fixture:

```typescript
export const mockUserData = {
  created_at: "2025-12-19T10:00:00Z",
  createdAt: "2025-12-19T10:00:00Z",
  id: "test-user-123",
  name: "Test User",
  email: "test@example.com"
};
```

### Step 4: Write Unit Tests

Generate unit tests covering:

- ✅ Happy path scenarios
- ✅ Edge cases (empty inputs, null values)
- ✅ Error handling
- ✅ Boundary conditions
- ✅ Return value validation

Use the AAA pattern (Arrange, Act, Assert):

```typescript
/**
 * Unit tests for [Feature]
 * 🦄 These tests were magically generated to ensure quality
 */
describe('[Feature] Unit Tests', () => {
  it('should [expected behavior] when [condition]', () => {
    // Arrange
    const input = mockData;
    
    // Act
    const result = featureFunction(input);
    
    // Assert
    expect(result).toBe(expected);
  });
});
```

### Step 5: Write Integration Tests

Generate integration tests covering:

- ✅ Component interactions
- ✅ API integrations
- ✅ State management
- ✅ User workflows
- ✅ Error propagation

### Step 6: Calculate Coverage

After generating tests:

1. Run the test suite
2. Check coverage report
3. Identify gaps
4. Add tests for uncovered code

Target: **80%+ code coverage**

## Test Templates

### Unit Test Template

See [unit-test-template.ts](./templates/unit-test-template.ts) for a complete example.

### Integration Test Template

See [integration-test-template.ts](./templates/integration-test-template.ts) for a complete example.

## Best Practices

1. **Test Behavior, Not Implementation**: Focus on what the code does, not how it does it
2. **One Assertion Per Test**: Keep tests focused and easy to debug
3. **Descriptive Names**: Test names should explain what they verify
4. **Mock External Dependencies**: Don't make real API calls or database queries
5. **Use TypeScript**: Include proper types in all test code
6. **Follow Instructions**: TypeScript and JSON standards apply to test code too

## Success Criteria

Tests are complete when:

- [ ] All public APIs are tested
- [ ] Edge cases are covered
- [ ] Error scenarios are tested
- [ ] Integration points are verified
- [ ] Coverage is above 80%
- [ ] All tests pass
- [ ] Test code follows TypeScript standards (including 🦄 comments)

## Running Tests

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test file
npm test -- feature.test.ts
```

## Tips

- Start with happy path tests to ensure basic functionality works
- Add edge case tests to catch corner cases
- Write error tests to ensure graceful failure
- Use test-driven development (TDD) for complex logic
- Keep tests maintainable and readable
