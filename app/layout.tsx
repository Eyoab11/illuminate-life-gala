import type { Metadata } from 'next';
import './globals.css';
import './dr-ersno-sections.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://illuminatelifegala.com'),
  title: 'Illuminate Life Gala 2026 | Mental Health & Healthcare Charity Event Beverly Hills',
  description: 'Join Dr. Ersno Eromo for the Second Annual Illuminate Life Gala on October 15, 2026 at The Beverly Hilton. A prestigious charity gala supporting mental health, substance recovery, and surgical access for underserved communities in Los Angeles and beyond.',
  keywords: [
    'mental health gala Beverly Hills',
    'charity gala Beverly Hills 2026',
    'healthcare philanthropy event Los Angeles',
    'Dr Ersno Eromo gala',
    'medical fundraiser Beverly Hills',
    'Illuminate Life Gala',
    'philanthropic event California',
    'Beverly Hilton charity event',
    'substance recovery fundraiser',
    'surgical access charity',
    'healthcare charity Los Angeles',
    'nonprofit gala California',
    'medical philanthropy event',
    'charity event October 2026',
    'Beverly Hills fundraiser',
  ],
  authors: [{ name: 'Dr. Ersno Eromo' }],
  creator: 'Illuminate Life Foundation',
  publisher: 'Illuminate Life Foundation',
  openGraph: {
    title: 'Illuminate Life Gala 2026 | October 15 at The Beverly Hilton',
    description: 'Join Dr. Ersno Eromo for the Second Annual Illuminate Life Gala. A transformative charity event dedicated to mental health, substance recovery, and surgical access for underserved communities.',
    url: 'https://illuminatelifegala.com',
    siteName: 'Illuminate Life Gala',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/modified.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Ersno Eromo - Illuminate Life Gala Founder and Distinguished Physician',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Illuminate Life Gala 2026 | Mental Health Charity Event Beverly Hills',
    description: 'Join us October 15, 2026 at The Beverly Hilton for an evening of compassion and change. Supporting mental health, recovery, and surgical access.',
    images: ['/modified.png'],
    creator: '@illuminatelife',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'IgrqNd_Q-yrbcbs6hjjMdU7EUbwoFV_kUp5_U9pQV-Y',
  },
  alternates: {
    canonical: 'https://illuminatelifegala.com',
  },
  category: 'Charity Event',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NR6WEWK97P"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NR6WEWK97P');
            `,
          }}
        />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Tenor+Sans&family=Cinzel:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#08080D" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
