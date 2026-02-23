# Victory Esmeraldas - Frontend React

## 📋 Descripción General

Frontend moderno para e-commerce de venta de esmeraldas colombianas. Construido con React 18, TypeScript y Tailwind CSS v4, ofrece una experiencia de usuario premium con animaciones fluidas y diseño responsive.

## 🎯 Objetivos del Proyecto

1. **Experiencia Visual Premium**: Diseño elegante y sofisticado que refleja la exclusividad de las esmeraldas
2. **Interfaz Intuitiva**: Navegación fluida para explorar y comprar productos
3. **Performance Optimizada**: Tiempos de carga mínimos con Vite y optimizaciones
4. **Diseño Responsive**: Experiencia perfecta en desktop, tablet y móvil
5. **Integración WhatsApp**: Contacto directo con vendedores vía WhatsApp
6. **Animaciones Fluidas**: Transiciones suaves y micro-interacciones premium

## 🏗️ Stack Tecnológico

| Componente | Tecnología | Versión | Propósito |
|------------|------------|---------|-----------|
| Framework | React | 18+ | UI Library |
| Lenguaje | TypeScript | 5+ | Type safety |
| Build Tool | Vite | 7.3+ | Fast dev server & bundler |
| Styling | Tailwind CSS | v4.2+ | Utility-first CSS |
| HTTP Client | Axios | Latest | API calls |
| Icons | Lucide React | Latest | Icon library |
| Deployment | Render | - | Static hosting |

## 🎨 Características del Diseño

### Efectos Visuales Implementados

✅ **Hero Section**
- Fondo con imagen personalizada
- Gradiente negro hacia arriba (fade out)
- Efecto "blur patch" que sigue al cursor
- Animaciones de entrada fade-in

✅ **Product Cards**
- Imagen de producto como fondo completo
- Overlay inferior con blur y gradiente
- Información alineada a la izquierda
- Hover effects: scale, shadow, color transitions
- Botón de contacto con hover verde (WhatsApp color)

✅ **Header**
- Navegación con hover underline animations
- Logo con rotación al hover
- Search box con expansión al hacer hover
- Ícono de carrito con animación

✅ **Footer**
- Animaciones de entrada escalonadas
- Links con slide effect on hover
- Iconos sociales con colores específicos por red
- Hover: scale y rotación

✅ **Animaciones Globales**
- Fade-in-up para contenido
- Scale-in para tarjetas
- Slide-in para secciones
- Pulse para loading states
- Transiciones suaves (300-700ms)

## 📁 Estructura del Proyecto

```
src/
├── components/              # Componentes UI reutilizables
│   ├── Header/              # Navegación y search
│   ├── Hero/                # Sección principal con blur effect
│   ├── ProductCard/         # Tarjeta de producto individual
│   ├── Footer/              # Pie de página
│   └── Layout/              # Layout principal
├── pages/                   # Páginas de la aplicación
│   └── HomePage.tsx         # Home con catálogo
├── services/                # Servicios de API
│   └── api.ts              # Cliente Axios + tipos
├── types/                   # Tipos TypeScript
│   └── (definidos en api.ts)
├── index.css               # Estilos globales + animaciones
├── App.tsx                 # Componente principal
└── main.tsx                # Punto de entrada

public/                      # Archivos estáticos
├── hero-bg.png             # Fondo hero
├── product1.png            # Imagen producto 1
├── product2.png            # Imagen producto 2
└── product3.png            # Imagen producto 3
```

## 🔌 Integración con Backend

### API Endpoints Utilizados

| Endpoint | Método | Propósito |
|----------|--------|----------|
| `/api/products` | GET | Listar todos los productos |
| `/api/products/{id}` | GET | Obtener producto específico |
| `/api/products/search` | GET | Buscar por keyword |
| `/api/products/category/{cat}` | GET | Filtrar por categoría |

### Configuración de Variables de Entorno

**Desarrollo (`.env`):**
```bash
VITE_API_URL=http://localhost:8080
```

**Producción (`.env.production`):**
```bash
VITE_API_URL=https://ecomerce-backend-crm.onrender.com
```

### Cliente API (Axios)

