# Portafolio de Elías Arango

Portafolio profesional moderno construido con **Next.js 14**, **React 18**, **Tailwind CSS** y **Framer Motion**.

## 🚀 Características

- ✨ **Diseño moderno y limpio** - Interfaz profesional con animaciones suaves
- 📱 **Totalmente responsive** - Se adapta perfecto a cualquier dispositivo
- ⚡ **Optimizado para rendimiento** - SSG, lazy loading y code splitting
- 🎨 **Personalizable** - Todos los textos y datos en archivos de configuración
- 📊 **Sistema de proyectos dinámico** - Gestiona tus proyectos fácilmente
- 🔗 **SEO optimizado** - Meta tags y estructura adecuada
- 🌙 **Dark mode nativo** - Tema oscuro profesional

## 📁 Estructura del Proyecto

```
src/
├── components/        # Componentes React reutilizables
│   ├── Navbar.js      # Navegación principal
│   ├── Hero.js        # Sección hero
│   ├── Projects.js    # Listado de proyectos
│   ├── About.js       # Sección sobre mí
│   ├── TechStack.js   # Stack tecnológico
│   ├── ContactForm.js # Formulario de contacto
│   └── Footer.js      # Pie de página
├── config/            # Configuración centralizada
│   ├── projects.js    # Datos de proyectos
│   └── constants.js   # Constantes y textos
├── pages/             # Páginas Next.js
│   ├── index.js       # Página principal
│   └── projects/
│       ├── index.js   # Listado de todos los proyectos
│       └── [id].js    # Detalle de cada proyecto
└── style/
    └── globals.css    # Estilos globales
```

## 🛠 Instalación y Configuración

### Requisitos previos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JEAS-14/elias.github.io.git
cd elias.github.io

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## ⚙️ Configuración

### 1. Actualizar información personal

Edita `src/config/constants.js`:

```javascript
export const SITE_CONFIG = {
  name: 'Tu Nombre',
  title: 'Tu Nombre | Tu Profesión',
  description: 'Tu descripción...',
  email: 'tu-email@example.com',
  // ...
}
```

### 2. Agregar/Editar Proyectos

Edita `src/config/projects.js`:

```javascript
export const projects = [
  {
    id: 'mi-proyecto',
    title: 'Mi Proyecto',
    category: 'Web App',
    description: 'Descripción del proyecto...',
    icon: '🎨',
    tags: ['React', 'Node.js'],
    // ... más propiedades
  },
  // ... más proyectos
]
```

### 3. Actualizar Stack Tecnológico

Edita `src/config/constants.js` en la sección `TECH_STACK`:

```javascript
export const TECH_STACK = {
  frontend: [
    { name: 'React', level: 'Expert', icon: '⚛️' },
    // ...
  ],
  // ...
}
```

## 🚢 Deployment

### Desplegar en Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar
vercel
```

### Desplegar en GitHub Pages

```bash
# Modificar next.config.js
export const nextConfig = {
  output: 'export',
}

# Build
npm run build

# Desplegar a GitHub Pages
npm run deploy
```

## 📝 Formspree (Contacto)

Para habilitar el formulario de contacto:

1. Ve a [formspree.io](https://formspree.io/)
2. Crea una nueva cuenta y proyecto
3. Copia tu ID de formulario
4. Actualiza en `src/components/ContactForm.js`:

```javascript
action="https://formspree.io/f/YOUR_FORM_ID"
```

## 🎯 Próximas Mejoras

- [ ] Blog/Articles section
- [ ] Dark/Light mode toggle
- [ ] Múltiples idiomas (i18n)
- [ ] Analytics integración
- [ ] Certificados sección
- [ ] Testimonios/Reviews

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios mayores, por favor abre un issue primero para discutir los cambios propuestos.

## 📞 Contacto

- Email: tu-email@example.com
- LinkedIn: [tu-linkedin]
- GitHub: [tu-github]

---

**Hecho con ❤️ por Elías Arango**
