import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'DISCOVERY & AUDIT',
    description: 'We dive deep into your product, target audience, and current marketing efforts to identify growth levers.',
  },
  {
    number: '02',
    title: 'CUSTOM STRATEGY',
    description: 'We craft a custom, multi-channel marketing roadmap tailored to your specific MRR goals and budget.',
  },
  {
    number: '03',
    title: 'EXECUTION & LAUNCH',
    description: 'Our team of specialists implements the strategy, from setting up campaigns to publishing content.',
  },
  {
    number: '04',
    title: 'OPTIMIZATION & SCALING',
    description: 'We continuously monitor performance, run A/B tests, and scale the channels that deliver the best CAC/LTV ratio.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#050505] border-t border-white/10 overflow-hidden">
      
      {/* Marquee Title */}
      <div className="relative w-full overflow-hidden mb-24 flex whitespace-nowrap">
        <div className="animate-marquee flex gap-8 items-center">
          {[...Array(4)].map((_, i) => (
            <h2 key={i} className="text-6xl md:text-8xl lg:text-[120px] font-[Anton] text-transparent text-stroke-white uppercase tracking-tight opacity-50">
              OUR METHOD —
            </h2>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h3 className="text-3xl md:text-4xl font-[Anton] text-white uppercase tracking-wide mb-6">
              A systematic approach
            </h3>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              A proven method to scale your SaaS, refined through years of experience and millions in ad spend.
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
                className="group relative border-t border-white/20 pt-8"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  <span className="text-5xl md:text-7xl font-[Anton] text-gray-800 group-hover:text-[#F27D26] transition-colors duration-500">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-[Anton] text-white uppercase tracking-wide mb-4">
                      {step.title}
                    </h4>
                    <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl">
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
