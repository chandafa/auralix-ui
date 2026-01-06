import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata = {
  title: "Vite - Auralix UI",
  description: "How to install and setup Auralix UI in Vite.",
};

export default function VitePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge variant="info" className="mb-4">Framework guides</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Vite</h1>
        <p className="text-xl text-muted-foreground">
          How to install and setup Auralix UI in Vite
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
          code={`npm install tailwindcss @tailwindcss/postcss postcss`}
          language="bash"
        />
      </section>

      {/* Setup Auralix UI */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Setup Auralix UI</h2>
        <CodeBlock 
          code={`npm install auralix-ui`}
          language="bash"
        />
      </section>

      {/* Import Styles & Configure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Import Styles & Configure</h2>
        <p className="text-muted-foreground">
          Import the styles and add the source directive to your global CSS file (e.g. <code className="px-1.5 py-0.5 bg-muted rounded text-sm">src/index.css</code>):
        </p>
        <CodeBlock 
          code={`@import "tailwindcss";
@import "auralix-ui/styles.css";

@source "../../node_modules/auralix-ui";`}
          language="css"
        />
      </section>

      {/* Done */}
      <section className="space-y-4">
        <p className="text-success font-medium">
          Done! now you use Vite and Auralix UI
        </p>
      </section>

      {/* Navigation */}
      <div className="grid gap-4 md:grid-cols-2 pt-8 border-t border-border">
        <Link href="/docs/frameworks/nextjs">
          <Card hoverable className="h-full">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">← NextJS</p>
              <p className="font-medium">How to install and setup Auralix UI in NextJS</p>
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
