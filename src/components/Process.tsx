import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: '10+ YEARS EMEA EXPERTISE',
    description: 'Proven track record managing multiple European markets (DACH, UK, Nordics) specifically for fast-growing B2B SaaS companies.',
    image: '/images/11.png'
  },
  {
    number: '02',
    title: 'THE "TRUSTED BENCH" MODEL',
    description: 'I act as your strategic lead and project manager. I bring in my vetted bench of expert freelancers to execute heavy lifting (copy, ads, design), ensuring scalability without agency bloat.',
    image: '/images/15.png'
  },
  {
    number: '03',
    title: 'PRAGMATIC TECH STACK',
    description: 'A tiered approach to tools that respects your burn rate. From Apollo and HubSpot for lean scale-ups, to 6sense and Salesforce for enterprise growth engines.',
    image: '/images/4.png'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#fafafa] dark:bg-[#050505] border-t border-black/10 dark:border-white/10 overflow-hidden transition-colors duration-300">

      {/* Marquee Title */}
      <div className="relative w-full overflow-hidden mb-24 flex whitespace-nowrap">
        <div className="animate-marquee flex gap-8 items-center">
          {[...Array(4)].map((_, i) => (
            <h2 key={i} className="text-6xl md:text-8xl lg:text-[120px] font-[Anton] text-transparent text-stroke-black dark:text-stroke-white uppercase tracking-tight opacity-30 dark:opacity-50 transition-all duration-300">
              ABOUT ELIZA —
            </h2>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h3 className="text-3xl md:text-4xl font-[Anton] text-black dark:text-white uppercase tracking-wide mb-6 transition-colors">
              Strategic & Hands-On
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed transition-colors">
              Bridging the gap between high-level marketing strategy and operational execution for Series A and B funded SaaS.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative border-t border-black/10 dark:border-white/20 pt-8 pb-8 px-4 -mx-4 overflow-hidden transition-colors"
              >
                {/* Background image reveal on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40 dark:from-[#050505] dark:via-[#050505]/90 dark:to-[#050505]/40 z-10 transition-colors duration-300" />
                  <img
                    src={step.image}
                    alt=""
                    className="w-full h-full object-cover grayscale opacity-20 dark:opacity-40 mix-blend-luminosity scale-105 group-hover:scale-100 transition-all duration-1000"
                  />
                </div>

                <div className="relative z-20 flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  <span className="text-5xl md:text-7xl font-[Anton] text-gray-300 dark:text-gray-800 group-hover:text-[#F27D26] dark:group-hover:text-[#F27D26] transition-colors duration-500">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-[Anton] text-black dark:text-white uppercase tracking-wide mb-4 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl group-hover:text-black dark:group-hover:text-gray-200 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
