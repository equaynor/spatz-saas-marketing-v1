import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "I highly recommend this agency. It is always a pleasure to collaborate with this team.",
    author: "Sarah Jenkins",
    role: "General Manager",
  },
  {
    quote: "A big thank you to the SPATZ team who guided me in the overhaul of our acquisition strategy.",
    author: "David Chen",
    role: "Founder",
  },
  {
    quote: "Genuine expertise, a competent, facilitating, and attentive team: in short, highly recommended!",
    author: "Elena Rodriguez",
    role: "VP of Marketing",
  }
];

export default function Testimonials() {
  return (
    <section id="results" className="py-24 md:py-32 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-[Anton] text-white uppercase tracking-tight">
            CLIENT <br className="hidden md:block" />
            <span className="text-gray-600">TESTIMONIALS</span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl font-light text-gray-400 max-w-2xl leading-relaxed">
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
              className="flex flex-col justify-between border-t border-white/20 pt-8"
            >
              <p className="text-xl md:text-2xl font-light text-white leading-relaxed mb-12">
                « {testimonial.quote} »
              </p>
              <div>
                <h4 className="font-[Anton] text-xl tracking-wide uppercase text-white mb-1">{testimonial.author}</h4>
                <p className="text-sm font-bold tracking-widest text-[#F27D26] uppercase">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
