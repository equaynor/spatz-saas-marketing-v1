export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#050505] text-black dark:text-white py-12 border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-[Anton] tracking-wider uppercase text-black dark:text-white mb-2 block hover:text-[#F27D26] dark:hover:text-[#F27D26] transition-colors">
              ELIZA-MARIE SPATZ
            </a>
            <p className="text-gray-600 dark:text-gray-500 text-sm transition-colors">
              &copy; {new Date().getFullYear()} Eliza-Marie Spatz - SaaS Marketing Consultancy
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-bold tracking-widest uppercase text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Accessibility</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Legal Notice</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Cookie Management</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
