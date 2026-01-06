# Auralix UI

Modern UI component library with glass morphism effects for React.

## Installation

```bash
npm install auralix-ui
```

## Setup

### 1. Add CSS Variables

Import the styles in your main CSS file or `_app.tsx`/`layout.tsx`:

```tsx
import "auralix-ui/styles.css";
```

Or add the CSS variables manually to your global CSS.

### 2. Configure Tailwind CSS

Add the following to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ... your paths
    "./node_modules/auralix-ui/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        border: "var(--border)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        success: "var(--success)",
        warning: "var(--warning)",
        info: "var(--info)",
        ring: "var(--ring)",
      },
    },
  },
};
```

## Usage

```tsx
import { Button, Card, CardContent, Alert } from "auralix-ui";

export default function Example() {
  return (
    <div className="p-6 space-y-4">
      <Alert variant="success">Auralix UI is ready to use!</Alert>

      <Card hoverable>
        <CardContent>
          <Button>Click me</Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

## Components

- **Button** - Primary, secondary, outline, ghost, destructive variants
- **Badge** - Status indicators with color variants
- **Alert** - Success, error, warning, info alerts
- **Card** - Container with header, title, content, footer
- **Input** - Text input with validation states
- **Select** - Dropdown select with options
- **Textarea** - Multi-line text input
- **Modal** - Dialog with backdrop
- **Tooltip** - Hover tooltips
- **Table** - Data table with striped/hoverable options

## License

MIT
