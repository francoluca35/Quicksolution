'use client';

import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Utensils, 
  Bike, 
  ShoppingBag, 
  Package,
  Monitor,
  CreditCard,
  Building2,
  TrendingUp,
  Users,
  LogIn,
  Fingerprint,
  MapPin,
  Boxes
} from 'lucide-react';

const features = [
  {
    icon: Utensils,
    title: 'Gestión de Salón',
    description: 'Administra mesas, reservas y atención en el local de forma eficiente',
    color: 'from-orange-400 to-red-600'
  },
  {
    icon: ShoppingBag,
    title: 'Takeaway',
    description: 'Sistema optimizado para pedidos para llevar y retiro en local',
    color: 'from-purple-400 to-pink-600'
  },
  {
    icon: Bike,
    title: 'Delivery',
    description: 'Gestión completa de entregas a domicilio ',
    color: 'from-blue-400 to-cyan-600'
  },
  {
    icon: DollarSign,
    title: 'Finanzas',
    description: 'Control total de ingresos, egresos y reportes financieros',
    color: 'from-green-400 to-emerald-600'
  },
  {
    icon: MapPin,
    title: 'Repartidor con Mapa',
    description: 'Seguimiento en tiempo real de repartidores con mapa integrado',
    color: 'from-red-400 to-pink-600'
  },
  {
    icon: Package,
    title: 'Inventario y Stock',
    description: 'Control de stock en tiempo real con alertas de bajo inventario',
    color: 'from-amber-400 to-orange-600'
  },
  {
    icon: Monitor,
    title: 'Pantalla de Cocina',
    description: 'Pantalla digital para pedidos en cocina con notificaciones',
    color: 'from-yellow-400 to-orange-600'
  },
  {
    icon: CreditCard,
    title: 'Mercado Pago',
    description: 'Integración completa con Mercado Pago para pagos digitales',
    color: 'from-cyan-400 to-blue-600'
  },
  {
    icon: Building2,
    title: 'Gestión del Local',
    description: 'Administra todos los aspectos de tu negocio desde un solo lugar',
    color: 'from-indigo-400 to-purple-600'
  },
  {
    icon: TrendingUp,
    title: 'Control de Ventas',
    description: 'Reportes detallados de ventas con estadísticas y gráficos',
    color: 'from-rose-400 to-pink-600'
  },
  {
    icon: Boxes,
    title: 'Gestión de Inventario',
    description: 'Control completo de productos, insumos y stock disponible',
    color: 'from-teal-400 to-green-600'
  },
  {
    icon: Users,
    title: 'Gestión de Usuarios',
    description: 'Administra permisos y accesos de todo el equipo',
    color: 'from-violet-400 to-purple-600'
  },
  {
    icon: LogIn,
    title: 'Control de Entrada/Salida',
    description: 'Registro de horarios y asistencia del personal',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    icon: Fingerprint,
    title: 'Huella Digital',
    description: 'Sistema de autenticación biométrica para mayor seguridad',
    color: 'from-fuchsia-400 to-pink-600'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-white">
            Todo lo que tu restaurante necesita
          </h2>
          <p className="text-xl text-slate-400">
            Funcionalidades profesionales que aumentan tu rentabilidad
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-orange-500/40 transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
