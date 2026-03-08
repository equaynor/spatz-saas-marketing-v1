import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-[#050505] border-t border-black/10 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Subtle Background Image */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-10 pointer-events-none transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-[#050505] via-transparent to-white dark:to-[#050505] z-10 transition-colors duration-300" />
        <img
          src="/images/8.png"
          alt=""
          className="w-full h-full object-cover grayscale mix-blend-luminosity"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-[Anton] text-black dark:text-white uppercase tracking-tight mb-8 transition-colors">
              BOOK A <br />
              <span className="text-gray-400 dark:text-gray-600 transition-colors">MEETING</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-md transition-colors">
              Ready to scale your acquisition? Leave us a message and we will get back to you as soon as possible.
            </p>
          </div>

          <div className="bg-[#fafafa] dark:bg-[#111] p-8 md:p-12 border border-black/10 dark:border-white/10 transition-colors duration-300">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="text" id="firstName" className="peer w-full bg-transparent border-b border-black/20 dark:border-white/20 py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-transparent" placeholder="First / Last Name*" required />
                  <label htmlFor="firstName" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white uppercase tracking-wider">First / Last Name*</label>
                </div>
                <div className="relative">
                  <input type="email" id="email" className="peer w-full bg-transparent border-b border-black/20 dark:border-white/20 py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-transparent" placeholder="Email*" required />
                  <label htmlFor="email" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white uppercase tracking-wider">Email*</label>
                </div>
              </div>

              <div className="relative">
                <input type="tel" id="phone" className="peer w-full bg-transparent border-b border-black/20 dark:border-white/20 py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-transparent" placeholder="Phone*" required />
                <label htmlFor="phone" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white uppercase tracking-wider">Phone*</label>
              </div>

              <div className="relative">
                <textarea id="message" rows={4} className="peer w-full bg-transparent border-b border-black/20 dark:border-white/20 py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-transparent resize-none" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white uppercase tracking-wider">Message</label>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="consent" className="mt-1 bg-transparent border-black/20 dark:border-white/20" required />
                <label htmlFor="consent" className="text-sm text-gray-600 dark:text-gray-500 font-light transition-colors">
                  I consent to the processing of my personal data. Eliza-Marie Spatz commits to not using your information for other purposes.
                </label>
              </div>

              <button type="submit" className="group relative w-full md:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase text-black dark:text-white border border-black/20 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
