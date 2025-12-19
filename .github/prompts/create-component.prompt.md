---
description: Generate a React TypeScript component
---

# Create Component

Generate a React component in TypeScript.

## Instructions

Create a functional React component with:
- Props interface with TypeScript types
- JSDoc comment with description
- Return type annotation (`: JSX.Element`)
- Proper imports and exports

## Template

```typescript
/**
 * ComponentName - Brief description
 * @param props - Component properties
 */
interface ComponentNameProps {
  // props here
}

export default function ComponentName(props: ComponentNameProps): JSX.Element {
  return (
    <div>
      {/* component content */}
    </div>
  );
}
```

Follow project TypeScript instructions automatically (explicit types, JSDoc).
