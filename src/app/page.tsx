import Terminal from '@/components/terminal/terminal';

export default function Home() {
  return (
    <main className="min-h-[93vh] bg-background text-foreground font-code p-2 md:p-4 lg:p-6 flex items-center justify-center">
      <div className="w-full h-full max-w-7xl mx-auto">
        <Terminal />
      </div>
    </main>
  );
}
