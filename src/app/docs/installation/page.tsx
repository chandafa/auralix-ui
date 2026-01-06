import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { CodeBlock } from "@/components/docs/CodeBlock";

export const metadata = {
  title: "Installation - Auralix UI",
  description: "How to install and setup Auralix UI in your project.",
};

export default function InstallationPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge variant="info" className="mb-4">Getting Started</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Installation</h1>
        <p className="text-xl text-muted-foreground">
          How to install and setup Auralix UI in your project.
        </p>
      </div>

      {/* Quick Start */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quick Start</h2>
        <p className="text-muted-foreground">
          Select your preferred framework to get started with Auralix UI. 
          These guides assume you already have a project with Tailwind CSS installed.
        </p>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/docs/frameworks/nextjs">
            <Card hoverable className="h-full">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  Setup instructions for Next.js App Router and Pages Router.
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/docs/frameworks/vite">
            <Card hoverable className="h-full">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">React Vite</h3>
                <p className="text-sm text-muted-foreground">
                  Guide for setting up Auralix UI in a Vite-powered environment.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* General Installation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">General Installation</h2>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Install the Package</h3>
          <p className="text-muted-foreground">
            Install <code className="px-1.5 py-0.5 bg-muted rounded text-sm">auralix-ui</code> and 
            its peer dependencies via npm:
          </p>
          <CodeBlock 
            code={`npm install auralix-ui`}
            language="bash"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Use via CDN</h3>
          <p className="text-muted-foreground">
            You can also use Auralix UI directly in the browser via CDN. Add the following to your HTML head:
          </p>
          <CodeBlock 
            code={`<!-- Styles -->
<link rel="stylesheet" href="https://unpkg.com/auralix-ui/dist/styles.css">

<!-- Dependencies -->
<script src="https://unpkg.com/react@19/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"></script>

<!-- Auralix UI -->
<script src="https://unpkg.com/auralix-ui/dist/index.global.js"></script>

<script>
  // Access components via window.AuralixUI
  const { Button } = window.AuralixUI;
</script>`}
            language="html"
          />
        </div>
      </section>

      {/* Tailwind CSS Setup */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Setup Tailwind CSS</h2>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">For Tailwind CSS v4.0+</h3>
          <p className="text-muted-foreground">
            Import the styles and configure the source in your main CSS file:
          </p>
          <CodeBlock 
            code={`@import "tailwindcss";
@import "auralix-ui/styles.css";

@source "../../node_modules/auralix-ui";`}
            language="css"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">For Tailwind CSS v3 (Legacy)</h3>
          <p className="text-muted-foreground">
            Import the styles in your main CSS or entry file:
          </p>
          <CodeBlock 
            code={`import "auralix-ui/styles.css";`}
            language="tsx"
          />
          <p className="text-muted-foreground mt-4">
            And update your <code className="px-1.5 py-0.5 bg-muted rounded text-sm">tailwind.config.js</code>:
          </p>
          <CodeBlock 
            code={`module.exports = {
  content: [
    // ...
    "./node_modules/auralix-ui/**/*.{js,mjs}",
  ],
  // ...
}`}
            language="javascript"
          />
        </div>
      </section>

      {/* Example Usage */}
      <section className="space-y-4">
        <h3 className="text-lg font-medium">Example Usage Components</h3>
        <p className="text-muted-foreground text-sm">
          If using Tailwind v3, make sure to import the styles first:
        </p>
        <CodeBlock 
          code={`import { Alert, Button, Badge } from "auralix-ui";
// import "auralix-ui/styles.css"; // Only needed for Tailwind v3

export default function ExamplePage() {
  return (
    <div className="p-6 space-y-4">
      <Alert variant="success">Auralix UI is ready to use!</Alert>
      
      <div className="flex items-center gap-2">
        <Button onClick={() => console.log('Clicked!')}>
          Action Button
        </Button>
        <Badge variant="info">New</Badge>
      </div>
    </div>
  );
}`}
          language="tsx"
        />
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <Link href="/docs/usage" className="text-violet-500 hover:underline">
              Learn how to use components →
            </Link>
          </li>
          <li>
            <Link href="/docs/theming" className="text-violet-500 hover:underline">
              Customize the theme →
            </Link>
          </li>
          <li>
            <Link href="/components/button" className="text-violet-500 hover:underline">
              Browse all components →
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
