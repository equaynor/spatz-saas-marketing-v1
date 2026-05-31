import { motion } from 'motion/react';
import { Globe, MapPin, Award, BookOpen } from 'lucide-react';

const bullets = [
  {
    title: 'Strategic thinking + creative execution',
    body: 'Big marketing strategies tied directly to operational delivery. Most can plan or execute. I do both.',
  },
  {
    title: 'Marketing that understands sales',
    body: 'Every plan starts from the lens of pipeline and revenue — campaigns built to deliver real business impact.',
  },
  {
    title: 'International perspective',
    body: 'Stations across Cape Town, Vienna, Munich, Frankfurt and London — fluent across DACH, UK and Nordic markets.',
  },
  {
    title: 'Network & partner ecosystem',
    body: 'Deep knowledge of SaaS partnerships, hyperscaler programmes and tech alliances — and how to convert them into shared growth.',
  },
  {
    title: 'Energy, creativity and passion',
    body: 'Marketing should be effective — and it should be fun. That energy goes into every project.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-white dark:bg-[#050505] border-t border-black/10 dark:border-white/10 overflow-hidden transition-colors duration-300"
    >
      {/* Dynamic Animated Headline Marquee */}
      <div className="relative w-full overflow-hidden mb-20 flex whitespace-nowrap">
        <div className="animate-marquee flex gap-12 items-center">
          {[...Array(6)].map((_, i) => (
            <h2
              key={i}
              className="text-6xl md:text-8xl lg:text-[120px] font-[Anton] text-transparent text-stroke-black dark:text-stroke-white uppercase tracking-tight opacity-40 dark:opacity-50"
            >
              About Eliza —
            </h2>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Three Column Elite Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* Column 1: Portrait & Biographical Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl group pointer-events-auto">
              <img 
                src="/images/15.png" 
                alt="Eliza-Marie Spatz Portrait" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#050505] via-transparent to-transparent opacity-60" />
              <p className="absolute bottom-4 left-4 right-4 text-xs italic text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                "Marketing should move the business — and be a pleasure to do."
              </p>
            </div>

            {/* Premium Meta Grid */}
            <div className="grid grid-cols-2 gap-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-5 shadow-xl">
              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-gray-500 font-bold">Nationality</p>
                  <p className="text-sm font-semibold text-black dark:text-white mt-0.5">German</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-gray-500 font-bold">Based In</p>
                  <p className="text-sm font-semibold text-black dark:text-white mt-0.5">London, UK</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-gray-500 font-bold">Practice</p>
                  <p className="text-sm font-semibold text-black dark:text-white mt-0.5">13+ Years</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <BookOpen className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-gray-500 font-bold">Coverage</p>
                  <p className="text-[11px] font-semibold text-black dark:text-white mt-0.5 leading-tight">EMEA (DACH/UK)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Biographical Narrative Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-4 lg:px-4"
          >
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#F27D26] mb-6">— About Me</p>
            <h3 className="text-3xl md:text-5xl font-[Anton] text-black dark:text-white uppercase tracking-tight leading-[1] mb-8">
              13+ years <br /> of strategic, hands-on marketing
            </h3>
            <div className="space-y-6 text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed">
              <p>
                I'm Eliza-Marie Spatz — a marketing consultant with more than 13 years of international experience, specialised in strategic
                growth for tech, SaaS and data-driven companies. Born in Germany, with stations across Cape Town, Vienna, Munich and Frankfurt,
                now based in London.
              </p>
              <p>
                My career started in the film industry, where I learned how storytelling, emotion and creativity make brands unforgettable.
                I later moved into IT, data solutions and SaaS — and pulled that creative thinking into strategic, data-driven marketing campaigns.
              </p>
              <p className="text-[#F27D26] font-normal italic">
                Today I help companies turn marketing into a real engine for growth.
              </p>
            </div>
          </motion.div>

          {/* Column 3: "What Sets Me Apart" Bullet List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 lg:pl-6 lg:border-l border-black/10 dark:border-white/10"
          >
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-8">— What sets me apart</p>
            <div className="space-y-6">
              {bullets.map((b, i) => (
                <div key={b.title} className="group">
                  <div className="flex items-baseline gap-3.5">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#F27D26] w-6 shrink-0">0{i + 1}</span>
                    <div>
                      <h4 className="text-lg font-[Anton] uppercase tracking-wide text-black dark:text-white mb-1 group-hover:text-[#F27D26] transition-colors leading-tight">
                        {b.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-light">{b.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
