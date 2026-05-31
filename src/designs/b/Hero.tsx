import { motion } from 'motion/react';
import { ArrowDownRight, Sparkles } from 'lucide-react';

export default function Hero() {

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 md:pt-32 overflow-hidden bg-[#fafafa] dark:bg-[#050505] transition-colors duration-300">
      {/* Premium Cinematic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/95 md:via-[#fafafa]/75 to-transparent dark:from-[#050505] dark:via-[#050505]/95 dark:md:via-[#050505]/75 dark:to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#fafafa] dark:from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#fafafa] dark:from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#fafafa] dark:from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* Ambient Glowing Orbs */}
        <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-[#F27D26]/10 blur-[120px] pointer-events-none animate-pulse duration-10000" />
        <div className="absolute bottom-[10%] right-[40%] w-[250px] h-[250px] rounded-full bg-[#F27D26]/5 blur-[80px] pointer-events-none" />

        {/* Main Portrait with Rich Widescreen Blending */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-3/4 h-full overflow-hidden flex items-center justify-end">
          
          <div className="relative w-full h-full max-h-[85vh] flex flex-col justify-end items-end pr-0 lg:pr-16 pointer-events-auto">
            <div className="relative h-full w-full max-w-[85vw] flex items-end justify-center select-none z-10">
              {/* Light Mode Portrait */}
              <motion.img
                src="/images/eliza_hero_light.jpg"
                alt="Eliza-Marie Spatz Portrait"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 0.95, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full object-cover object-center md:object-right filter drop-shadow-[0_0_50px_rgba(0,0,0,0.06)] block dark:hidden"
              />
              {/* Dark Mode Portrait */}
              <motion.img
                src="/images/eliza_hero.jpg"
                alt="Eliza-Marie Spatz Portrait"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 0.75, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full object-cover object-center md:object-right filter drop-shadow-[0_0_50px_rgba(242,125,38,0.15)] hidden dark:block"
              />
            </div>

            {/* Interactive floating note on the portrait area */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-32 right-12 lg:right-28 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border border-black/10 dark:border-white/10 px-4 py-3 rounded-xl shadow-2xl hidden sm:flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-full bg-[#F27D26]/10 flex items-center justify-center text-[#F27D26]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-gray-500 uppercase font-bold">Based In</p>
                <p className="text-xs font-bold text-black dark:text-white tracking-wider">London, UK — EMEA</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        {/* Dynamic Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] animate-pulse" />
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-black dark:text-white leading-none">
            Eliza-Marie Spatz — B2B SaaS Marketing
          </p>
        </motion.div>

        <div className="max-w-5xl">
          {/* Main Cinematic Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[44px] sm:text-6xl md:text-7xl lg:text-[100px] font-[Anton] text-black dark:text-white leading-[0.95] tracking-tight uppercase mb-10"
          >
            Marketing that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-black/90 to-[#F27D26] dark:from-white dark:via-white/90 dark:to-[#F27D26]">
              drives real <br className="hidden md:block" /> revenue growth
            </span>
          </motion.h1>

          <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start md:items-center mt-12 md:mt-20">
            {/* Interactive Call to Action */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative group"
            >
              <a
                href="#contact"
                className="block relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-[#F27D26] hover:border-[#F27D26] hover:text-white transition-all duration-500 shadow-xl group"
              >
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-center px-4 leading-tight text-black dark:text-white group-hover:text-white">
                  Book a <br /> strategy call
                </span>
                <div className="absolute inset-0 rounded-full border border-black/10 dark:border-white/10 scale-110 group-hover:scale-100 transition-transform duration-500" />
              </a>
            </motion.div>

            {/* Quick Pitch Description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="max-w-md"
            >
              <p className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                Marketing can be loud. Marketing can be creative.
                <br />
                But great marketing <em className="text-black dark:text-white not-italic font-normal">moves the business.</em>
              </p>
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-500 mt-5">
                — Eliza-Marie Spatz
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Footnotes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-6 lg:left-12 flex items-center gap-3 text-black/50 dark:text-white/50"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDownRight className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
