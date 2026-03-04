import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
      {/* Background element - could be replaced with a video */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] z-10"></div>
        <img 
          src="https://picsum.photos/seed/abstract/1920/1080?grayscale&blur=2" 
          alt="Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[140px] font-[Anton] text-white leading-[0.85] tracking-tight uppercase mb-8">
              Agency <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                SaaS Marketing
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
              <a href="#services" className="block relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-center px-4">
                  Discover our services
                </span>
                <div className="absolute inset-0 rounded-full border border-white/10 scale-110 group-hover:scale-100 transition-transform duration-500"></div>
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-md"
            >
              <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                "Elegance transcends time."
              </p>
              <p className="text-sm font-bold tracking-widest uppercase text-gray-500 mt-4">
                — Spatz Agency
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
        className="absolute bottom-10 left-6 lg:left-12 flex items-center gap-4 text-white/50"
      >
        <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
        <ArrowDownRight className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