```typescript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

## 🎨 Sistema de Animaciones

## 💬 Integración con WhatsApp

El frontend se integra con el backend que permite gestionar productos completamente a través de WhatsApp Cloud API.

### Comandos de WhatsApp Disponibles

#### Gestión de Productos
- **`subir producto`** - Agregar un nuevo producto al catálogo
  - Solicita: Nombre, Descripción, Precio, Categoría, WhatsApp, Imagen
  - El producto aparece automáticamente en el frontend

- **`editar producto`** - Modificar productos existentes
  - Selecciona por ID
  - Permite editar: Nombre, Descripción, Precio, Categoría, WhatsApp, Imagen

- **`borrar producto`** - Eliminar productos del catálogo
  - Selecciona por ID
  - Solicita confirmación antes de eliminar

- **`ver productos`** - Listar todos los productos con detalles

### Flujo de Actualización

```
WhatsApp → Backend → Base de Datos → Frontend
   ↓            ↓            ↓             ↓
Usuario    Webhook    PostgreSQL    React App
envía      recibe     guarda actualiza
mensaje    mensaje    datos    en tiempo real
```

### Ventajas de la Integración

✅ **Gestión sin código**: Admin productos desde WhatsApp
✅ **Actualización en tiempo real**: Cambios reflejan inmediatamente
✅ **Imágenes automáticas**: Descarga y almacenamiento automático
✅ **Conversación natural**: Interface intuitiva tipo chat
✅ **Acceso móvil**: Gestiona desde cualquier lugar

### Notas Importantes

- Los cambios realizados por WhatsApp **actualizan automáticamente** el frontend
- No es necesario redeployar el frontend para ver cambios
- Las imágenes se almacenan en el backend y se sirven vía API
- El frontend consume la API `/api/products` que siempre retorna datos actualizados

### Animaciones CSS Personalizadas

Definidas en `src/index.css`:

```css
/* Animaciones de entrada */
@keyframes fadeInUp { ... }
@keyframes fadeIn { ... }
@keyframes slideInLeft { ... }
@keyframes slideInRight { ... }
@keyframes scaleIn { ... }
@keyframes spin { ... }
@keyframes pulse { ... }
```

### Clases Utilitarias

```typescript
// Animate-fade-in-up
.animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }

// Animate-scale-in
.animate-scale-in { animation: scaleIn 0.5s ease-out forwards; }

// Animation delays
.animation-delay-100 { animation-delay: 0.1s; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }
```

### Uso en Componentes

```tsx
// Hero title con animación
<h1 className="animate-fade-in-up opacity-0">
  Esmeraldas Únicas
</h1>

// Product cards con delays escalonados
{products.map((product, index) => (
  <div key={product.id} className={`animate-scale-in opacity-0`}
       style={{ animationDelay: `${Math.min(index * 0.1, 0.5)}s` }}>
    <ProductCard product={product} />
  </div>
))}
```

## 📱 Componentes Principales

### Hero Component

**Características:**
- Fondo: `hero-bg.png`
- Gradiente overlay: negro hacia arriba
- Efecto blur patch: sigue al cursor
- Contenido centrado
- Animaciones de entrada

**Efecto Blur Patch:**
- Radio: 150px
- Blur: 8px
- Segue cursor con transición suave (75ms)
- Fade radial gradient

### ProductCard Component

**Características:**
- Imagen como fondo completo (group-hover: scale 110%)
- Overlay inferior con blur y gradiente
- Badge de categoría (top-left)
- Información alineada izquierda
- Hover effects:
  - Imagen: scale 110% (700ms)
  - Overlay: más oscuro
  - Precio: scale 105%
  - Botón: scale 110% + verde WhatsApp

### Header Component

**Características:**
- Logo con rotación al hover (180deg)
- Nav links:
  - Underline animado (width 0 → 100%)
  - Scale 110% on hover
- Search box:
  - Expande de w-40 a w-52
  - Icono scale 110%
- Cart icon:
  - Scale 110% on hover
  - Badge con scale

### Footer Component

**Características:**
- 3 columnas con animaciones escalonadas
- Social icons con colores específicos:
  - Instagram: #E1306C (rosa)
  - Facebook: #1877F2 (azul)
  - Twitter: #1DA1F2 (azul claro)
- Links con slide effect (+1 translateX)
- Icons con rotación 12deg on hover

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev                  # Inicia Vite dev server (port 5173)

# Build
npm run build               # Crea build de producción en dist/
npm run preview             # Preview del build local

# Type Checking
npm run lint                 # Ejecuta ESLint
```

## 🔧 Desarrollo Local

### Instalación

```bash
# Clonar repositorio
git clone [repo-url]
cd frontend

# Instalar dependencias
npm install
```

### Ejecución

```bash
# Desarrollo
npm run dev

# Acceso en navegador
open http://localhost:5173
```

### Build Producción

