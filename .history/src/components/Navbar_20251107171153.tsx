'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Características', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'Precios', href: '#pricing' },
    { name: 'Testimonios', href: '#testimonials' },
  ];
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
           
            <span className="text-xl text-white"><span className='text-green-400'>Q</span>uick<span>S</span>olution</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#demo"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Ver Demo
            </a>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-shadow"
            >
              Comenzar Ahora
            </motion.a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-slate-800/50"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-slate-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg text-center"
            >
              Comenzar Ahora
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
