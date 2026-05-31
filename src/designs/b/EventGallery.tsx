import { motion } from 'motion/react';
import { Calendar, Users, TrendingUp, Compass, ArrowUpRight } from 'lucide-react';

const events = [
  {
    title: 'Executive Dinners',
    description: 'Exclusive partner and roundtable dinners in London, Frankfurt, and Munich. Designed for high-value account engagement and pipeline acceleration.',
    image: '/images/portfolio-bg-1.png',
    metric: '92% Attendance Rate'
  },
  {
    title: 'Partner Co-Marketing Alliances',
    description: 'Joint campaigns and co-hosted GTM events with AWS, Cognizant, and Eptura ecosystem partners to capture shared cloud pipeline.',
    image: '/images/portfolio-bg-2.png',
    metric: 'AWS Co-Sell Approved'
  },
  {
    title: 'Proprietary B2B Showcases',
    description: 'Interactive trade shows, workshops, and proprietary showcases focused on demand generation and handson product visibility.',
    image: '/images/portfolio-bg-3.png',
    metric: '4x ROI on Spend'
  }
];

export default function EventGallery() {
  return (
    <section id="events" className="py-24 md:py-32 bg-[#fafafa] dark:bg-[#0a0a0a] border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24 max-w-4xl"
        >
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#F27D26] mb-6">— Event Portfolio</p>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-[Anton] text-black dark:text-white uppercase tracking-tight leading-[0.95]">
            Visions turned
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-700 to-[#F27D26]">into pipeline</span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            From exclusive C-level dinners to hyperscaler alliance showcases — event marketing built with commercial intent.
          </p>
        </motion.div>

        {/* Marquee Featured Event (Aston Martin Photo) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden bg-black/5 dark:bg-white/5 shadow-2xl mb-16 group pointer-events-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image side */}
            <div className="lg:col-span-8 relative aspect-[16/9] lg:aspect-auto min-h-[300px] md:min-h-[450px] overflow-hidden">
              <img 
                src="/images/syncron_event.jpg" 
                alt="Syncron EMEA Partner Event & Showcase" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#fafafa]/95 dark:to-[#0a0a0a]/90 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] dark:from-[#0a0a0a] via-transparent to-transparent block lg:hidden" />
            </div>

            {/* Content side */}
            <div className="lg:col-span-4 p-8 md:p-10 flex flex-col justify-between relative z-10 bg-[#fafafa]/95 dark:bg-[#0a0a0a]/95 backdrop-blur-sm lg:bg-transparent">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F27D26]/10 border border-[#F27D26]/20 text-[9px] text-[#F27D26] uppercase font-bold tracking-widest mb-6">
                  <Calendar className="w-3.5 h-3.5" /> Featured Event
                </span>
                <h3 className="text-3xl md:text-4xl font-[Anton] uppercase tracking-tight text-black dark:text-white mb-4 leading-tight">
                  Syncron EMEA Partner Event
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-8">
                  End-to-end strategic execution of the marquee B2B partner showcase. Custom themed experience co-hosted with regional alliance ecosystems, designed for pipeline generation, key account upsell, and sales enablement.
                </p>
              </div>

              {/* Event Metrics */}
              <div className="space-y-4 border-t border-black/10 dark:border-white/10 pt-6">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    <Users className="w-4 h-4 text-[#F27D26]" /> Qualified Attendees
                  </span>
                  <span className="text-sm font-bold text-black dark:text-white tracking-wide">120+ Executives</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    <TrendingUp className="w-4 h-4 text-[#F27D26]" /> Pipeline Impact
                  </span>
                  <span className="text-sm font-bold text-[#F27D26] tracking-wide">€1.2M+ Opportunity</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    <Compass className="w-4 h-4 text-[#F27D26]" /> Alliance Scope
                  </span>
                  <span className="text-sm font-bold text-black dark:text-white tracking-wide">AWS & Cognizant Joint GTM</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((e, index) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden shadow-xl hover:border-[#F27D26]/30 transition-all duration-500 pointer-events-auto"
            >
              {/* Image box */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={e.image} 
                  alt={e.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity group-hover:mix-blend-normal transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] dark:from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 bg-[#fafafa]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm px-2.5 py-0.5 rounded text-[8px] tracking-widest text-[#F27D26] uppercase font-bold border border-black/5 dark:border-white/5 shadow">
                  {e.metric}
                </span>
              </div>

              {/* Text box */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl md:text-2xl font-[Anton] uppercase tracking-wide text-black dark:text-white mb-3 group-hover:text-[#F27D26] transition-colors leading-tight">
                    {e.title}
                  </h4>
                  <p className="text-xs text-gray-650 dark:text-gray-400 leading-relaxed font-light mb-6">
                    {e.description}
                  </p>
                </div>
                
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[9px] font-bold tracking-[0.25em] uppercase text-black/50 dark:text-white/50 group-hover:text-[#F27D26] transition-colors pt-4 border-t border-black/5 dark:border-white/5"
                >
                  Discuss Format <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