```bash
# Crear build optimizado
npm run build

# Output en: dist/
```

## 🌐 Deployment

### Producción - Render (Static Site)

**Preparación:**
1. Código en GitHub
2. Variable `VITE_API_URL` configurada

**Pasos:**
1. Crear "Static Site" en Render
2. Conectar repositorio GitHub
3. Configurar:
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
   - Runtime: None
4. Environment Variables:
   ```
   VITE_API_URL=https://ecomerce-backend-crm.onrender.com
   ```
5. Deploy automático desde rama `main`

**URL producción:** `https://[service-name].onrender.com`

### Otras Plataformas

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 🎯 Funcionalidades Implementadas

### Catálogo de Productos
- ✅ Grid responsive (1/2/3 columnas)
- ✅ Tarjetas con imágenes grandes
- ✅ Categorías visibles
- ✅ Precios formateados (USD)
- ✅ Búsqueda en tiempo real
- ✅ Paginación

### Integración WhatsApp
- ✅ Botón de contacto directo
- ✅ Abre chat con mensaje predefinido
- ✅ Redirige a WhatsApp Web
- ✅ Incluye nombre del producto

### Animaciones
- ✅ Fade-in-up Hero
- ✅ Scale-in cards (staggered)
- ✅ Hover effects en todos los elementos
- ✅ Loading spinner
- ✅ Smooth scroll

## 📊 Responsive Breakpoints

```css
/* Mobile First */
sm: 640px    /* Small tablets */
md: 768px    /* Tablets */
lg: 1024px   /* Laptops */
xl: 1280px   /* Desktops */
```

**Grid Productos:**
- Mobile: 1 columna
- Tablet: 2 columnas
- Desktop: 3 columnas

## 🎨 Paleta de Colores

```css
/* Primarios */
--color-black: #000000           /* Fondo principal */
--color-white: #FFFFFF           /* Texto principal */
--color-accent: #00ff00          /* Acentos esmeralda */
--color-accent-light: #E6F7EF    /* Acentos claros */

/* Secundarios */
--color-gray-dark: #2D2D2D       /* Botones */
--color-gray: #3D3D3D            /* Hover states */
--color-gray-light: #8A8A8A      /* Textos secundarios */

/* WhatsApp */
--whatsapp-green: #25D366       /* Hover botones */
```

## 🐛 Troubleshooting

### Problemas Comunes

**Error: VITE_API_URL undefined**
- Verificar que `.env` existe en raíz
- Confirmar variable en `.env.production`
- Restart dev server

**Error: Module not found**
- Ejecutar `npm install`
- Borrar `node_modules` y `package-lock.json`
- Reinstall: `npm install`

**Error: Styles not applying**
- Hard refresh: `Cmd+Shift+R` (Mac) o `Ctrl+Shift+R` (Windows)
- Limpiar cache del navegador
- Verificar Tailwind config

### Logs

```bash
# Development server logs
npm run dev

# Build verbose
npm run build -- --mode development --debug
```

## 🚧 Próximas Mejoras (Roadmap)

### 🔮 Fase 2: UX Enhancements
- [ ] Lazy loading para imágenes
- [ ] Skeleton screens
- [ ] Toast notifications
- [ ] Modal de producto rápido
- [ ] Filtros avanzados

### 🔮 Fase 3: Features
- [ ] Carrito de compras
- [ ] Wishlist/Favoritos
- [ ] Comparador de productos
- [ ] Reviews y ratings
- [ ] Galería de imágenes zoomable

### 🔮 Fase 4: Optimización
- [ ] Code splitting
- [ ] Image optimization (WebP)
- [ ] Service Worker (PWA)
- [ ] Metatags SEO
- [ ] Analytics

## 📝 Convenciones de Código

### TypeScript
- Strict mode activado
- Interfaces para tipos
- Type-only imports: `import type { ... }`
- Sin `any` types

### React
- Functional components
- Hooks para state management
- Props interfaces
- Conditional rendering con `&&`

### Estilos
- Tailwind CSS utility classes
- Custom animations en index.css
- Responsive design mobile-first
- Dark theme (black background)

## 🔗 Recursos

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Axios Documentation](https://axios-http.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Render Documentation](https://render.com/docs)

## 📄 Licencia

Proprietary - Todos los derechos reservados
© 2026 Victory Esmeraldas - David Montejo

---

**Versión**: 1.0.0
**Última actualización**: Febrero 2026
**Autor**: David Montejo
**Estado**: Production ✅
**URL Producción**: [Render URL]
