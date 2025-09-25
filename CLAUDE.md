# Claude Code Project Guidelines

## Component Creation Rules

When a new component is requested, follow these strict rules:

### Directory Structure
```
src/components/
├── shadcn/     # Shadcn UI components (Tailwind CSS based)
└── emotion/    # Emotion styled components (CSS-in-JS)
```

### Component Creation Process

1. **Create a new folder** with the requested component name inside the appropriate style system directory:
   - For Shadcn components: `src/components/shadcn/[component-name]/`
   - For Emotion components: `src/components/emotion/[component-name]/`

2. **Create both versions** of the component:
   - When a component is requested for one style system, also create the equivalent in the other system
   - This ensures feature parity between both styling approaches

### Example Structure

If a "Card" component is requested:
```
src/components/
├── shadcn/
│   └── card/
│       ├── card.tsx         # Shadcn version using Tailwind classes
│       └── index.ts          # Re-export for cleaner imports
└── emotion/
    └── card/
        ├── card.tsx          # Emotion version using styled components
        └── index.ts          # Re-export for cleaner imports
```

### Implementation Guidelines

#### Shadcn Components
- Use Tailwind CSS utility classes
- Follow shadcn/ui patterns (using cva for variants)
- Include proper TypeScript types
- Use the `cn()` utility from `@/lib/utils` for className merging

#### Emotion Components
- Use `@emotion/styled` for styled components
- Keep styles co-located with the component
- Support theming through props
- Maintain TypeScript type safety

### Import Conventions
- Shadcn: `import { ComponentName } from '@/components/shadcn/component-name'`
- Emotion: `import { ComponentName } from '@/components/emotion/component-name'`

### Testing Requirements
- Each component should be tested with both styling systems
- Verify that both versions maintain the same functionality
- Ensure proper TypeScript types are exported

## Project Configuration

### Style Systems
- **Shadcn UI**: Uses Tailwind CSS v3 with PostCSS
- **Emotion**: Uses @emotion/react and @emotion/styled for CSS-in-JS

### Path Aliases
- `@/` is configured to point to `src/` directory

### Development Server
- Default port: 5173
- Alternative port: 5174 (use `npm run dev -- --port 5174`)