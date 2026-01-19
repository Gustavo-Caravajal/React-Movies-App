# 🎬 Movie & TV Series App

Una aplicación en **React** para explorar películas y series usando la API de [The Movie Database (TMDB)](https://www.themoviedb.org/).  
Permite buscar, listar y navegar entre películas y series, con diseño moderno y efectos visuales.

---

## 📝 Características

- Listado de películas y series populares.
- Búsqueda por título con resultados dinámicos.
- Paginación “Load More” para cargar más contenido.
- Componente `ItemListContainer` reutilizable para distintos tipos de media.
- Layout principal con Navbar y estructura de página limpia.
- Efectos visuales: hover sobre imágenes, cursor pointer.
- Diseño responsive y modular con Flexbox.

---

## 📁 Estructura del proyecto

```txt
src/
├── components/
│   ├── Detail/                 
│   ├── Footer/             
│   ├── Header/    
│   ├── HeroCarousel/         
│   ├── HeroCarouselContainer/    
    ├── HeroItem/    
    ├── Item/    
    ├── ItemDetail/  
    ├── ItemDetailContainer/  
    ├── ItemList/  
    ├── ItemListContainer/  
    ├── Nav/    
    ├── SearchInput/  
    ├── Slider/  
    ├── SliderContainer/    
    └── SliderItem/
├── context/
│   └── MediaContext/     
├── layouts/
│   └── MainLayout.jsx       
├── pages/
│   ├── Home.jsx              
│   ├── Movies.jsx           
│   └── TvSeries.jsx          
├── services/
│   └── media.js            
└── App.jsx
