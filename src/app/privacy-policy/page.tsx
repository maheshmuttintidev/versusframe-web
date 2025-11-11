import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - VersusFrame',
  description: 'Learn how VersusFrame collects, uses, and protects your personal information. Our privacy policy explains data handling practices.',
  keywords: ['privacy policy', 'data protection', 'versusframe', 'privacy'],
  openGraph: {
    title: 'Privacy Policy - VersusFrame',
    description: 'Learn how VersusFrame collects, uses, and protects your personal information. Our privacy policy explains data handling practices.',
    url: 'https://versusframe.com/privacy-policy',
    siteName: 'VersusFrame',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy - VersusFrame',
    description: 'Learn how VersusFrame collects, uses, and protects your personal information. Our privacy policy explains data handling practices.',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center text-text-secondary hover:text-text-primary mb-6">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-text-secondary mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">
            VersusFrame collects minimal information necessary to provide our services. This includes:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Device information for app functionality</li>
            <li>Usage analytics to improve the app</li>
            <li>User-generated content (images) processed locally</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            We use collected information to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Provide and maintain the VersusFrame application</li>
            <li>Analyze usage patterns to improve user experience</li>
            <li>Ensure app security and prevent abuse</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
          <p className="mb-4">
            Your images are processed locally on your device and are not uploaded to our servers.
            We implement appropriate security measures to protect any collected data.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p className="mb-4">
            VersusFrame may use third-party services for analytics and crash reporting.
            These services have their own privacy policies.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy, please contact us at:
            <br />
            Email: privacy@versusframe.com
          </p>
        </div>
      </div>
    </div>
  );
}