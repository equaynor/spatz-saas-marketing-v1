import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-300">
      {/* Background element */}
      <div className="absolute inset-0 z-0 bg-white dark:bg-[#050505] transition-colors duration-300">
        {/* Soft fade-to-bg gradient from left to right (Dark mode only) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 md:via-[#050505]/60 to-transparent z-10 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-300"></div>

        {/* Edge blurring gradient from right to left (Dark mode only) */}
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-300"></div>

        {/* Soft fade-to-bg gradient from bottom to top (Dark mode only) */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-300"></div>

        {/* Soft fade-to-bg gradient from top to bottom (Dark mode only) */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-300"></div>

        {/* Image contained to the right side on larger screens */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-3/4 h-full overflow-hidden">
          <img
            src="/images/5_light.png"
            alt="Hero Visual Light"
            className="absolute bottom-0 right-0 lg:right-12 h-[80%] w-auto object-contain opacity-100 transition-opacity duration-300 block dark:hidden"
          />
          <img
            src="/images/5.png"
            alt="Hero Visual Dark"
            className="w-full h-full object-cover object-right opacity-60 transition-opacity duration-300 hidden dark:block"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-[Anton] text-black dark:text-white leading-[0.95] tracking-tight uppercase mb-8">
              Strategic & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-400 dark:from-white dark:to-gray-500">
                Hands-on <br className="hidden md:block" /> Partner
              </span>
            </h1>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start md:items-center mt-12 md:mt-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group cursor-pointer"
            >
              <a href="#contact" className="block relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-center px-4 leading-tight">
                  Book a <br /> Strategy Call
                </span>
                <div className="absolute inset-0 rounded-full border border-black/10 dark:border-white/10 scale-110 group-hover:scale-100 transition-transform duration-500"></div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-md"
            >
              <p className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                "High-level strategic leadership combined with hands-on, scalable execution."
              </p>
              <p className="text-sm font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mt-4 transition-colors">
                — Eliza-Marie Spatz
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-6 lg:left-12 flex items-center gap-4 text-black/50 dark:text-white/50 transition-colors"
      >
        <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
        <ArrowDownRight className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
