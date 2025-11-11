import type { Metadata } from 'next';
import './globals.css';
import NavBar from '../components/NavBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://versusframe.com'),
  title: 'VersusFrame - Beautiful Visual Comparisons',
  description:
    'Create stunning visual comparisons with holographic effects. Perfect for showcasing differences, before/after shots, and more.',
  keywords: ['visual comparisons', 'holographic effects', 'before after', 'image comparison', 'versus frame'],
  authors: [{ name: 'VersusFrame Team' }],
  creator: 'VersusFrame',
  publisher: 'VersusFrame',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'VersusFrame - Beautiful Visual Comparisons',
    description: 'Create stunning visual comparisons with holographic effects. Perfect for showcasing differences, before/after shots, and more.',
    url: 'https://versusframe.com',
    siteName: 'VersusFrame',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'VersusFrame - Visual Comparisons',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VersusFrame - Beautiful Visual Comparisons',
    description: 'Create stunning visual comparisons with holographic effects. Perfect for showcasing differences, before/after shots, and more.',
    images: ['/android-chrome-512x512.png'],
    creator: '@versusframe', // If applicable
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
