import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center text-text-secondary hover:text-text-primary mb-6">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-8">Delete Account</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-text-secondary mb-6">
            We&apos;re sorry to see you go. Follow the steps below to delete your VersusFrame account.
          </p>

          <h2 className="text-2xl font-semibold mb-4">How to Delete Your Account</h2>
          <ol className="list-decimal pl-6 mb-6">
            <li>Open the VersusFrame app on your device</li>
            <li>Go to Settings</li>
            <li>Scroll to the bottom and tap &quot;Delete Account&quot;</li>
            <li>Confirm your decision by entering your password</li>
            <li>Your account and all associated data will be permanently deleted</li>
          </ol>

          <h2 className="text-2xl font-semibold mb-4">What Happens When You Delete Your Account</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>All your data will be permanently removed from our servers</li>
            <li>You will lose access to any premium features</li>
            <li>Your created content will be deleted</li>
            <li>This action cannot be undone</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Alternative Options</h2>
          <p className="mb-4">
            If you&apos;re having issues with the app, consider contacting our support team before
            deleting your account. We may be able to help resolve any problems.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
          <p className="mb-4">
            If you need assistance with account deletion or have questions, please contact us at:
            <br />
            Email: support@versusframe.com
          </p>
        </div>
      </div>
    </div>
  );
}