import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata = {
  title: "Vite - Aural UI",
  description: "How to install and setup Aural UI in Vite.",
};

export default function VitePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge variant="info" className="mb-4">Framework guides</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Vite</h1>
        <p className="text-xl text-muted-foreground">
          How to install and setup Aural UI in Vite
        </p>
      </div>

      {/* Setup Vite */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Setup Vite</h2>
        <CodeBlock 
          code={`npm create vite@latest my-app -- --template react-ts
cd my-app
npm install`}
          language="bash"
        />
      </section>

      {/* Setup Tailwind */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Setup Tailwind CSS</h2>
        <CodeBlock 
          code={`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
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
          Add the Aural UI styles to your <code className="px-1.5 py-0.5 bg-muted rounded text-sm">main.tsx</code>:
        </p>
        <CodeBlock 
          code={`// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'aural-ui/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);`}
          language="tsx"
        />
      </section>

      {/* Configure Tailwind */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Configure Tailwind</h2>
        <CodeBlock 
          code={`// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
  plugins: [],
};`}
          language="javascript"
        />
      </section>

      {/* Done */}
      <section className="space-y-4">
        <p className="text-success font-medium">
          Done! now you use Vite and Aural UI
        </p>
      </section>

      {/* Navigation */}
      <div className="grid gap-4 md:grid-cols-2 pt-8 border-t border-border">
        <Link href="/docs/frameworks/nextjs">
          <Card hoverable className="h-full">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">← NextJS</p>
              <p className="font-medium">How to install and setup Aural UI in NextJS</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/components/button">
          <Card hoverable className="h-full text-right">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Components →</p>
              <p className="font-medium">Browse all components</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
