import Terminal from '@/components/terminal/terminal';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-code p-4 md:p-8 lg:p-12 flex items-center justify-center">
      <div className="w-full h-full max-w-7xl mx-auto">
        <Terminal />
      </div>
    </main>
  );
}
