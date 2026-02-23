#!/bin/bash
# setup.sh - Script de configuración automática

echo "🚀 Portafolio Setup Script"
echo "=========================="
echo ""

# 1. Install dependencies
echo "📦 Instalando dependencias..."
npm install

# 2. Create env file
echo "⚙️  Creando archivo de configuración..."
cat > .env.local << EOF
# Formspree Form ID
NEXT_PUBLIC_FORMSPREE_ID=YOUR_FORM_ID_HERE

# URL del sitio
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOF

echo ""
echo "✅ Configuración completada!"
echo ""
echo "PRÓXIMOS PASOS:"
echo "1. Edita src/config/constants.js con tu información"
echo "2. Edita src/config/projects.js con tus proyectos"
echo "3. Ejecuta: npm run dev"
echo "4. Abre: http://localhost:3000"
echo ""
echo "📖 Para más ayuda, lee QUICK_START.md"
