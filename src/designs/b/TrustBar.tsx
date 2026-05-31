import { motion } from 'motion/react';

const clients = ['Amazon Web Services', 'Cognizant', 'Commvault', 'Sky', 'HD+', 'SnapLogic'];

export default function TrustBar() {
  return (
    <section
      id="clients"
      className="relative py-14 md:py-16 bg-[#fafafa] dark:bg-[#0a0a0a] border-y border-black/10 dark:border-white/10 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 md:mb-10"
        >
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
            ◆ Experience with global tech players
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
            Trusted across complex B2B ecosystems, hyperscalers and SaaS partner programmes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8 items-center">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="text-center font-[Anton] uppercase tracking-wider text-xl md:text-2xl text-black/70 dark:text-white/60 hover:text-[#F27D26] dark:hover:text-[#F27D26] transition-colors"
            >
              {c}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
