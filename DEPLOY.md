# Guía de Despliegue - Mi Portafolio

## 🌐 Despliegue en 000webhost

### Requisitos Previos
- Cuenta en [000webhost](https://www.000webhost.com/)
- Proyecto construido (`npm run build`)

### Pasos para Desplegar

#### 1. Construir el Proyecto
```bash
npm run build
```

Esto creará una carpeta `build` con todos los archivos optimizados para producción.

#### 2. Preparar Archivos

La carpeta `build` contiene:
- `index.html` - Página principal
- `static/` - CSS, JS e imágenes optimizadas
- Otros archivos necesarios

#### 3. Subir a 000webhost

**Opción A: File Manager (Navegador)**

1. Inicia sesión en 000webhost
2. Ve a tu sitio web
3. Abre "File Manager"
4. Navega a la carpeta `public_html`
5. **Elimina** todos los archivos existentes en `public_html`
6. Sube **todo el contenido** de la carpeta `build` (no la carpeta en sí, sino su contenido)
7. Asegúrate de que `index.html` esté en la raíz de `public_html`

**Opción B: FTP**

1. Descarga un cliente FTP como [FileZilla](https://filezilla-project.org/)
2. Conecta usando las credenciales de 000webhost:
   - Host: `ftpupload.net`
   - Usuario: Tu nombre de usuario de 000webhost
   - Contraseña: Tu contraseña de 000webhost
   - Puerto: 21
3. Navega a `public_html`
4. Elimina archivos existentes
5. Sube todo el contenido de la carpeta `build`

#### 4. Configurar .htaccess (Importante para React Router)

Crea un archivo `.htaccess` en `public_html` con el siguiente contenido:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

Este archivo asegura que todas las rutas se redirijan a `index.html`, lo cual es necesario para aplicaciones React de una sola página.

#### 5. Verificar el Despliegue

1. Visita tu URL: `https://tuportafolio.000webhostapp.com`
2. Verifica que todas las secciones carguen correctamente
3. Prueba la navegación entre secciones
4. Verifica que las imágenes se muestren correctamente

### Solución de Problemas Comunes

**Problema: Página en blanco**
- Verifica que `index.html` esté en la raíz de `public_html`
- Asegúrate de que el campo `homepage` en `package.json` sea correcto
- Revisa la consola del navegador para errores

**Problema: Imágenes no cargan**
- Verifica que la carpeta `static` se haya subido completamente
- Asegúrate de que las rutas de las imágenes sean relativas

**Problema: Navegación no funciona**
- Verifica que el archivo `.htaccess` esté presente y configurado correctamente

### Actualizar el Sitio

Para actualizar tu portafolio:

1. Realiza cambios en tu código local
2. Ejecuta `npm run build`
3. Sube los nuevos archivos de la carpeta `build` a `public_html`
4. Limpia la caché del navegador (Ctrl + F5)

## 🚀 Alternativas de Hosting Gratuito

### Netlify (Recomendado)
- Despliegue automático desde GitHub
- HTTPS gratis
- Dominio personalizado gratis

### Vercel
- Optimizado para React
- Despliegue instantáneo
- Excelente rendimiento

### GitHub Pages
- Integración directa con GitHub
- Ideal para portafolios estáticos

## 📝 Notas Importantes

- 000webhost tiene límite de ancho de banda mensual
- El sitio puede entrar en suspensión si no recibe visitas
- Para proyectos profesionales, considera hosting pago como:
  - Hostinger
  - SiteGround
  - DigitalOcean

## ✅ Checklist de Despliegue

- [ ] Proyecto construido con `npm run build`
- [ ] Archivos subidos a `public_html`
- [ ] Archivo `.htaccess` configurado
- [ ] Sitio verificado en navegador
- [ ] Navegación probada
- [ ] Imágenes verificadas
- [ ] Información de contacto actualizada
- [ ] Enlaces de redes sociales funcionando

---

**Última actualización**: Diciembre 2024
