# Tienda de Cubos de Rubik (El Rincón del Cubitero) - Práctica de Accesibilidad Web

## Descripción
Este proyecto consiste en el desarrollo del sitio web de una tienda de cubos de Rubik siguiendo los estándares de accesibilidad web. La web proporciona una experiencia inclusiva para todos los usuarios, asegurando compatibilidad con lectores de pantalla y navegación mediante teclado.

## Requisitos
El desarrollo de esta web ha seguido los siguientes requisitos de accesibilidad:
- Uso de HTML semántico.
- Implementación de etiquetas ARIA.
- Contraste adecuado entre texto y fondo.
- Diseño responsive.
- Compatibilidad con navegación por teclado y lectores de pantalla.
- Validación mediante la herramienta Lighthouse.

## Estructura del Proyecto
```
/PracticaAccesibilidadWeb_coello-diego_iglesias-ana
│── /web
|   ├── html/
│           ├── index.html
│           ├── productos.html
│           ├── detalle_producto.html
│           ├── detalle_producto_2.html
|           ├── detalle_producto_3.html
|           ├── contacto.html
|           ├── registro.html
|           ├── login.html
|           ├── mapa_web.html
│   ├── css/
|           ├── styles.css
│   ├── img/
│           ├── carro-de-la-compra.webp
|           ├── cubo3x3.webp
|           ├── cuboMegaminx.webp
|           ├── cuboPyraminx.webp
|           ├── imagenTienda.webp
|           ├── logo_pestanha.webp
|           ├── mapaCubitero.webp
|           ├── qiyi-m-pro-2x2.webp
|           ├── qiyi-magnetic-clock.webp
|           ├── qiyi-mirror-3x3-plata.webp
|           ├── qiyi-o2-1x1x1.webp
|           ├── qiyi-qiyuan-s3-4x4.webp
|           ├── qiyi-skewb-qicheng-stickerless.webp
│── /documentacion
│   ├── P7CoelloDiego_IglesiasAna.pdf
│── /capturas
│   ├── Contacto.png
│   ├── Detalle_producto_2.png
│   ├── Detalle_producto_3.png
│   ├── Detalle_producto.png
│   ├── Inicio.png
│   ├── Login.png
│   ├── Mapa_web.png
│   ├── Productos.png
│   ├── Registro.png
│── README.md
```

## Funcionalidades Implementadas
- **Página de Inicio**: Presentación de la tienda con navegación clara.
- **Catálogo de Productos**: Carousel con 9 productos, en cada slide aparecen 3 productos con imagen, nombre, precio y descripción. La imagen en miniatura abre la imagen original en otra pestaña.
- **Detalle de tres productos**: Página individual del producto con información detallada, imagen ampliada y botón de "Añadir al carrito" (sin funcionalidad real).
- **Contacto**: Formas de contacto incluyendo dirección, teléfono, redes sociales y un mapa.
- **Registro**: Formulario de registro con validaciones.
- **Login**: Formulario de login.
- **Mapa web**: Mapa de ubicaciones de la web.

## Tecnologías Utilizadas
- HTML5 , CSS3 y JAVASCRIPT
- Bootstrap para estilos y diseño responsive
- Etiquetas ARIA para mejorar la accesibilidad
- Modal de registro exitoso
- Tooltips para mejorar la accesibilidad

## Validación de Accesibilidad
Se ha utilizado las siguientes herramientas para comprobar la accesibilidad de la web:
- Lighthouse
- NVDA
- Wave

Se han corregido los problemas detectados para cumplir con los estándares.

## Instalación y Uso
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/anaia26/PracticaAccesibilidadWeb_coello-diego_iglesias-ana.git
   ```
2. Abrir el archivo `index.html` en un navegador.

## Autores
Desarrollado por: Ana Iglesias y Diego Coello para la asignatura de Diseño de Interfaces Web (2º CS Desarrollo de Aplicaciones Web) en 2025.
