import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const pillars = [
  {
    n: '01',
    title: 'Event Marketing',
    description:
      'Strategic event formats — from trade shows to executive roundtables — that build visibility, deepen relationships and convert into qualified pipeline. Pre-event campaigns, sales enablement, follow-up nurture and full ROI tracking.',
    image: '/images/focus-bg-1.png',
    bullets: ['Event strategy & portfolio', 'Pre-event ABM campaigns', 'Sales enablement & lead capture', 'Post-event nurture', 'ROI tracking & reporting'],
    results: [
      'More qualified meetings on the booth',
      'Higher lead quality and on-site conversion',
      'Pipeline that builds before the event opens',
      'A clearly measurable event ROI',
      'A repeatable playbook across the event portfolio',
    ],
    summary: 'With the right strategy, events become one of the most effective B2B revenue channels — not just brand activities.',
  },
  {
    n: '02',
    title: 'Account-Based Marketing',
    description:
      'Identifying high-value target accounts, personalising the campaign mix, aligning marketing with sales and winning bigger deals systematically. ABM that the sales team actually wants to run.',
    image: '/images/focus-bg-2.png',
    bullets: ['ICP definition & target lists', 'Buying-centre mapping', 'Multi-touch ABM campaigns', 'Sales–marketing alignment', 'Personalised campaigns at scale'],
    results: [
      'Higher engagement rates with target accounts',
      'More meetings with real decision makers',
      'More qualified opportunities in the funnel',
      'Larger average deal sizes',
      'Better pipeline-to-revenue conversion',
    ],
    summary: 'ABM turns marketing from a broad lead-generator into a targeted growth strategy for high-value accounts.',
  },
  {
    n: '03',
    title: 'Digital Marketing',
    description:
      'From campaign strategy to demand generation: digital channels used with intent — measurable reach, the right engagement, conversion that compounds. Paid, content, performance and analytics, integrated.',
    image: '/images/focus-bg-3.png',
    bullets: ['Digital marketing strategy', 'Multi-channel campaign planning', 'Performance & paid media', 'Funnel & conversion optimisation', 'Analytics & reporting'],
    results: [
      'More qualified leads across channels',
      'More sales opportunities, faster',
      'Higher conversion rates inside the funnel',
      'More efficient marketing budgets and lower CPL',
      'A continuous pipeline-generation engine',
    ],
    summary: 'Done well, digital becomes a scalable engine for business growth — not a communication channel.',
  },
  {
    n: '04',
    title: 'Partner Marketing',
    description:
      'Programmes and joint go-to-market motions that activate partners, build shared pipeline and create lasting commercial value. From hyperscaler alliances to ISV and channel co-marketing.',
    image: '/images/focus-bg-4.png',
    bullets: ['Partner strategy', 'Joint go-to-market', 'Co-marketing campaigns', 'Partner event concepts', 'Shared pipeline reporting'],
    results: [
      'More joint leads and opportunities',
      'Higher conversion through partner campaigns',
      'Strategic use of partner networks for pipeline',
      'Measurable business impact from co-marketing',
      'Partners turned into real revenue contributors',
    ],
    summary: 'With the right partner strategy, partnerships become a measurable revenue channel — not just a branding exercise.',
  },
];

