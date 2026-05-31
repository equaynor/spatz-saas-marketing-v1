import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-white dark:bg-[#050505] border-t border-black/10 dark:border-white/10 relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-[#050505] via-transparent to-white dark:to-[#050505] z-10" />
        <img src="/images/8.png" alt="" className="w-full h-full object-cover grayscale mix-blend-luminosity" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#F27D26] mb-6">— Let's talk</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-[Anton] text-black dark:text-white uppercase tracking-tight leading-[0.95] mb-8">
              Turn marketing <br />
              <span className="text-gray-400 dark:text-gray-600">into your growth engine</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-md">
              Tell me about your stage, your ICP and where pipeline is stuck. I'll come back within two business days with a clear next step.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md">
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 dark:text-gray-500 mb-2">Email</p>
                <a href="mailto:hello@spatzmarketing.com" className="text-base text-black dark:text-white hover:text-[#F27D26] transition-colors">
                  hello@spatzmarketing.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 dark:text-gray-500 mb-2">Based in</p>
                <p className="text-base text-black dark:text-white">London — serving EMEA</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-[#fafafa] dark:bg-[#0e0e0e] p-8 md:p-12 border border-black/10 dark:border-white/10"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="peer w-full bg-transparent border-b border-black/20 dark:border-white/20 py-3 text-black dark:text-white focus:outline-none focus:border-[#F27D26] dark:focus:border-[#F27D26] transition-colors placeholder-transparent"
                    placeholder="Name*"
                    required
                  />
                  <label htmlFor="name" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F27D26] uppercase tracking-wider">
                    Name*
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="company"
                    className="peer w-full bg-transparent border-b border-black/20 dark:border-white/20 py-3 text-black dark:text-white focus:outline-none focus:border-[#F27D26] dark:focus:border-[#F27D26] transition-colors placeholder-transparent"
                    placeholder="Company"
                  />
                  <label htmlFor="company" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F27D26] uppercase tracking-wider">
                    Company
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="peer w-full bg-transparent border-b border-black/20 dark:border-white/20 py-3 text-black dark:text-white focus:outline-none focus:border-[#F27D26] dark:focus:border-[#F27D26] transition-colors placeholder-transparent"
                  placeholder="Email*"
                  required
                />
                <label htmlFor="email" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F27D26] uppercase tracking-wider">
                  Email*
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  className="peer w-full bg-transparent border-b border-black/20 dark:border-white/20 py-3 text-black dark:text-white focus:outline-none focus:border-[#F27D26] dark:focus:border-[#F27D26] transition-colors placeholder-transparent resize-none"
                  placeholder="What's on your mind?"
                />
                <label htmlFor="message" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F27D26] uppercase tracking-wider">
                  What's on your mind?
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="consent" className="mt-1.5 accent-[#F27D26]" required />
                <label htmlFor="consent" className="text-sm text-gray-600 dark:text-gray-500 font-light">
                  I consent to the processing of my personal data. Eliza-Marie Spatz commits to not using your information for other purposes.
                </label>
              </div>

              <button
                type="submit"
                className="group relative w-full md:w-auto inline-flex items-center justify-center px-10 py-4 text-xs font-bold tracking-[0.25em] uppercase text-white bg-black dark:bg-[#F27D26] hover:bg-[#F27D26] dark:hover:bg-white dark:hover:text-black transition-all duration-500"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
