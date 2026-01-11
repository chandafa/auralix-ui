import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      <main className="pt-14 md:pt-0 md:pl-64">
        <div className="container mx-auto max-w-7xl px-4 py-8 md:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