export default function Pillars() {
  const [open, setOpen] = useState<Set<string>>(new Set());

  const toggle = (n: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });
  };

  return (
    <section
      id="focus"
      className="py-24 md:py-32 bg-[#fafafa] dark:bg-[#050505] border-t border-black/10 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24 max-w-4xl"
        >
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#F27D26] mb-6">— Focus areas</p>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-[Anton] text-black dark:text-white uppercase tracking-tight leading-[0.95]">
            Where marketing
            <br />
            <span className="text-gray-400 dark:text-gray-600">moves revenue</span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            I work where marketing has direct impact on pipeline, revenue and partnerships — not where it stops at brand.
          </p>
          <p className="mt-4 text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 dark:text-gray-500">
            Click any focus area to see typical results ↓
          </p>
        </motion.div>

        <div className="flex flex-col">
          {pillars.map((p, index) => {
            const isOpen = open.has(p.n);
            return (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`border-t border-black/15 dark:border-white/15 last:border-b relative overflow-hidden transition-colors ${
                  isOpen ? 'bg-[#F27D26]/[0.06] dark:bg-[#F27D26]/[0.09]' : 'hover:bg-[#F27D26]/[0.04] dark:hover:bg-[#F27D26]/[0.07]'
                }`}
              >
                {/* Click target — the closed/summary row */}
                <button
                  type="button"
                  onClick={() => toggle(p.n)}
                  aria-expanded={isOpen}
                  aria-controls={`pillar-panel-${p.n}`}
                  className="group w-full text-left py-10 md:py-12 px-2 md:px-4 -mx-2 md:-mx-4 cursor-pointer relative"
                >
                  <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl from-[#F27D26]/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40 dark:from-[#050505] dark:via-[#050505]/85 dark:to-[#050505]/40 z-10" />
                    <img
                      src={p.image}
                      alt=""
                      className="w-full h-full object-cover grayscale opacity-30 mix-blend-luminosity scale-105 group-hover:scale-100 transition-transform duration-1000"
                    />
                  </div>

                  <div className="relative z-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                    <div className="md:col-span-1">
                      <span
                        className={`text-3xl md:text-5xl font-[Anton] transition-colors duration-500 ${
                          isOpen
                            ? 'text-[#F27D26]'
                            : 'text-gray-300 dark:text-gray-700 group-hover:text-[#F27D26]'
                        }`}
                      >
                        {p.n}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h3
                        className={`text-3xl md:text-4xl lg:text-5xl font-[Anton] uppercase tracking-tight transition-colors leading-[1] ${
                          isOpen ? 'text-[#F27D26]' : 'text-black dark:text-white group-hover:text-[#F27D26]'
                        }`}
                      >
                        {p.title}
                      </h3>
                    </div>
                    <div className="md:col-span-5">
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed group-hover:text-black dark:group-hover:text-gray-200 transition-colors duration-300">
                        {p.description}
                      </p>
                      <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                        {p.bullets.map((b) => (
                          <li
                            key={b}
                            className="text-[13px] text-gray-500 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors flex items-start gap-2"
                          >
                            <span className="text-[#F27D26] mt-1">—</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-2 md:flex md:justify-end items-center">
                      <div
                        className={`w-11 h-11 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? 'bg-[#F27D26] border-[#F27D26] text-white rotate-45'
                            : 'border-black/20 dark:border-white/20 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black'
                        }`}
                        aria-hidden
                      >
                        <Plus className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`pillar-panel-${p.n}`}
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden relative z-20"
                    >
                      <div className="pb-10 md:pb-14 px-2 md:px-4 -mx-2 md:-mx-4">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border-t border-dashed border-black/15 dark:border-white/15 pt-8 md:pt-10">
                          <div className="md:col-span-1 md:col-start-2 md:flex md:items-start">
                            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#F27D26]">
                              — Outcomes
                            </p>
                          </div>
                          <div className="md:col-span-5 md:col-start-3">
                            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 dark:text-gray-500 mb-4">
                              Typical results
                            </p>
                            <ul className="space-y-2.5">
                              {p.results.map((r, i) => (
                                <motion.li
                                  key={r}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.35, delay: 0.05 + i * 0.04 }}
                                  className="flex items-baseline gap-3 text-[15px] md:text-base text-black dark:text-white font-light leading-snug"
                                >
                                  <span className="text-[#F27D26] text-xs font-bold tracking-[0.2em] w-6 shrink-0">
                                    0{i + 1}
                                  </span>
                                  <span>{r}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          <div className="md:col-span-5">
                            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 dark:text-gray-500 mb-4">
                              In one line
                            </p>
                            <p className="text-lg md:text-xl font-[Anton] uppercase tracking-tight leading-tight text-black dark:text-white">
                              {p.summary}
                            </p>
                            <a
                              href="#contact"
                              className="mt-7 inline-flex items-center gap-3 px-6 py-3 border border-black/20 dark:border-white/20 hover:bg-[#F27D26] hover:border-[#F27D26] hover:text-white transition-all text-[10px] font-bold tracking-[0.25em] uppercase text-black dark:text-white"
                            >
                              Discuss {p.title.split(' ')[0]} →
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
