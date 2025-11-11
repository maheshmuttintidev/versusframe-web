'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-neutral-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-main">
          VersusFrame
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-text-secondary hover:text-text-primary">
            Home
          </Link>
          <a href="#features" className="text-text-secondary hover:text-text-primary">
            Features
          </a>
          <a href="#download" className="text-text-secondary hover:text-text-primary">
            Download
          </a>
          <Link href="/terms" className="text-text-secondary hover:text-text-primary">
            Terms
          </Link>
          <Link href="/privacy-policy" className="text-text-secondary hover:text-text-primary">
            Privacy
          </Link>
          <Link href="/delete-account" className="text-text-secondary hover:text-text-primary">
            Delete Account
          </Link>
          <Link href="/contact" className="text-text-secondary hover:text-text-primary">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-secondary hover:text-text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t border-neutral-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="text-text-secondary hover:text-text-primary" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <a href="#features" className="text-text-secondary hover:text-text-primary" onClick={() => setIsOpen(false)}>
              Features
            </a>
            <a href="#download" className="text-text-secondary hover:text-text-primary" onClick={() => setIsOpen(false)}>
              Download
            </a>
            <Link href="/terms" className="text-text-secondary hover:text-text-primary" onClick={() => setIsOpen(false)}>
              Terms
            </Link>
            <Link href="/privacy-policy" className="text-text-secondary hover:text-text-primary" onClick={() => setIsOpen(false)}>
              Privacy
            </Link>
            <Link href="/delete-account" className="text-text-secondary hover:text-text-primary" onClick={() => setIsOpen(false)}>
              Delete Account
            </Link>
            <Link href="/contact" className="text-text-secondary hover:text-text-primary" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}