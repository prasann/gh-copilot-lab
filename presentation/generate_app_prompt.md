# React App Generator Prompt

Create a single-component React application with the following requirements:

## Core Features

- **Data Source**: Use a JSON file as the database (agenda.json is the data)
- **Architecture**: Single React component in TypeScript with separate utility files
- **Styling**: Minimal inline or basic CSS

## Deliverables

1. **App Component** Main and only component
2. **TypeScript Utilities** - Separate .ts files for business logic
3. **Package.json** - Minimal dependencies (React, TypeScript,Vite)
4. **README.md** - Clear setup and run instructions

## Technical Requirements

- Functional component with hooks
- No external UI libraries
- Include basic error handling
- Responsive design (mobile-friendly)
- **Separate TypeScript files** for business logic (not just TSX)

## Required TypeScript Logic Files

Create **ONE simple TypeScript file** to demonstrate TypeScript best practices:

1. **utils.ts** - Simple utility functions for agenda calculations

### Expected TypeScript Features

The `.ts` file should demonstrate:

- Explicit return types on all functions
- Interface definitions for agenda item structure
- JSDoc documentation with clear descriptions
- Basic time calculation utilities

## Output Structure

```text
/app
    ├── package.json
    ├── README.md
    ├── src/
    │   ├── App.tsx
    │   ├── utils.ts           # Simple utility functions
    │   └── data.json
    └── index.html
```

## Specific Implementation Requirements

### utils.ts

Create just 2-3 simple functions:

- `calculateTotalMinutes()` - Sum all agenda item durations
- `formatDuration()` - Convert minutes to "X min" or "X hr Y min" format
- Define `AgendaItem` interface for the agenda JSON structure

Keep it simple for live demo purposes!
