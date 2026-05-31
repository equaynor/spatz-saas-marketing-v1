import { motion } from 'motion/react';
import { Linkedin, MessageSquare, Quote, CheckCircle2 } from 'lucide-react';

const recommendations = [
  {
    name: 'Heiner Habeck',
    role: 'CEO',
    company: 'camos',
    text: "Eliza-Marie's skills in hosting enterprise customer events in European metropolises like London, Munich, and Paris made these impactful and enjoyable at the same time. They allowed us to deepen relationships with senior decision makers and nurture sales opportunities to successful closures. She's an experienced, high-quality marketeer and a pleasure to work with.",
    image: '/images/recommender-1.png'
  },
  {
    name: 'Danilo Zatta, PhD, MBA',
    role: 'Revenue Growth & Pricing Advisor',
    company: 'TopLine, Pricing, Commercial Excellence',
    text: 'Working with Eliza-Marie has been an absolute pleasure. She fosters a clear, collaborative dynamic and consistently brings a calm, solutions-driven energy. Her event preparation is outstanding—she clarifies objectives early, coordinates stakeholders with confidence, and combines strategic thinking with meticulous execution.',
    image: '/images/recommender-2.png'
  },
  {
    name: 'Richard J Moore',
    role: 'B2B Marketing Leader | Advisor | Consultant',
    company: 'B2B Marketing Leadership',
    text: "I've had the pleasure of working closely with Eliza-Marie on multiple event marketing initiatives across DACH, Nordics, and the UK and witnessed how she consistently delivers exceptional outcomes through a blend of strategy, creativity, and immaculate execution. A marketing star who was a pleasure to work with.",
    image: '/images/recommender-3.png'
  }
];

export default function Testimonial() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#050505] border-t border-black/10 dark:border-white/10 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Teresa Quote Section */}
        <div className="max-w-5xl mx-auto text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#F27D26] mb-10">— Current Client Sentiment</p>
            
            <div className="relative inline-block mb-4">
              <Quote className="w-16 h-16 text-[#F27D26]/10 absolute -top-8 -left-8 pointer-events-none" />
              <blockquote className="text-2xl md:text-4xl lg:text-5xl font-[Anton] text-black dark:text-white uppercase leading-[1.05] tracking-tight relative z-10">
                “Eliza-Marie, I keep noticing how much our colleagues love being around you. <br />
                <span className="text-[#F27D26] italic font-light font-sans tracking-wide normal-case text-xl md:text-3xl block mt-2">
                  Your energy is contagious
                </span> 
                — it's a real pleasure working with you.”
              </blockquote>
            </div>

            <div className="mt-8 inline-flex flex-col items-center gap-1.5">
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-black dark:text-white">Teresa</p>
              <p className="text-xs tracking-[0.2em] uppercase text-gray-600 dark:text-gray-500">VP HR — Lisbon Kick-Off, January 2025</p>
            </div>
          </motion.div>
        </div>

        {/* LinkedIn Recommendations Grid */}
        <div className="border-t border-black/10 dark:border-white/10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#F27D26] mb-4">— Social Proof</p>
              <h3 className="text-3xl md:text-5xl font-[Anton] text-black dark:text-white uppercase tracking-tight leading-[1]">
                Recommendations from LinkedIn
              </h3>
            </div>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-center md:self-end px-5 py-2.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-[#F27D26] hover:border-[#F27D26] hover:text-white text-xs font-bold tracking-widest text-black dark:text-white uppercase transition-all duration-300"
            >
              <Linkedin className="w-4 h-4 shrink-0" /> Visit LinkedIn Profile
            </a>
          </motion.div>

          {/* 3-Column LinkedIn Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col justify-between bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:border-[#F27D26]/20 transition-all duration-500 pointer-events-auto group"
              >
                <div>
                  {/* LinkedIn Style Header */}
                  <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-4 mb-6">
                    <span className="flex items-center gap-2 text-[8px] tracking-[0.25em] uppercase text-gray-500 font-bold">
                      <Linkedin className="w-3.5 h-3.5 text-[#F27D26]" /> Recommendation
                    </span>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-[8px] text-green-500 font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Verified
                    </span>
                  </div>

                  <p className="text-sm text-gray-650 dark:text-gray-300 font-light leading-relaxed mb-6 relative">
                    <MessageSquare className="w-10 h-10 text-black/5 dark:text-white/5 absolute -top-4 -left-4 pointer-events-none group-hover:text-[#F27D26]/5 transition-colors" />
                    "{rec.text}"
                  </p>
                </div>

                {/* Profile Signature */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-black/5 dark:border-white/5 mt-6">
                  {/* Profile Photo */}
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#F27D26]/30 shadow-md group-hover:border-[#F27D26] transition-colors duration-300"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-black dark:text-white tracking-wide">{rec.name}</h4>
                    <p className="text-[10px] text-gray-600 dark:text-gray-400 font-medium leading-snug">{rec.role}</p>
                    <p className="text-[9px] text-gray-600 dark:text-gray-500 font-bold uppercase tracking-wider mt-0.5">{rec.company}</p>
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
