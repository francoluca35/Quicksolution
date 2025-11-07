# Guía de Migración a Next.js + TypeScript

Esta aplicación ha sido migrada exitosamente de React a Next.js 14 con TypeScript.

## 🔄 Cambios Realizados

### Estructura de Archivos

```
Antes (React):                  Después (Next.js):
/App.tsx                   →    /app/page.tsx
                           →    /app/layout.tsx
/components/*              →    /components/* (sin cambios)
/styles/globals.css        →    /styles/globals.css (sin cambios)
```

### Archivos de Configuración Nuevos

- `package.json` - Dependencias actualizadas para Next.js
- `tsconfig.json` - Configuración de TypeScript
- `next.config.js` - Configuración de Next.js
- `next-env.d.ts` - Tipos de TypeScript para Next.js
- `.gitignore` - Archivos ignorados por Git

### Cambios en Componentes

#### 1. Directiva 'use client'

Todos los componentes que usan hooks o interactividad necesitan la directiva:

```tsx
'use client';

import { useState } from 'react';
// ... resto del componente
```

**Componentes actualizados:**
- `Navbar.tsx` - usa useState
- `Hero.tsx` - usa motion
- `Features.tsx` - usa motion
- `VideoDemo.tsx` - usa motion
- `Pricing.tsx` - usa useState y motion
- `Testimonials.tsx` - usa motion
- `CTA.tsx` - usa motion

#### 2. Next.js Image Component

Reemplazamos `<img>` con `<Image>` de Next.js para optimización automática:

```tsx
// Antes
<img src={logoImage} alt="QuickSolution" />

// Después
import Image from 'next/image';
<Image src={logoImage} alt="QuickSolution" width={40} height={40} />
```

**Componentes actualizados:**
- `Navbar.tsx`
- `Hero.tsx`
- `CTA.tsx`
- `Testimonials.tsx`

### Configuración de Next.js

#### next.config.js

```javascript
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}
```

Esta configuración permite cargar imágenes desde Unsplash.

#### tsconfig.json

- Configurado para Next.js con `moduleResolution: "bundler"`
- Path aliases: `@/*` apunta a la raíz del proyecto
- Strict mode habilitado

## 🚀 Comandos

```bash
# Desarrollo
npm run dev

# Producción
npm run build
npm start

# Linting
npm run lint
```

## 📦 Dependencias Principales

```json
{
  "next": "^14.2.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "typescript": "^5.4.0",
  "tailwindcss": "^4.0.0",
  "motion": "^10.18.0",
  "lucide-react": "^0.400.0"
}
```

## ✨ Ventajas de Next.js

1. **SSR/SSG** - Renderizado del lado del servidor
2. **Optimización de imágenes** - Automática con `next/image`
3. **Routing** - File-based routing automático
4. **Performance** - Mejor rendimiento out-of-the-box
5. **SEO** - Mejores capacidades de SEO con metadata
6. **TypeScript** - Soporte nativo y completo

## 🔧 Mantenimiento

### Agregar nuevas páginas

Crea archivos en `/app`:
```
/app/about/page.tsx
/app/contact/page.tsx
```

### Agregar metadata

En cualquier `page.tsx` o `layout.tsx`:
```tsx
export const metadata = {
  title: 'Mi Página',
  description: 'Descripción',
}
```

### Componentes Client vs Server

- **Server Components** (por defecto): No necesitan 'use client'
- **Client Components**: Necesitan 'use client' si usan:
  - useState, useEffect, otros hooks
  - Event handlers (onClick, onChange, etc.)
  - Browser APIs
  - Librerías client-side (como motion)

## 📚 Recursos

- [Documentación Next.js](https://nextjs.org/docs)
- [TypeScript con Next.js](https://nextjs.org/docs/basic-features/typescript)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Motion (Framer Motion)](https://motion.dev)
