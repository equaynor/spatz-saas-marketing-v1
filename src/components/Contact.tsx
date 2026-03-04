import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-[Anton] text-white uppercase tracking-tight mb-8">
              PRENONS <br />
              <span className="text-gray-600">RENDEZ-VOUS</span>
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-md">
              Prêt à faire évoluer votre acquisition ? Laissez-nous un message et nous vous recontacterons dans les plus brefs délais.
            </p>
          </div>
          
          <div className="bg-[#111] p-8 md:p-12 border border-white/10">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="text" id="firstName" className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent" placeholder="Nom / Prénom*" required />
                  <label htmlFor="firstName" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white uppercase tracking-wider">Nom / Prénom*</label>
                </div>
                <div className="relative">
                  <input type="email" id="email" className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent" placeholder="Email*" required />
                  <label htmlFor="email" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white uppercase tracking-wider">Email*</label>
                </div>
              </div>
              
              <div className="relative">
                <input type="tel" id="phone" className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent" placeholder="Téléphone*" required />
                <label htmlFor="phone" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white uppercase tracking-wider">Téléphone*</label>
              </div>
              
              <div className="relative">
                <textarea id="message" rows={4} className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent resize-none" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white uppercase tracking-wider">Message</label>
              </div>
              
              <div className="flex items-start gap-3">
                <input type="checkbox" id="consent" className="mt-1 bg-transparent border-white/20" required />
                <label htmlFor="consent" className="text-sm text-gray-500 font-light">
                  Je consens à l'exploitation de mes données personnelles afin de répondre à ma demande. SPATZ s'engage à ne pas utiliser les informations vous concernant à d'autres fins.
                </label>
              </div>
              
              <button type="submit" className="group relative w-full md:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-500">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
