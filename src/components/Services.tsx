import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'SEO & CONTENT',
    description: 'Dominate search results with high-intent keywords. We create content that educates, engages, and converts.',
  },
  {
    title: 'PAID ACQUISITION',
    description: 'Scale your user base profitably with targeted campaigns across Google, LinkedIn, and Meta.',
  },
  {
    title: 'CRO & UX',
    description: 'Turn more visitors into trials and trials into paying customers through rigorous A/B testing.',
  },
  {
    title: 'MARKETING AUTOMATION',
    description: 'Nurture leads and reduce churn with personalized, automated email sequences.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-[Anton] text-white uppercase tracking-tight">
            OUR EXPERTISE <br className="hidden md:block" />
            <span className="text-gray-600">SPATZ</span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl font-light text-gray-400 max-w-2xl leading-relaxed">
            At SPATZ, creative elegance and performance drive every project. Specialists in SaaS marketing strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer border-t border-white/20 pt-8"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl md:text-4xl font-[Anton] text-white uppercase tracking-wide group-hover:text-[#F27D26] transition-colors">
                  {service.title}
                </h3>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:rotate-45">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <p className="text-lg text-gray-400 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <a href="#contact" className="relative group w-48 h-48 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-center px-4">
              All our services
            </span>
            <div className="absolute inset-0 rounded-full border border-white/10 scale-110 group-hover:scale-100 transition-transform duration-500"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
