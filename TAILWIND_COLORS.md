# Guía para Personalizar Colores en Tailwind CSS v4

## Problema Resuelto

Los colores de Tailwind ahora deberían funcionar correctamente. El problema era:
1. ✅ Se eliminó la importación duplicada de `index.css`
2. ✅ Se configuró correctamente PostCSS con autoprefixer
3. ✅ Se aseguró que `@import "tailwindcss"` esté al inicio de `globals.css`

## Cómo Personalizar Colores en Tailwind v4

### Método 1: Personalizar colores existentes

Edita `src/styles/globals.css` y agrega un bloque `@theme`:

```css
@theme {
  /* Sobrescribir el color orange-500 */
  --color-orange-500: #f97316; /* Tu color personalizado */
  
  /* Agregar un nuevo color personalizado */
  --color-mi-naranja: #ff6b35;
  --color-mi-naranja-oscuro: #ee5a24;
}
```

### Método 2: Usar variables CSS existentes

Ya tienes variables CSS definidas en `:root`. Puedes usarlas así:

```css
@theme {
  --color-primary: var(--primary);
  --color-secondary: var(--secondary);
}
```

Luego en tus componentes:
```tsx
<div className="bg-primary text-primary-foreground">
  Contenido
</div>
```

### Método 3: Personalizar toda la paleta de un color

```css
@theme {
  --color-mi-azul-50: #eff6ff;
  --color-mi-azul-100: #dbeafe;
  --color-mi-azul-200: #bfdbfe;
  --color-mi-azul-300: #93c5fd;
  --color-mi-azul-400: #60a5fa;
  --color-mi-azul-500: #3b82f6;
  --color-mi-azul-600: #2563eb;
  --color-mi-azul-700: #1d4ed8;
  --color-mi-azul-800: #1e40af;
  --color-mi-azul-900: #1e3a8a;
  --color-mi-azul-950: #172554;
}
```

## Ejemplo Práctico

Si quieres cambiar el color naranja (`orange-500`) a un rojo más intenso:

1. Abre `src/styles/globals.css`
2. Agrega después de `@custom-variant dark`:

```css
@theme {
  --color-orange-500: #ef4444; /* Rojo de Tailwind */
  --color-orange-600: #dc2626; /* Rojo más oscuro */
}
```

3. Guarda y los componentes que usan `orange-500` ahora usarán tu color personalizado.

## Verificar que Funciona

1. Reinicia el servidor de desarrollo: `npm run dev`
2. Los colores deberían aplicarse automáticamente
3. Si no funcionan, verifica que:
   - No tengas caché del navegador (Ctrl+Shift+R)
   - El servidor se haya reiniciado
   - No haya errores en la consola

## Colores Actuales en tu Proyecto

Los colores más usados son:
- `orange-500`, `orange-400`, `orange-600` - Color principal
- `amber-500`, `amber-400`, `amber-600` - Color secundario
- `slate-900`, `slate-800`, `slate-950` - Fondos oscuros
- `slate-300`, `slate-400` - Textos grises

