export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-[Anton] tracking-wider uppercase text-white mb-2 block">
              SPATZ
            </a>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} SPATZ - SaaS Marketing Agency
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-bold tracking-widest uppercase text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <a href="#" className="hover:text-white transition-colors">Legal Notice</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Management</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
