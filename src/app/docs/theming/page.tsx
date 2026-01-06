import { Badge } from "@/components/ui/Badge";
import { Alert } from "@/components/ui/Alert";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata = {
  title: "Theming - Auralix UI",
  description: "Customize the look and feel of Auralix UI components.",
};

export default function ThemingPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge variant="info" className="mb-4">Customization</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Theming</h1>
        <p className="text-xl text-muted-foreground">
          Customize colors, typography, and styling to match your brand.
        </p>
      </div>

      {/* CSS Variables */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">CSS Variables</h2>
        <p className="text-muted-foreground">
          Auralix UI uses CSS variables for theming. You can customize the look by 
          modifying these variables in your global CSS file:
        </p>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Light Mode</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-white border"></div>
                  <code>--background: #ffffff</code>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#09090b]"></div>
                  <code>--foreground: #09090b</code>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#f4f4f5]"></div>
                  <code>--muted: #f4f4f5</code>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#18181b]"></div>
                  <code>--primary: #18181b</code>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Dark Mode</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#09090b] border border-white/20"></div>
                  <code>--background: #09090b</code>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#fafafa]"></div>
                  <code>--foreground: #fafafa</code>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#27272a]"></div>
                  <code>--muted: #27272a</code>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#fafafa]"></div>
                  <code>--primary: #fafafa</code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Full Variables List */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">All Variables</h2>
        <p className="text-muted-foreground">
          Here&apos;s the complete list of CSS variables you can customize:
        </p>
        <CodeBlock 
          code={`:root {
  /* Background & Foreground */
  --background: #ffffff;
  --foreground: #09090b;
  
  /* Muted (secondary backgrounds) */
  --muted: #f4f4f5;
  --muted-foreground: #71717a;
  
  /* Borders */
  --border: #e4e4e7;
  
  /* Primary color (buttons, links) */
  --primary: #18181b;
  --primary-foreground: #fafafa;
  
  /* Secondary color */
  --secondary: #f4f4f5;
  --secondary-foreground: #18181b;
  
  /* Status colors */
  --destructive: #ef4444;
  --destructive-foreground: #fafafa;
  --success: #22c55e;
  --warning: #f59e0b;
  --info: #3b82f6;
  
  /* Focus ring */
  --ring: #18181b;
  
  /* Border radius */
  --radius: 2rem;
}`}
          language="css"
        />
      </section>

      {/* Custom Brand Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Custom Brand Colors</h2>
        <p className="text-muted-foreground">
          To use your own brand colors, simply update the primary variables:
        </p>
        <CodeBlock 
          code={`:root {
  /* Example: Blue brand color */
  --primary: #2563eb;
  --primary-foreground: #ffffff;
  --ring: #2563eb;
}

.dark {
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
  --ring: #3b82f6;
}`}
          language="css"
        />
        
        <Alert variant="info">
          After updating CSS variables, all components will automatically use your new colors.
        </Alert>
      </section>

      {/* Dark Mode */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dark Mode</h2>
        <p className="text-muted-foreground">
          Auralix UI supports dark mode out of the box. The theme switches based on 
          the <code className="px-1.5 py-0.5 bg-muted rounded">.dark</code> class 
          on the <code className="px-1.5 py-0.5 bg-muted rounded">html</code> element.
        </p>
        <CodeBlock 
          code={`// ThemeContext.tsx - Toggle dark mode
const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  document.documentElement.classList.toggle("dark", newTheme === "dark");
  localStorage.setItem("theme", newTheme);
};`}
          language="tsx"
        />
      </section>

      {/* Border Radius */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Border Radius</h2>
        <p className="text-muted-foreground">
          The default border radius is 2rem for a modern look. You can adjust it:
        </p>
        <CodeBlock 
          code={`:root {
  /* Smaller radius for a more compact look */
  --radius: 0.5rem;
  
  /* Or keep it round and modern */
  --radius: 2rem;
}`}
          language="css"
        />
      </section>

      {/* Glass Effect */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Glass Effect</h2>
        <p className="text-muted-foreground">
          Auralix UI includes glass morphism utilities for premium styling:
        </p>
        <CodeBlock 
          code={`/* Use these classes for glass effects */
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}

.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Example usage */
<div className="glass rounded-[2rem] p-6">
  Glass container
</div>`}
          language="css"
        />
      </section>
    </div>
  );
}
