import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROCESS', href: '#process' },
    { name: 'WORK', href: '#results' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <a href="#" className="relative z-50 text-2xl font-[Anton] tracking-wider uppercase text-white">
              SPATZ
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 text-white hover:text-gray-300 transition-colors flex items-center gap-3"
            >
              <span className="hidden md:block text-xs font-bold tracking-[0.2em] uppercase">
                {isOpen ? 'Close' : 'Menu'}
              </span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#111] flex flex-col justify-center px-6 lg:px-24"
          >
            <div className="max-w-7xl w-full mx-auto">
              <nav className="flex flex-col space-y-4 md:space-y-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-5xl md:text-8xl font-[Anton] text-white hover:text-[#F27D26] transition-colors uppercase tracking-tight block w-fit"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-16 md:mt-24 flex flex-col md:flex-row gap-8 md:gap-24 text-sm font-medium tracking-widest uppercase text-gray-400"
              >
                <div>
                  <p className="text-white mb-2">Email</p>
                  <a href="mailto:hello@spatz.com" className="hover:text-white transition-colors">hello@spatz.com</a>
                </div>
                <div>
                  <p className="text-white mb-2">Social</p>
                  <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
