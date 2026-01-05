import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata = {
  title: "NextJS - Aural UI",
  description: "How to install and setup Aural UI in NextJS.",
};

export default function NextJSPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge variant="info" className="mb-4">Framework guides</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">NextJS</h1>
        <p className="text-xl text-muted-foreground">
          How to install and setup Aural UI in NextJS
        </p>
      </div>

      {/* Setup NextJS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Setup NextJS</h2>
        <CodeBlock 
          code={`npx create-next-app@latest`}
          language="bash"
        />
      </section>

      {/* Setup Aural UI */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Setup Aural UI</h2>
        <CodeBlock 
          code={`npm install aural-ui`}
          language="bash"
        />
      </section>

      {/* Import Styles */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Import Styles</h2>
        <p className="text-muted-foreground">
          Add the Aural UI styles to your <code className="px-1.5 py-0.5 bg-muted rounded text-sm">layout.tsx</code>:
        </p>
        <CodeBlock 
          code={`// app/layout.tsx
import "aural-ui/styles.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}
          language="tsx"
        />
      </section>

      {/* Configure Tailwind */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Configure Tailwind</h2>
        <CodeBlock 
          code={`// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/aural-ui/**/*.{js,mjs}",
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
      },
    },
  },
};`}
          language="javascript"
        />
      </section>

      {/* Done */}
      <section className="space-y-4">
        <p className="text-success font-medium">
          Done! now you use NextJS and Aural UI
        </p>
      </section>

      {/* Navigation */}
      <div className="grid gap-4 md:grid-cols-2 pt-8 border-t border-border">
        <Link href="/docs/installation">
          <Card hoverable className="h-full">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">← Installation</p>
              <p className="font-medium">General installation guide</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/docs/frameworks/vite">
          <Card hoverable className="h-full text-right">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Vite →</p>
              <p className="font-medium">How to install and setup Aural UI in Vite</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
