import { motion } from 'motion/react';

const outcomes = [
  'Clearly structured marketing strategies',
  'Creative campaigns with business impact',
  'Stronger partner & account relationships',
  'More qualified leads and pipeline',
  'Marketing that measurably contributes to revenue',
];

export default function Outcomes() {
  return (
    <section className="py-24 md:py-32 bg-[#fafafa] dark:bg-[#0a0a0a] border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#F27D26] mb-6">— Outcomes</p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-[Anton] text-black dark:text-white uppercase tracking-tight leading-[0.95]">
              Why companies <br /> work with me
            </h2>
            <p className="mt-8 text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
              Because marketing isn't a campaign on its own. It's a growth strategy.
              <span className="block mt-3 text-black dark:text-white">
                I help companies turn marketing into real revenue.
              </span>
            </p>
          </motion.div>

          <div className="lg:col-span-7 lg:pl-8 lg:border-l border-black/10 dark:border-white/10">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-8">— What you get</p>
            <ul className="divide-y divide-black/10 dark:divide-white/10">
              {outcomes.map((o, i) => (
                <motion.li
                  key={o}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="py-5 md:py-6 flex items-baseline gap-5 group cursor-default"
                >
                  <span className="text-xs font-bold tracking-[0.2em] text-gray-400 w-8 shrink-0">0{i + 1}</span>
                  <span className="text-xl md:text-2xl font-[Anton] uppercase tracking-wide text-black dark:text-white group-hover:text-[#F27D26] transition-colors leading-tight">
                    {o}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
