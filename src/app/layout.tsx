import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});


export const metadata: Metadata = {
  title: 'Mahesh.dev | Portfolio',
  description: 'The portfolio of Mahesh, a software developer. Built with a sci-fi terminal theme.',
  keywords: ['portfolio', 'developer', 'software engineer', 'React', 'Next.js', 'Java', 'TypeScript'],
  authors: [{ name: 'Mahesh Gudooru' }],
  creator: 'Mahesh Gudooru',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
       <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className={`${jetbrains_mono.variable} font-code antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
