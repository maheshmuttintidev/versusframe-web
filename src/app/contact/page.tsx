import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - VersusFrame',
  description: 'Get in touch with the VersusFrame team. Contact us for support, business inquiries, bug reports, or feature requests.',
  keywords: ['contact', 'support', 'versusframe', 'help'],
  openGraph: {
    title: 'Contact Us - VersusFrame',
    description: 'Get in touch with the VersusFrame team. Contact us for support, business inquiries, bug reports, or feature requests.',
    url: 'https://versusframe.com/contact',
    siteName: 'VersusFrame',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us - VersusFrame',
    description: 'Get in touch with the VersusFrame team. Contact us for support, business inquiries, bug reports, or feature requests.',
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center text-text-secondary hover:text-text-primary mb-6">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-text-secondary mb-6">
            We&apos;d love to hear from you! Get in touch with the VersusFrame team.
          </p>

          <h2 className="text-2xl font-semibold mb-4">General Support</h2>
          <p className="mb-4">
            For general questions, feedback, or support:
            <br />
            Email: support@versusframe.com
          </p>

          <h2 className="text-2xl font-semibold mb-4">Business Inquiries</h2>
          <p className="mb-4">
            For partnerships, business opportunities, or press inquiries:
            <br />
            Email: business@versusframe.com
          </p>

          <h2 className="text-2xl font-semibold mb-4">Bug Reports</h2>
          <p className="mb-4">
            Found a bug? Help us improve by reporting it:
            <br />
            Email: bugs@versusframe.com
            <br />
            Please include detailed steps to reproduce the issue.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Feature Requests</h2>
          <p className="mb-4">
            Have an idea for a new feature? We&apos;d love to hear it:
            <br />
            Email: features@versusframe.com
          </p>

          <h2 className="text-2xl font-semibold mb-4">Response Time</h2>
          <p className="mb-4">
            We aim to respond to all inquiries within 24-48 hours during business days.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
          <p className="mb-4">
            Follow us on social media for updates and news:
            <br />
            Twitter: @versusframe
            <br />
            Instagram: @versusframe
          </p>
        </div>
      </div>
    </div>
  );
}