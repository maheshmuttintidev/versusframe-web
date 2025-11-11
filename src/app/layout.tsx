import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VersusFrame - Beautiful Visual Comparisons',
  description:
    'Create stunning visual comparisons with holographic effects. Perfect for showcasing differences, before/after shots, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
