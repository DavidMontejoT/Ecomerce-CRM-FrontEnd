# Esmeraldas Frontend

Frontend del e-commerce de Esmeraldas Victory con React y Tailwind CSS.

## Tecnologías

- React 18 con TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios
- Lucide Icons

## Instalación

```bash
cd frontend
npm install
```

## Ejecutar en Desarrollo

```bash
npm run dev
```

El frontend estará disponible en: `http://localhost:5173`

## Build para Producción

```bash
npm run build
```

Los archivos de producción estarán en la carpeta `dist/`

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:8080
```

Para producción:

```env
VITE_API_URL=https://tu-backend-production.com
```

## Deploy en Vercel (Gratis)

### Opción 1: Desde la CLI

```bash
npm install -g vercel
vercel
```

### Opción 2: Desde GitHub

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Configura las variables de entorno:
   - `VITE_API_URL`: URL de tu backend en producción
5. Deploy automático en cada push al branch `main`

## Deploy en Netlify (Gratis)

### Desde la CLI

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Desde GitHub

1. Conecta tu repositorio en Netlify
2. Configura:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Agrega variable de entorno:
   - `VITE_API_URL`: URL de tu backend
4. Deploy automático

## Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── ProductCard/
│   │   ├── Footer/
│   │   └── Layout/
│   ├── pages/           # Páginas de la aplicación
│   ├── services/        # Servicios API
│   ├── types/           # Definiciones TypeScript
│   ├── hooks/           # Custom React hooks
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Punto de entrada
├── public/              # Archivos estáticos
├── index.html           # Template HTML
├── tailwind.config.js   # Configuración Tailwind
└── vite.config.ts       # Configuración Vite
```

## Características

- 🎨 Diseño responsivo con Tailwind CSS
- ⚡ Builds optimizados con Vite
- 💎 Catálogo de esmeraldas interactivo
- 🔍 Búsqueda y filtrado de productos
- 📱 Integración con WhatsApp
- 🛒 Carrito de compras (próximamente)
- 🎯 TypeScript para type safety

## Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Linter
npm run lint
```

## Comunicación con el Backend

El frontend se comunica con el backend a través de la API REST:

- `GET /api/products` - Obtener todos los productos
- `GET /api/products/{id}` - Obtener un producto
- `POST /api/products` - Crear producto
- `PUT /api/products/{id}` - Actualizar producto
- `DELETE /api/products/{id}` - Eliminar producto

Los productos cargados desde WhatsApp se muestran automáticamente en el catálogo.
