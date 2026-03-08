import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Eliza transformed our scattered marketing into a scalable engine. Within 3 months of the Campaign Accelerator, our sales pipeline grew by 150%.",
    author: "Sarah Jenkins",
    role: "CEO & Founder",
    image: "/images/8.png"
  },
  {
    quote: "The GTM Audit was a game-changer. We finally understand our Series A positioning, and we've reduced our CAC by 40% using the new roadmap.",
    author: "David Chen",
    role: "CRO",
    image: "/images/11.png"
  },
  {
    quote: "Having Eliza as our Fractional Marketing Lead allows us to punch way above our weight class. She brings the strategy, and her bench executes flawlessly.",
    author: "Elena Rodriguez",
    role: "VP of Sales",
    image: "/images/7.png"
  }
];

export default function Testimonials() {
  return (
    <section id="results" className="py-24 md:py-32 bg-[#fafafa] dark:bg-[#050505] border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-[Anton] text-black dark:text-white uppercase tracking-tight transition-colors">
            CLIENT <br className="hidden md:block" />
            <span className="text-gray-400 dark:text-gray-600 transition-colors">TESTIMONIALS</span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed transition-colors">
            A testimonial is worth more than a long speech. We give the floor to our clients, 100% authentic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col justify-between border-t border-black/10 dark:border-white/20 pt-8 transition-colors"
            >
              <p className="text-xl md:text-2xl font-light text-black dark:text-white leading-relaxed mb-12 transition-colors">
                « {testimonial.quote} »
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover grayscale opacity-80 border border-black/10 dark:border-white/10 transition-colors"
                />
                <div>
                  <h4 className="font-[Anton] text-xl tracking-wide uppercase text-black dark:text-white mb-1 transition-colors">{testimonial.author}</h4>
                  <p className="text-sm font-bold tracking-widest text-[#F27D26] uppercase">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
