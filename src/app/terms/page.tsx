import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center text-text-secondary hover:text-text-primary mb-6">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-text-secondary mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p className="mb-4">
            By downloading and using VersusFrame, you accept and agree to be bound by the terms
            and provision of this agreement.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Use License</h2>
          <p className="mb-4">
            Permission is granted to download and use VersusFrame for personal, non-commercial
            purposes only. This license shall automatically terminate if you violate any of these
            restrictions.
          </p>

          <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Use the app in accordance with applicable laws</li>
            <li>Respect intellectual property rights</li>
            <li>Not use the app for any harmful or illegal purposes</li>
            <li>Keep your device and app updated for security</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
          <p className="mb-4">
            The app is provided on an &apos;as is&apos; basis. We disclaim all warranties, express or implied,
            including but not limited to warranties of merchantability and fitness for a particular purpose.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall VersusFrame be liable for any damages arising out of the use or inability
            to use the app.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4">
            For questions about these Terms, please contact us at:
            <br />
            Email: legal@versusframe.com
          </p>
        </div>
      </div>
    </div>
  );
}