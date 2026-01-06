# Auralix UI

Modern UI component library with glass morphism effects for React.

## Installation

```bash
npm install auralix-ui
```

### CDN

```html
<!-- Styles -->
<link rel="stylesheet" href="https://unpkg.com/auralix-ui/dist/styles.css" />

<!-- Peer Dependencies -->
<script src="https://unpkg.com/react@19/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"></script>

<!-- Auralix UI -->
<script src="https://unpkg.com/auralix-ui/dist/index.global.js"></script>

<script>
  // Access components via window.AuralixUI
  const { Button, Card } = window.AuralixUI;
</script>
```

## Setup

### Tailwind CSS v4

Import the styles in your main CSS file:

```css
@import "tailwindcss";
@import "auralix-ui/styles.css";

/* Configure Tailwind to scan the package */
@source "../node_modules/auralix-ui";
```

### Tailwind CSS v3 (Legacy)

1. Import the styles:

```tsx
import "auralix-ui/styles.css";
```

2. Add the library to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ...
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
        destructive: "var(--destructive)",
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
