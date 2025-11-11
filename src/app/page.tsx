import { Smartphone, Zap, Eye, Download } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">

      {/* Hero */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto text-center max-w-7xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-main to-secondary-main bg-clip-text text-transparent">
            Beautiful Visual Comparisons
          </h1>
           <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
             Create stunning visual comparisons with holographic effects. Perfect for showcasing
             differences, before/after shots, and engaging content.
           </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="#download"
        className="bg-primary-main hover:bg-primary-dark text-white px-10 py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors text-lg"
      >
        <Download size={24} />
        Download on Google Play
      </a>
      <button className="border border-neutral-700 hover:border-neutral-600 px-10 py-4 rounded-lg font-medium transition-colors text-lg">
        Learn More
      </button>
    </div>
        </div>
      </section>

       {/* Features */}
        <section id="features" className="py-20 px-4 bg-background-secondary">
          <div className="container mx-auto max-w-7xl">
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

       {/* Gallery */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-full">
           <h2 className="text-3xl font-bold text-center mb-12">See It In Action</h2>
           <div className="space-y-16">
             {/* Comparison 1 */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-6">iPhone 15 Pro vs Galaxy S24 Ultra</h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                  <div className="flex flex-col items-center">
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                      <Image
                        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200"
                        alt="iPhone 15 Pro"
                        fill
                        sizes="50vw"
                        className="object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <p className="text-sm text-text-secondary mt-2">iPhone 15 Pro</p>
                  </div>
                  <div className="text-2xl md:text-4xl font-bold text-primary-main my-4 md:my-0">VS</div>
                  <div className="flex flex-col items-center">
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                      <Image
                        src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=1200"
                        alt="Galaxy S24 Ultra"
                        fill
                        sizes="50vw"
                        className="object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <p className="text-sm text-text-secondary mt-2">Galaxy S24 Ultra</p>
                  </div>
                </div>
              </div>

             {/* Comparison 2 */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-6">Coffee vs Tea</h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                  <div className="flex flex-col items-center">
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                      <Image
                        src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=1200"
                        alt="Tea"
                        fill
                        sizes="50vw"
                        className="object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <p className="text-sm text-text-secondary mt-2">Coffee</p>
                  </div>
                  <div className="text-2xl md:text-4xl font-bold text-secondary-main my-4 md:my-0">OR</div>
                  <div className="flex flex-col items-center">
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                      <Image
                        src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800"
                        alt="Tea"
                        fill
                        className="object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <p className="text-sm text-text-secondary mt-2">Tea</p>
                  </div>
                </div>
              </div>

             {/* Comparison 3 */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-6">Mountain Hiking & Beach Vacation</h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                  <div className="flex flex-col items-center">
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                      <Image
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
                        alt="Mountain Hiking"
                        fill
                        sizes="50vw"
                        className="object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <p className="text-sm text-text-secondary mt-2">Mountain Hiking</p>
                  </div>
                  <div className="text-2xl md:text-4xl font-bold text-success my-4 md:my-0">AND</div>
                  <div className="flex flex-col items-center">
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                      <Image
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200"
                        alt="Beach Vacation"
                        fill
                        sizes="50vw"
                        className="object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <p className="text-sm text-text-secondary mt-2">Beach Vacation</p>
                  </div>
                </div>
              </div>
           </div>
         </div>
       </section>

      {/* CTA */}
       <section id="download" className="py-20 px-4">
         <div className="container mx-auto text-center max-w-4xl">
           <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Amazing Comparisons?</h2>
           <p className="text-lg md:text-xl text-text-secondary mb-8">
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
           <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">
             <a href="/privacy-policy" className="text-text-secondary hover:text-text-primary transition-colors">
               Privacy Policy
             </a>
             <a href="/terms" className="text-text-secondary hover:text-text-primary transition-colors">
               Terms of Service
             </a>
             <a href="/contact" className="text-text-secondary hover:text-text-primary transition-colors">
               Contact Us
             </a>
           </div>
           <p className="text-text-secondary">© 2025 VersusFrame. All rights reserved.</p>
         </div>
       </footer>
    </div>
  );
}
