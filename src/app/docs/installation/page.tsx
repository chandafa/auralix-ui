import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { CodeBlock } from "@/components/docs/CodeBlock";

export const metadata = {
  title: "Installation - Aural UI",
  description: "How to install and setup Aural UI in your project.",
};

export default function InstallationPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge variant="info" className="mb-4">Getting Started</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Installation</h1>
        <p className="text-xl text-muted-foreground">
          How to install and setup Aural UI in your project.
        </p>
      </div>

      {/* Quick Start */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quick Start</h2>
        <p className="text-muted-foreground">
          Select your preferred framework to get started with Aural UI. 
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
                  Guide for setting up Aural UI in a Vite-powered environment.
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
            Install <code className="px-1.5 py-0.5 bg-muted rounded text-sm">aural-ui</code> and 
            its peer dependencies via npm:
          </p>
          <CodeBlock 
            code={`npm install aural-ui`}
            language="bash"
          />
        </div>
      </section>

      {/* Example Usage */}
      <section className="space-y-4">
        <h3 className="text-lg font-medium">Example Usage Components</h3>
        <CodeBlock 
          code={`import { Alert, Button, Badge } from "aural-ui";
import "aural-ui/styles.css";

export default function ExamplePage() {
  return (
    <div className="p-6 space-y-4">
      <Alert variant="success">Aural UI is ready to use!</Alert>
      
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
