'use client';

import { motion } from 'framer-motion';
import { Play, Monitor, Smartphone, Tablet } from 'lucide-react';

const videos = [
  {
    title: 'Gestión de Mesas en Salón',
    description: 'Administra todas tus mesas en tiempo real con un sistema intuitivo',
    icon: Monitor,
    thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
    duration: '2:30'
  },
  {
    title: 'Sistema de Delivery con Mapa',
    description: 'Rastrea a tus repartidores en tiempo real y optimiza las entregas',
    icon: Smartphone,
    thumbnail: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=500&fit=crop',
    duration: '3:15'
  },
  {
    title: 'Pantalla de Cocina Digital',
    description: 'Comandas digitales que eliminan errores y mejoran la eficiencia',
    icon: Tablet,
    thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=500&fit=crop',
    duration: '2:45'
  }
];

export function VideoDemo() {
  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-slate-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-white">
            Mira QuickSolution en acción
          </h2>
          <p className="text-xl text-slate-400">
            Descubre cómo nuestro sistema puede transformar tu restaurante
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-green-500/50 transition-all">
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-sm text-white">
                    {video.duration}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-600/20 flex items-center justify-center">
                      <video.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-xl text-white">{video.title}</h3>
                  </div>
                  <p className="text-slate-400">{video.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Full Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-shadow"
          >
            Solicitar Demo Completa
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
