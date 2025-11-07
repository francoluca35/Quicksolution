'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Subtle Gradient Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-red-500/10 border border-orange-500/20 rounded-full"
            >
              <span className="text-orange-400">🍽️ Diseñado por expertos en restaurantes</span>
            </motion.div>
            
            <h1 className="text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              Quick Solution
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              El sistema más completo para gestionar tu restaurante. Aumenta ventas, reduce errores 
              y optimiza cada aspecto de tu negocio gastronómico desde una plataforma profesional.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-orange-500/30 transition-shadow text-white"
              >
                Comenzar Ahora
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-lg flex items-center gap-2 hover:bg-slate-700 transition-colors text-white"
              >
                <Play className="w-5 h-5" />
                Ver Demo
              </motion.button>
            </div>
            
            <div className="mt-12 flex gap-8">
              <div>
                <div className="text-3xl mb-1 text-white">500+</div>
                <div className="text-slate-400 text-sm">Restaurantes Activos</div>
              </div>
              <div>
                <div className="text-3xl mb-1 text-white">50K+</div>
                <div className="text-slate-400 text-sm">Comandas Diarias</div>
              </div>
              <div>
                <div className="text-3xl mb-1 text-white">99.9%</div>
                <div className="text-slate-400 text-sm">Disponibilidad</div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Content - Devices Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex items-center justify-center min-h-[500px] lg:min-h-[600px]"
          >
            {/* Background Glow */}
      
            <div className="relative w-full max-w-2xl">
              {/* Tablet 1 - Dashboard (Left Back) */}
              <motion.div
                initial={{ opacity: 0, x: -100, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute left-0 top-16 w-[45%] z-10"
                whileHover={{ scale: 1.05, x: -10, transition: { duration: 0.3 } }}
              >
                <div className="relative">
                  <Image 
                    src={'/assets/tablet.png'} 
                    alt="Dashboard QuickSolution" 
                    width={500}
                    height={400}
                    className="w-full h-auto drop-shadow-2xl rounded-xl"
                  />
               
                </div>
              </motion.div>
              
              {/* Tablet 2 - Reportes (Right Back) */}
              <motion.div
                initial={{ opacity: 0, x: 100, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute right-0 top-16 w-[45%] z-10"
                whileHover={{ scale: 1.05, x: 10, transition: { duration: 0.3 } }}
              >
                <div className="relative">
                  <Image 
                    src={'/assets/tablet2.png'} 
                    alt="Reportes QuickSolution" 
                    width={500}
                    height={400}
                    className="w-full h-auto drop-shadow-2xl rounded-xl"
                  />
                 
                </div>
              </motion.div>
              
              {/* Phone - Front Center */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="relative z-30 flex justify-center pt-32"
                whileHover={{ scale: 1.08, y: -8, transition: { duration: 0.3 } }}
              >
                <div className="w-[40%] max-w-[200px]">
                  <Image 
                    src={'/assets/mobile.png'} 
                    alt="App Móvil QuickSolution" 
                    width={200}
                    height={400}
                    className="w-full h-auto drop-shadow-2xl"
                  />
                  
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
