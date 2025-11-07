'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfecto para comenzar',
    monthlyPrice: 29,
    annualPrice: 290,
    features: [
      'Hasta 5 mesas',
      'Comandas básicas',
      'App para mozos',
      'Tickets digitales',
      'Soporte por email',
      'Reportes básicos'
    ],
    popular: false
  },
  {
    name: 'Professional',
    description: 'Para restaurantes en crecimiento',
    monthlyPrice: 79,
    annualPrice: 790,
    features: [
      'Mesas ilimitadas',
      'Delivery integrado',
      'Takeaway y self-service',
      'Control de stock',
      'Facturación electrónica',
      'Estadísticas avanzadas',
      'QR para comensales',
      'Comandas en cocina',
      'Soporte prioritario',
      'Recetas y costos'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'Solución completa para cadenas',
    monthlyPrice: 199,
    annualPrice: 1990,
    features: [
      'Todo en Professional',
      'Multi-sucursal',
      'API personalizada',
      'Integraciones custom',
      'Gerente de cuenta dedicado',
      'Capacitación on-site',
      'SLA garantizado',
      'Reportes personalizados'
    ],
    popular: false
  }
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl mb-4 text-white">
            Planes que se adaptan a tu negocio
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Elige el plan perfecto para tu restaurante
          </p>
          
          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full p-2">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full transition-all ${
                !isAnnual 
                  ? 'bg-gradient-to-r from-orange-500 to-amber-100 text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full transition-all flex items-center gap-2 ${
                isAnnual 
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Anual
              <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                Ahorra 17%
              </span>
            </button>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1 z-20">
                  <Sparkles className="w-4 h-4" />
                  Más Popular
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br rounded-3xl blur-xl transition-all ${
                plan.popular 
                  ? 'from-orange-500/20 to-amber-500/20 group-hover:blur-2xl' 
                  : 'from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100'
              }`} />
              
              <div className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-3xl p-8 h-full flex flex-col ${
                plan.popular 
                  ? 'border-orange-500/50 shadow-2xl shadow-orange-500/10' 
                  : 'border-slate-800/50'
              }`}>
                <div className="mb-6">
                  <h3 className="text-2xl mb-2 text-white">{plan.name}</h3>
                  <p className="text-slate-400">{plan.description}</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl text-white">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-slate-400">
                      /{isAnnual ? 'año' : 'mes'}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-green-400 mt-2">
                      Ahorras ${(plan.monthlyPrice * 12) - plan.annualPrice} al año
                    </p>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  Comenzar Ahora
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
