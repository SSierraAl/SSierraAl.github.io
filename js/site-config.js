/**
 * =====================================================
 * SITE CONFIG - Configuración embebida del sitio
 * =====================================================
 * 
 * EDITA ESTE ARCHIVO para cambiar colores, textos, etc.
 * También puedes editar config.json (este JS se genera
 * a partir de config.json).
 * =====================================================
 */

var siteConfigData = {

  "COLORES": {
    "nota": "Variables CSS para personalizar colores. Usa códigos hex como #ad1f4a",
    "primary_color": "#ad1f4a",
    "primary_dark": "#6a0828",
    "primary_light": "#f2c5e0",
    "accent_color": "#d43790",
    "accent_light": "#ec8fd0",
    "text_dark": "#2d0a18",
    "text_medium": "#6b4e5e",
    "bg_light": "#fdf2f8",
    "bg_dark": "#2d0a18"
  },

  "METADATA": {
    "titulo_pagina": "Mazarino | Refrigerios & Brunch Empresarial",
    "descripcion_seo": "Mazarino - Refrigerios, Brunch y Desayunos Empresariales en Bogotá. Cuidamos cada detalle para tus eventos corporativos.",
    "autor": "Arte Manual Mazarino"
  },

  "NAVEGACION": {
    "logo": {
      "src": "MainLogo.png",
      "alt": "Mazarino Logo",
      "texto_marca": "Arte Manual Mazarino"
    },
    "items_menu": [
      { "texto": "Inicio", "enlace": "#inicio" },
      { "texto": "Nosotros", "enlace": "#nosotros" },
      { "texto": "Servicios", "enlace": "#servicios" },
      { "texto": "Menú", "enlace": "#menu" },
      { "texto": "Info", "enlace": "#info" },
      { "texto": "Fundadoras", "enlace": "#fundadoras" },
      { "texto": "Contacto", "enlace": "#contacto" },
      { "texto": "Galería", "enlace": "#galeria" }
    ]
  },

  "HERO": {
    "slogan_imagen": {
      "src": "SloganMazarino.png",
      "alt": "Cuidamos cada detalle",
      "max_ancho": "350px"
    },
    "titulo_principal": "Refrigerios & Brunch Empresarial",
    "subtitulo": "Soluciones gastronómicas frescas, equilibradas y presentadas con excelencia para reuniones, capacitaciones, eventos corporativos y oficinas en Bogotá.",
    "boton_1": { "texto": "Ver Menú", "enlace": "#menu" },
    "boton_2": { "texto": "Cotizar Ahora", "enlace": "#contacto" },
    "video": {
      "src": "MainVideo.mp4",
      "mostrar": true
    }
  },

  "NOSOTROS": {
    "titulo_pequeno": "Sobre Nosotros",
    "titulo_grande": "Cuidamos Cada Detalle de tu Evento",
    "parrafo_1": "En Mazarino creemos que una buena reunión se construye desde los detalles más pequeños. Nos especializamos en la preparación y entrega de refrigerios y brunch de alta calidad para empresas, cuidando cada ingrediente, la presentación y la puntualidad.",
    "parrafo_2": "Llevamos 10 años siendo aliados estratégicos para las empresas, brindándoles opciones saludables, novedosas y ajustadas a las necesidades de nuestros clientes.",
    "imagen": {
      "src": "Fotos Editadas Mazarino/1.png",
      "alt": "Refrigerios Mazarino"
    },
    "valores_columna_1": [
      "Calidad y Frescura",
      "Atención al Detalle",
      "Confianza y Puntualidad"
    ],
    "valores_columna_2": [
      "Variedad de Opciones",
      "Entregas 365 días",
      "Pedidos desde 15 unidades"
    ],
    "estadisticas": [
      { "numero": "500+", "descripcion": "Eventos Atendidos" },
      { "numero": "365", "descripcion": "Días de Entrega" },
      { "numero": "20+", "descripcion": "Empresas Confían" },
      { "numero": "100%", "descripcion": "Ingredientes Frescos" }
    ]
  },

  "SERVICIOS": {
    "titulo_pequeno": "Nuestros Servicios",
    "titulo_grande": "Soluciones para Cada Occasión",
    "descripcion": "Ofrecemos una amplia gama de opciones gastronómicas para empresas",
    "servicios": [
      {
        "icono": "fa-cookie-bite",
        "titulo": "Refrigerios Estándar",
        "descripcion": "Sanduches variados, bebidas y complementos. Perfectos para reuniones cortas. Desde $13.900 COP.",
        "enlace_texto": "Ver Opciones",
        "enlace": "#menu"
      },
      {
        "icono": "fa-utensils",
        "titulo": "Menús Básicos",
        "descripcion": "Combos completos con wrap o sanduche, jugo o té y fruta fresca. Desde $16.200 COP.",
        "enlace_texto": "Ver Opciones",
        "enlace": "#menu"
      },
      {
        "icono": "fa-coffee",
        "titulo": "Brunch Empresarial",
        "descripcion": "Desayunos completos con omelletes, tamales, tostadas y más. Desde $20.700 COP.",
        "enlace_texto": "Ver Opciones",
        "enlace": "#menu"
      },
      {
        "icono": "fa-mug-hot",
        "titulo": "Desayunos Deliciosos",
        "descripcion": "Menús premium con milanesas, omelletes, tamales tradicionales. Desde $23.600 COP.",
        "enlace_texto": "Ver Opciones",
        "enlace": "#menu"
      },
      {
        "icono": "fa-truck",
        "titulo": "Entregas en Bogotá",
        "descripcion": "Reparto en Bogotá D.C. y zona periférica. Disponible 365 días, las 24 horas.",
        "enlace_texto": "Cotizar Envío",
        "enlace": "#contacto"
      },
      {
        "icono": "fa-palette",
        "titulo": "Eventos Personalizados",
        "descripcion": "Adaptamos nuestros menús a tus necesidades. Opciones estándar, saludables y premium.",
        "enlace_texto": "Consultar",
        "enlace": "#contacto"
      }
    ]
  },

  "MENU": {
    "titulo_pequeno": "Nuestro Menú",
    "titulo_grande": "Productos y Precios",
    "descripcion": "Todas nuestras opciones incluyen ingredientes frescos y presentación premium",
    "categorias": [
      { "id": "all", "texto": "Todos" },
      { "id": "refrigerio", "texto": "Refrigerios" },
      { "id": "menu-basico", "texto": "Menús Básicos" },
      { "id": "brunch", "texto": "Brunch" },
      { "id": "desayuno", "texto": "Desayunos" },
      { "id": "estacion", "texto": "Estaciones de Café/Té" }
    ],
    "productos": [
      {
        "categoria": "refrigerio",
        "etiqueta": "Refrigerio",
        "titulo": "Refrigerio Estándar",
        "descripcion": "Elegir: 1 Sanduche + 1 Bebida + 1 Complemento. Sanduches de jamón, queso, pollo o mexicano.",
        "precio": "$13.900 COP",
        "imagen": "Fotos Editadas Mazarino/2.png"
      },
      {
        "categoria": "menu-basico",
        "etiqueta": "Menú Básico",
        "titulo": "Menú Wrap de Pollo",
        "descripcion": "Wrap de pollo teriyaki, Té 0% cal, fruta fresca de temporada.",
        "precio": "$16.200 COP",
        "imagen": "Fotos Editadas Mazarino/3.png"
      },
      {
        "categoria": "brunch",
        "etiqueta": "Brunch",
        "titulo": "Brunch con Parfait",
        "descripcion": "Parfait 8 onzas con yogurt, fruta natural y granola. Té 0% cal. Tostadas artesanales.",
        "precio": "$20.700 COP",
        "imagen": "Fotos Editadas Mazarino/4.png"
      },
      {
        "categoria": "desayuno",
        "etiqueta": "Desayuno",
        "titulo": "Desayuno Milanesa",
        "descripcion": "Milanesa de pollo, mix de lechuga y espinaca, tomate, salsa de la casa, jugo natural.",
        "precio": "$23.600 COP",
        "imagen": "Fotos Editadas Mazarino/5.png"
      },
      {
        "categoria": "refrigerio",
        "etiqueta": "Refrigerio",
        "titulo": "Sanduche Mexicano",
        "descripcion": "Jamón ahumado, queso mozzarella, nachos, lechuga, tomate y salsa de guacamole.",
        "precio": "$13.900 COP",
        "imagen": "Fotos Editadas Mazarino/6.png"
      },
      {
        "categoria": "menu-basico",
        "etiqueta": "Menú Básico",
        "titulo": "Menú Mix de Fruta",
        "descripcion": "Mix de fruta picada 8 onzas, mix de frutos secos, queso pera. Opción saludable.",
        "precio": "$16.200 COP",
        "imagen": "Fotos Editadas Mazarino/7.png"
      },
      {
        "categoria": "brunch",
        "etiqueta": "Brunch",
        "titulo": "Omelette Premium",
        "descripcion": "Omelette con jamón ahumado y queso mozzarella, tostadas de frutos rojos, jugo natural.",
        "precio": "$20.700 COP",
        "imagen": "Fotos Editadas Mazarino/8.png"
      },
      {
        "categoria": "desayuno",
        "etiqueta": "Desayuno",
        "titulo": "Tamal Tradicional",
        "descripcion": "Tamal con trozos de pollo y tocino, jugo néctar o chocolate, arepa blanca y pan.",
        "precio": "$23.600 COP",
        "imagen": "Fotos Editadas Mazarino/9.png"
      },
      {
        "categoria": "desayuno",
        "etiqueta": "Desayuno",
        "titulo": "Wrap de Milanesa",
        "descripcion": "Wrap de milanesa de pollo apanado, Té 0% cal, mix de fruta 8 onzas, barra de granola.",
        "precio": "$23.600 COP",
        "imagen": "Fotos Editadas Mazarino/10.png"
      },
      {
        "categoria": "estacion",
        "etiqueta": "Estación Café/Té",
        "titulo": "Estación de Café Premium",
        "descripcion": "Café de grano colombiano, café capuchino, complementos: canela, vainilla, edulcorante. Incluye thermos de 2L.",
        "precio": "$35.000 COP",
        "imagen": "Fotos Editadas Mazarino/11.png"
      },
      {
        "categoria": "estacion",
        "etiqueta": "Estación Café/Té",
        "titulo": "Estación de Té Variado",
        "descripcion": "Selección de tés: verde, manzanilla, hibisco, menta. Incluye hervidor, azucarera y cucharas. Para 20 personas.",
        "precio": "$28.000 COP",
        "imagen": "Fotos Editadas Mazarino/12.png"
      },
      {
        "categoria": "estacion",
        "etiqueta": "Estación Café/Té",
        "titulo": "Estación Combo Café y Té",
        "descripcion": "Café colombiano + 4 variedades de té. Thermos 2L café + hervidor té. Azúcar, edulcorante, leches vegetales.",
        "precio": "$48.000 COP",
        "imagen": "Fotos Editadas Mazarino/13.png"
      }
    ]
  },

  "INFO_IMPORTANTE": {
    "titulo_pequeno": "Información Importante",
    "titulo_grande": "Para Tener en Cuenta",
    "items": [
      {
        "icono": "fa-box-open",
        "titulo": "Pedido Mínimo",
        "descripcion": "El pedido mínimo es de 15 unidades por referencia. Contáctanos para pedidos más grandes."
      },
      {
        "icono": "fa-truck",
        "titulo": "Entregas",
        "descripcion": "Las entregas se realizan en un único punto dentro de Bogotá y su zona periférica. El costo de envío no está incluido."
      },
      {
        "icono": "fa-calendar",
        "titulo": "Anticipación",
        "descripcion": "Agradecemos realizar su pedido con un mínimo de 3 días de anticipación al evento. Para tiempos más cortos, confirmar disponibilidad previamente."
      },
      {
        "icono": "fa-clock",
        "titulo": "Disponibilidad",
        "descripcion": "Las entregas están disponibles los 365 días del año, las 24 horas, sujetas a programación previa."
      }
    ]
  },

  "FUNDADORAS": {
    "titulo_pequeno": "Nuestras Fundadoras",
    "titulo_grande": "La Historia Detrás de Mazarino",
    "descripcion": "Conoce a las mujeres que soñaron con cuidar cada detalle de tus eventos corporativos",
    "fundadoras": [
      {
        "imagen": "founder1.png",
        "nombre": "Nombre Fundadora 1",
        "cargo": "Cofundadora & CEO",
        "bio": "Siempre creí que una buena reunión empieza con buenos refrigerios. Mazarino nació de la pasión por la gastronomía y el deseo de ofrecer algo diferente: productos frescos, presentados con amor y entregados a tiempo."
      },
      {
        "imagen": "founder2.png",
        "nombre": "Nombre Fundadora 2",
        "cargo": "Cofundadora & Creativa",
        "bio": "La idea de Arte Manual Mazarino surgió de ver la necesidad de las empresas bogotanas: refrigerios que no fueran lo mismo de siempre. Queremos que cada bocado cuente una historia de calidad y detalle."
      }
    ],
    "mision": {
      "titulo": "Nuestra Misión",
      "texto": "Transformar la experiencia de los eventos corporativos a través de la gastronomía artesanal. En Mazarino no solo preparamos refrigerios: creamos momentos que unen equipos, inspiran conversaciones y hacen que cada reunión sea especial. Cuidamos cada ingrediente, cada presentación y cada entrega, porque sabemos que los detalles hacen la diferencia."
    }
  },

  "CONTACTO": {
    "titulo_pequeno": "Contáctanos",
    "titulo_grande": "Haz tu Pedido",
    "descripcion": "¿Tienes una reunión o evento? ¡Escríbenos y cotiza ahora!",
    "informacion": {
      "telefono": { "label": "Teléfono", "valor": "312 500 2080 / 601 527 5255" },
      "email": { "label": "Correo Electrónico", "valor": "artemanualmazarino@hotmail.com" },
      "instagram": { "label": "Instagram", "valor": "@artemanualmazarino", "enlace": "https://www.instagram.com/artemanualmazarino" },
      "facebook": { "label": "Facebook", "valor": "Arte Manual Mazarino", "enlace": "https://www.facebook.com/share/1cGVwYka3q/" }
    },
    "whatsapp": {
      "numero": "573125002080",
      "mensaje_predeterminado": "Cordial saludo, me interesa cotizar refrigerios para un evento en mi empresa"
    }
  },

  "GALERIA": {
    "titulo_pequeno": "Nuestra Galería",
    "titulo_grande": "Fotos de Nuestros Productos",
    "fotos": [
      { "src": "Fotos Editadas Mazarino/11.png", "alt": "Producto 11" },
      { "src": "Fotos Editadas Mazarino/12.png", "alt": "Producto 12" },
      { "src": "Fotos Editadas Mazarino/13.png", "alt": "Producto 13" },
      { "src": "Fotos Editadas Mazarino/14.png", "alt": "Producto 14" },
      { "src": "Fotos Editadas Mazarino/15.png", "alt": "Producto 15" },
      { "src": "Fotos Editadas Mazarino/16.png", "alt": "Producto 16" },
      { "src": "Fotos Editadas Mazarino/17.png", "alt": "Producto 17" },
      { "src": "Fotos Editadas Mazarino/1.png", "alt": "Producto 1" }
    ]
  },

  "FOOTER": {
    "logo": { "src": "MainLogo.png", "texto": "Arte Manual Mazarino" },
    "descripcion": "Especialistas en refrigerios, brunch y desayunos empresariales en Bogotá. Cuidamos cada detalle para que tu evento sea un éxito.",
    "redes_sociales": {
      "facebook": "https://www.facebook.com/share/1cGVwYka3q/",
      "instagram": "https://www.instagram.com/artemanualmazarino?igsh=MWc4c3l6cDFoZHZyNg==",
      "whatsapp": "https://wa.me/573125002080",
      "email": "mailto:artemanualmazarino@hotmail.com"
    },
    "enlaces_footer": [
      { "texto": "Inicio", "enlace": "#inicio" },
      { "texto": "Nosotros", "enlace": "#nosotros" },
      { "texto": "Servicios", "enlace": "#servicios" },
      { "texto": "Menú", "enlace": "#menu" },
      { "texto": "Fundadoras", "enlace": "#fundadoras" },
      { "texto": "Contacto", "enlace": "#contacto" }
    ],
    "servicios_footer": [
      { "texto": "Refrigerios Estándar", "enlace": "#menu" },
      { "texto": "Menús Básicos", "enlace": "#menu" },
      { "texto": "Brunch Empresarial", "enlace": "#menu" },
      { "texto": "Desayunos Deliciosos", "enlace": "#menu" },
      { "texto": "Eventos Personalizados", "enlace": "#contacto" }
    ],
    "boletin": {
      "titulo": "Boletín",
      "descripcion": "Suscríbete para recibir promociones y novedades.",
      "placeholder": "Tu correo"
    },
    "copyright": "© 2025 Arte Manual Mazarino. Todos los derechos reservados.",
    "frase_final": "Cuidamos cada detalle ❤️"
  }

};