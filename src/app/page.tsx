import { Smartphone, Zap, Eye, Download } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      {/* Header */}
      <header className="border-b border-neutral-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-main">VersusFrame</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-text-secondary hover:text-text-primary">
              Features
            </a>
            <a href="#download" className="text-text-secondary hover:text-text-primary">
              Download
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-main to-secondary-main bg-clip-text text-transparent">
            Beautiful Visual Comparisons
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Create stunning visual comparisons with holographic effects. Perfect for showcasing
            differences, before/after shots, and engaging content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="bg-primary-main hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <Download size={20} />
              Download on Google Play
            </a>
            <button className="border border-neutral-700 hover:border-neutral-600 px-8 py-3 rounded-lg font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-background-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-main w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visual Comparisons</h3>
              <p className="text-text-secondary">
                Create side-by-side comparisons with ease. Highlight differences and similarities in
                your photos.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-main w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Holographic Effects</h3>
              <p className="text-text-secondary">
                Add stunning holographic effects to make your comparisons pop. Engage your audience
                like never before.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-success w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-text-secondary">
                Intuitive interface designed for creators. No complex tools needed - just capture
                and compare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="py-20 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Amazing Comparisons?</h2>
          <p className="text-text-secondary mb-8">
            Download VersusFrame today and start creating visual content that stands out.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.maheshmuttinti.versusframe"
            className="bg-primary-main hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-medium inline-flex items-center gap-2 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={20} />
            Download on Google Play
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-text-secondary">© 2025 VersusFrame. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
