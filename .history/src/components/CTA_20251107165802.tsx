'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';


export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-violet-800 to-amber-500/10 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-12 overflow-hidden">
            {/* Logo decoration */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 opacity-10">
              <Image src={'/assets/1276ecaad674760b140d200d150c89830fbf9063.png'} alt="" width={256} height={256} className="w-full h-full object-contain" />
            </div>
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-white">Prueba gratis por 30 días</span>
              </motion.div>
              
              <h2 className="text-5xl mb-6 text-white">
                ¿Listo para revolucionar tu restaurante?
              </h2>
              
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Únete a cientos de restaurantes que ya optimizaron su operación con QuickSolution. 
                Sin compromisos, cancela cuando quieras.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-orange-500/30 transition-shadow"
                >
                  Comenzar Gratis
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-800 border border-slate-700 text-white rounded-lg hover:bg-slate-700 transition-colors"
                >
                  Agendar Demo
                </motion.button>
              </div>
              
              <p className="text-sm text-slate-400 mt-6">
                No requiere tarjeta de crédito • Setup en minutos • Soporte en español
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
