'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'María González',
    role: 'Dueña - La Esquina Gourmet',
    content: 'QuickSolution transformó completamente nuestro restaurante. Antes perdíamos comandas y el control del stock era un caos. Ahora todo fluye perfectamente.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    name: 'Carlos Méndez',
    role: 'Gerente - Sabor Urbano',
    content: 'La integración con delivery y takeaway nos permitió duplicar nuestras ventas. El sistema de QR para comensales es increíble, los clientes lo aman.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  },
  {
    name: 'Ana Rodríguez',
    role: 'Chef & Propietaria - Fusión 21',
    content: 'Las comandas digitales en cocina son un game-changer. Ya no hay errores y los tiempos de espera se redujeron un 40%. Súper recomendado.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-white">
            Historias de éxito
          </h2>
          <p className="text-xl text-slate-400">
            Miles de restaurantes confían en QuickSolution
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-orange-500/40 transition-all">
                <Quote className="w-10 h-10 text-orange-400 mb-4 opacity-50" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
