import { Badge } from "@/components/ui/Badge";
import { Alert } from "@/components/ui/Alert";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Usage - Auralix UI",
  description: "Learn how to use Auralix UI components in your project.",
};

export default function UsagePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge variant="info" className="mb-4">Getting Started</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Usage</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to import and use Auralix UI components in your project.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Usage</h2>
        <p className="text-muted-foreground">
          Import the component from the package and use it in your React application:
        </p>
        <CodeBlock 
          code={`import { Button } from "auralix-ui";

export default function MyComponent() {
  return (
    <Button variant="primary" size="lg">
      Click me
    </Button>
  );
}`}
          language="tsx"
        />
        
        <div className="p-6 rounded-[2rem] border border-white/10 bg-background/60 backdrop-blur-md">
          <p className="text-sm text-muted-foreground mb-4">Preview:</p>
          <Button>Click me</Button>
        </div>
      </section>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Component Variants</h2>
        <p className="text-muted-foreground">
          Most components support multiple variants to match different use cases:
        </p>
        <CodeBlock 
          code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`}
          language="tsx"
        />
        
        <div className="p-6 rounded-[2rem] border border-white/10 bg-background/60 backdrop-blur-md">
          <p className="text-sm text-muted-foreground mb-4">Preview:</p>
          <div className="flex flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sizes</h2>
        <p className="text-muted-foreground">
          Components typically support small, medium, and large sizes:
        </p>
        <CodeBlock 
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
          language="tsx"
        />
        
        <div className="p-6 rounded-[2rem] border border-white/10 bg-background/60 backdrop-blur-md">
          <p className="text-sm text-muted-foreground mb-4">Preview:</p>
          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
      </section>

      {/* Composition */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Component Composition</h2>
        <p className="text-muted-foreground">
          Complex components like Card and Modal use composition for flexibility:
        </p>
        <CodeBlock 
          code={`import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardFooter 
} from "auralix-ui";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
          language="tsx"
        />
      </section>

      {/* Custom Styling */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Custom Styling</h2>
        <p className="text-muted-foreground">
          All components accept a <code className="px-1.5 py-0.5 bg-muted rounded">className</code> prop 
          for additional styling with Tailwind classes:
        </p>
        <CodeBlock 
          code={`<Button className="w-full bg-gradient-to-r from-violet-500 to-purple-600">
  Full Width Gradient Button
</Button>`}
          language="tsx"
        />
        
        <Alert variant="info">
          The <code className="px-1.5 py-0.5 bg-muted rounded">cn()</code> utility function 
          automatically merges your custom classes with the component&apos;s default classes.
        </Alert>
      </section>

      {/* TypeScript */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">TypeScript Support</h2>
        <p className="text-muted-foreground">
          All components are fully typed. You can import prop types for use in your own components:
        </p>
        <CodeBlock 
          code={`import { Button, type ButtonProps } from "auralix-ui";

interface MyButtonProps extends ButtonProps {
  loading?: boolean;
}

export function MyButton({ loading, children, ...props }: MyButtonProps) {
  return (
    <Button {...props} disabled={loading}>
      {loading ? "Loading..." : children}
    </Button>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
