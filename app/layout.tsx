import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Illuminate Life Gala',
  description: 'The Second Annual Illuminate Life Gala — Thursday, October 15, 2026. The Beverly Hilton, Beverly Hills. A philanthropic evening for mental health, recovery, and surgical access.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Tenor+Sans&family=Cinzel:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
