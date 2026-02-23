# 🚀 Quick Start Guide

## Comenzar en 5 minutos

### 1. Instalar y Ejecutar

```bash
npm install
npm run dev
```

Abre http://localhost:3000 para ver tu portafolio en desarrollo.

### 2. Actualizar tu Información Personal

**Archivo**: `src/config/constants.js`

```javascript
export const SITE_CONFIG = {
  name: 'Tu Nombre',                              // Cambia esto
  title: 'Tu Nombre | Tu Profesión',              // Cambia esto
  description: 'Tu descripción...',               // Cambia esto
  url: 'https://tudominio.com',                   // Cambia esto
  email: 'tu-email@example.com',                  // Cambia esto
  phone: '+1-234-567-8900',                       // Cambia esto
};

// Hero section
export const HERO_TEXTS = [
  'Tu especialidad 1',                            // Cambia esto
  'Tu especialidad 2',                            // Cambia esto
  'Tu especialidad 3',                            // Cambia esto
];
```

### 3. Agregar tus Proyectos

**Archivo**: `src/config/projects.js`

```javascript
export const projects = [
  {
    id: 'proyecto-1',               // ID único para la URL
    title: 'Mi Proyecto',           // Nombre del proyecto
    category: 'Web App',            // Categoría
    description: 'Descripción...',  // Descripción completa
    shortDescription: 'Corta',      // Descripción corta
    color: 'blue',                  // Color: emerald|blue|orange|purple
    icon: '🎨',                     // Emoji para el proyecto
    tags: ['React', 'Node.js'],     // Tecnologías
    image: '/img/project.png',      // Imagen principal
    // ... más propiedades
  },
];
```

### 4. Configurar Stack Tecnológico

**Archivo**: `src/config/constants.js`

```javascript
export const TECH_STACK = {
  frontend: [
    { name: 'React', level: 'Expert', icon: '⚛️' },
    { name: 'Next.js', level: 'Expert', icon: '▲' },
    // Agregar más...
  ],
  backend: [
    { name: 'Node.js', level: 'Advanced', icon: '🟢' },
    // Agregar más...
  ],
  tools: [
    { name: 'Git', level: 'Expert', icon: '📚' },
    // Agregar más...
  ],
};
```

### 5. Activar Formulario de Contacto

1. Ve a [formspree.io](https://formspree.io/) y crea una cuenta
2. Crea un nuevo proyecto
3. Copia tu ID (ejemplo: `xyz123`)
4. En `src/components/ContactForm.js`, reemplaza:

```javascript
action="https://formspree.io/f/YOUR_FORM_ID"
              ↓
action="https://formspree.io/f/xyz123"
```

### 6. Personalizar Colores (Opcional)

Los colores están definidos en `tailwind.config.js`. Para cambiar colores principales:

```javascript
// En tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#06B6D4',  // Cyan
      secondary: '#0EA5E9', // Blue
    }
  }
}
```

Luego reemplaza en los componentes:
- `from-cyan-500` → `from-primary`
- `to-blue-500` → `to-secondary`

## 📁 Estructura Importante

```
src/
├── config/
│   ├── projects.js      ← TUS PROYECTOS
│   └── constants.js     ← TU INFORMACIÓN
├── components/          ← Componentes (edita si necesitas cambios de diseño)
├── pages/
│   ├── index.js         ← Página principal (NO TOCAR)
│   └── projects/
│       ├── index.js     ← Listado de proyectos (NO TOCAR)
│       └── [id].js      ← Detalle de proyecto (NO TOCAR)
└── style/
    └── globals.css      ← Estilos globales (edita si necesitas)
```

## 🎨 Cambios de Diseño Comunes

### Cambiar fuente
En `src/style/globals.css`:
```css
body {
  font-family: 'Tu Font', sans-serif;
}
```

### Cambiar fondo
En `src/components/Background.js`:
```javascript
<div className="absolute inset-0 bg-gradient-to-br from-[COLOR1] to-[COLOR2]" />
```

### Ajustar espaciado
En los componentes, cambia `py-20` a `py-16`, `max-w-6xl` a `max-w-5xl`, etc.

## 🚢 Desplegar

### Vercel (Recomendado - Gratis)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
npm run export
# Pushar carpeta 'out' a GitHub Pages
```

### Otra plataforma
Deployment es estándar de Next.js. Solo necesitas:
```bash
npm run build
npm start
```

## ✅ Checklist Pre-Deploy

- [ ] Actualicé SITE_CONFIG en constants.js
- [ ] Agregué mis proyectos en projects.js
- [ ] Actualicé TechStack
- [ ] Configuré Formspree para contacto
- [ ] Cambié las URLs de GitHub/LinkedIn en footer
- [ ] Agregué mi imagen en `public/img/`
- [ ] Probé en `npm run dev`
- [ ] Verifiqué que funciona en mobile
- [ ] Cambié el dominio en next.config.js si es necesario

## 🐛 Troubleshooting

### "Error: Cannot find module..."
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Port 3000 is already in use"
```bash
npm run dev -- -p 3001
```

### Cambios no se reflejan
```bash
npm run dev
# Y recarga el navegador (no solo F5, sino Ctrl+Shift+R)
```

## 📚 Más Ayuda

- Lee `README.md` para documentación completa
- Lee `CHANGELOG.md` para ver qué cambió
- Revisa componentes en `src/components/` - están bien comentados
- Consulta [Next.js docs](https://nextjs.org/docs)

## 🎉 ¡Listo!

Tu portafolio está listo para personalizar y publicar. 

¡Mantén tu portafolio actualizado con tus últimos proyectos! 💪
