export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#050505] text-black dark:text-white py-14 border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mb-10">
          <div>
            <a href="#top" className="text-2xl font-[Anton] tracking-wider uppercase text-black dark:text-white block hover:text-[#F27D26] transition-colors">
              Spatz Marketing
            </a>
            <p className="text-xs tracking-[0.2em] uppercase text-gray-500 dark:text-gray-500 mt-2">
              Eliza-Marie Spatz · London
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-3">Focus</p>
            <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
              <li>Event Marketing</li>
              <li>Account-Based Marketing</li>
              <li>Digital Marketing</li>
              <li>Partner Marketing</li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-3">Contact</p>
            <a href="mailto:hello@spatzmarketing.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors block">
              hello@spatzmarketing.com
            </a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors block mt-1">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-black/10 dark:border-white/10">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Eliza-Marie Spatz. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-[10px] font-bold tracking-[0.25em] uppercase text-gray-500">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Imprint</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
