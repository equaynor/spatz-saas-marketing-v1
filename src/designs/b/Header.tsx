import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import ThemeToggle from '../../components/ThemeToggle';

const navLinks = [
  { name: 'HOME', href: '#top' },
  { name: 'FOCUS', href: '#focus' },
  { name: 'ABOUT', href: '#about' },
  { name: 'CLIENTS', href: '#clients' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 border-b transition-all duration-500 ${scrolled ? 'bg-white/85 dark:bg-[#050505]/85 backdrop-blur-md py-3 border-black/5 dark:border-white/5' : 'bg-transparent py-6 border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <a href="#top" className="relative z-50 group">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl md:text-[26px] font-[Anton] tracking-wider uppercase text-black dark:text-white group-hover:text-[#F27D26] transition-colors leading-none">
                  Spatz
                </span>
                <span className="hidden sm:inline text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 dark:text-gray-500 leading-none">
                  Marketing&nbsp;Consultancy
                </span>
              </div>
            </a>

            <div className="flex items-center gap-3 z-50">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex items-center gap-3"
                aria-label="Toggle menu"
              >
                <span className="hidden md:block text-[10px] font-bold tracking-[0.25em] uppercase">
                  {isOpen ? 'Close' : 'Menu'}
                </span>
                <div className="w-10 h-10 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center bg-black/[0.03] dark:bg-white/[0.04] backdrop-blur-sm">
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#fafafa] dark:bg-[#0a0a0a] flex flex-col justify-center px-6 lg:px-24"
          >
            <div className="max-w-7xl w-full mx-auto">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-10">— Navigate</p>
              <nav className="flex flex-col space-y-2 md:space-y-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-5xl md:text-8xl font-[Anton] text-black dark:text-white hover:text-[#F27D26] transition-colors uppercase tracking-tight block w-fit"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm tracking-widest uppercase text-gray-500 dark:text-gray-400"
              >
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-black dark:text-white mb-3">Email</p>
                  <a href="mailto:hello@spatzmarketing.com" className="hover:text-black dark:hover:text-white transition-colors lowercase tracking-normal text-base">hello@spatzmarketing.com</a>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-black dark:text-white mb-3">Based In</p>
                  <p className="lowercase tracking-normal text-base">London — serving EMEA</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-black dark:text-white mb-3">Social</p>
                  <div className="flex gap-4 lowercase tracking-normal text-base">
                    <a href="#" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
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
