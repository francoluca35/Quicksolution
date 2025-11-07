import { Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4 text-white">
              QuickSolution
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              La solución integral para gestionar tu restaurante de forma profesional.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://wa.me/5491131199882" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center hover:scale-110 transition-transform"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="text-white mb-4">Producto</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#features" className="hover:text-orange-400 transition-colors">Características</a></li>
              <li><a href="#pricing" className="hover:text-orange-400 transition-colors">Precios</a></li>
              <li><a href="#demo" className="hover:text-orange-400 transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Integraciones</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Compañía</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <span>(+54) 911 3119-9882</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400" />
                <span>francoiucap1@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span>Merlo, Buenos Aires</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 QuickSolution. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Términos</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
