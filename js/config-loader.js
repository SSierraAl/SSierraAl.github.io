/**
 * =====================================================
 * CONFIG LOADER - Carga dinámica desde config.json
 * =====================================================
 * 
 * Este script carga config.json y actualiza toda la página
 * web de forma dinámica. Solo edita config.json para cambiar
 * textos, imágenes, colores y productos.
 * =====================================================
 */

(function () {
    'use strict';

    // Cargar config.json dinámicamente con cache-busting
    // Si falla, usar site-config.js como fallback
    var siteConfig = null;

    function fetchConfig() {
        return fetch('config.json?t=' + Date.now())
            .then(function (response) {
                if (!response.ok) throw new Error('HTTP ' + response.status);
                return response.json();
            })
            .then(function (data) {
                siteConfig = data;
                console.log('[ConfigLoader] config.json cargado (cache bypass).');
            })
            .catch(function (err) {
                console.warn('[ConfigLoader] Error cargando config.json: ' + err.message + '. Usando fallback.');
                siteConfig = typeof siteConfigData !== 'undefined' ? siteConfigData : null;
            });
    }

    // ====================================================
    // Aplicar toda la configuración
    // ====================================================
    function applyAllConfig() {
        if (!siteConfig) return;
        applyMetadata();
        applyColors();
        applyNavigation();
        applyHero();
        applyNosotros();
        applyServicios();
        applyMenu();
        applyInfoImportante();
        applyFundadoras();
        applyContacto();
        applyGaleria();
        applyFooter();
        applyWhatsApp();
        console.log('[ConfigLoader] Configuración aplicada correctamente.');
    }

    // ====================================================
    // Helper: seleccionar elemento seguro
    // ====================================================
    function qs(selector) {
        return document.querySelector(selector);
    }

    function qsa(selector) {
        return document.querySelectorAll(selector);
    }

    // ====================================================
    // METADATA
    // ====================================================
    function applyMetadata() {
        var m = siteConfig.METADATA;
        if (!m) return;
        if (m.titulo_pagina) document.title = m.titulo_pagina;
        var desc = qs('meta[name="description"]');
        if (desc && m.descripcion_seo) desc.setAttribute('content', m.descripcion_seo);
        var author = qs('meta[name="author"]');
        if (author && m.autor) author.setAttribute('content', m.autor);
    }

    // ====================================================
    // COLORES - Actualizar variables CSS
    // ====================================================
    function applyColors() {
        var c = siteConfig.COLORES;
        if (!c) return;
        var root = document.documentElement;
        var map = {
            'primary_color': '--primary-color',
            'primary_dark': '--primary-dark',
            'primary_light': '--primary-light',
            'accent_color': '--accent-color',
            'accent_light': '--accent-light',
            'text_dark': '--text-dark',
            'text_medium': '--text-medium',
            'bg_light': '--bg-light',
            'bg_dark': '--bg-dark'
        };
        for (var key in map) {
            if (c[key]) {
                root.style.setProperty(map[key], c[key]);
            }
        }
    }

    // ====================================================
    // NAVEGACIÓN
    // ====================================================
    function applyNavigation() {
        var nav = siteConfig.NAVEGACION;
        if (!nav) return;

        // Logo
        if (nav.logo) {
            var logoImg = qs('.navbar-brand img');
            if (logoImg) {
                logoImg.src = nav.logo.src;
                logoImg.alt = nav.logo.alt;
            }
            var brandText = qs('.navbar-brand .brand-text');
            if (brandText) brandText.textContent = nav.logo.texto_marca;
        }

        // Menu items
        if (nav.items_menu) {
            var ul = qs('.navbar-nav');
            if (ul) {
                ul.innerHTML = '';
                nav.items_menu.forEach(function (item) {
                    var li = document.createElement('li');
                    li.className = 'nav-item';
                    var a = document.createElement('a');
                    a.className = 'nav-link';
                    a.href = item.enlace;
                    a.textContent = item.texto;
                    if (item.enlace === '#inicio') a.classList.add('active');
                    li.appendChild(a);
                    ul.appendChild(li);
                });
            }
        }
    }

    // ====================================================
    // HERO
    // ====================================================
    function applyHero() {
        var hero = siteConfig.HERO;
        if (!hero) return;

        // Slogan image
        if (hero.slogan_imagen) {
            var sloganImg = qs('#inicio .hero-section img');
            if (sloganImg) {
                sloganImg.src = hero.slogan_imagen.src;
                sloganImg.alt = hero.slogan_imagen.alt;
                sloganImg.style.maxWidth = hero.slogan_imagen.max_ancho;
            }
        }

        // Title
        if (hero.titulo_principal) {
            var h1 = qs('#inicio h1');
            if (h1) h1.textContent = hero.titulo_principal;
        }

        // Subtitle
        if (hero.subtitulo) {
            var p = qs('#inicio .lead');
            if (p) p.textContent = hero.subtitulo;
        }

        // Buttons
        if (hero.boton_1) {
            var btn1 = qs('#inicio .d-flex.gap-3 .btn:nth-child(1)');
            if (btn1) {
                btn1.textContent = hero.boton_1.texto;
                btn1.href = hero.boton_1.enlace;
            }
        }
        if (hero.boton_2) {
            var btn2 = qs('#inicio .d-flex.gap-3 .btn:nth-child(2)');
            if (btn2) {
                btn2.textContent = hero.boton_2.texto;
                btn2.href = hero.boton_2.enlace;
            }
        }

        // Video
        if (hero.video) {
            var videoSource = qs('#inicio video source');
            var video = qs('#inicio video');
            if (videoSource) videoSource.src = hero.video.src;
            if (video) video.load();
            if (hero.video.mostrar === false && video) {
                video.parentElement.style.display = 'none';
            }
        }
    }

    // ====================================================
    // NOSOTROS
    // ====================================================
    function applyNosotros() {
        var nos = siteConfig.NOSOTROS;
        if (!nos) return;
        var section = qs('#nosotros');
        if (!section) return;

        if (nos.titulo_pequeno) {
            var h6 = section.querySelector('h6');
            if (h6) h6.textContent = nos.titulo_pequeno;
        }
        if (nos.titulo_grande) {
            var h2 = section.querySelector('h2');
            if (h2) h2.textContent = nos.titulo_grande;
        }

        // Paragraphs
        var paragraphs = section.querySelectorAll('.col-lg-6 > p.text-muted');
        if (nos.parrafo_1 && paragraphs[0]) paragraphs[0].textContent = nos.parrafo_1;
        if (nos.parrafo_2 && paragraphs[1]) paragraphs[1].textContent = nos.parrafo_2;

        // Image
        if (nos.imagen) {
            var img = section.querySelector('.about-img');
            if (img) {
                img.src = nos.imagen.src;
                img.alt = nos.imagen.alt;
            }
        }

        // Values
        var valueLists = section.querySelectorAll('.col-md-6 > ul li');
        if (nos.valores_columna_1) {
            nos.valores_columna_1.forEach(function (val, i) {
                if (valueLists[i]) valueLists[i].textContent = val;
            });
        }
        if (nos.valores_columna_2) {
            var startIdx = (nos.valores_columna_1 || []).length;
            nos.valores_columna_2.forEach(function (val, i) {
                if (valueLists[startIdx + i]) valueLists[startIdx + i].textContent = val;
            });
        }

        // Stats
        if (nos.estadisticas) {
            var statNumbers = section.querySelectorAll('.stat-number');
            var statDescs = section.querySelectorAll('.stat-number + .text-muted');
            nos.estadisticas.forEach(function (stat, i) {
                if (stat.numero && statNumbers[i]) statNumbers[i].textContent = stat.numero;
                if (stat.descripcion && statDescs[i]) statDescs[i].textContent = stat.descripcion;
            });
        }
    }

    // ====================================================
    // SERVICIOS
    // ====================================================
    function applyServicios() {
        var serv = siteConfig.SERVICIOS;
        if (!serv) return;
        var section = qs('#servicios');
        if (!section) return;

        if (serv.titulo_pequeno) {
            var h6 = section.querySelector('h6');
            if (h6) h6.textContent = serv.titulo_pequeno;
        }
        if (serv.titulo_grande) {
            var h2 = section.querySelector('h2');
            if (h2) h2.textContent = serv.titulo_grande;
        }
        if (serv.descripcion) {
            var p = section.querySelector('.text-muted.mx-auto');
            if (p) p.textContent = serv.descripcion;
        }

        // Service cards - rebuild from config
        if (serv.servicios) {
            var row = section.querySelector('.row.g-4');
            if (row) {
                row.innerHTML = '';
                serv.servicios.forEach(function (s) {
                    var col = document.createElement('div');
                    col.className = 'col-lg-4 col-md-6';
                    col.innerHTML =
                        '<div class="service-card h-100 p-4 bg-white rounded-3 shadow-sm">' +
                            '<div class="service-icon mb-3"><i class="fas ' + s.icono + ' fa-3x text-primary"></i></div>' +
                            '<h4>' + s.titulo + '</h4>' +
                            '<p class="text-muted">' + s.descripcion + '</p>' +
                            '<a href="' + s.enlace + '" class="btn btn-link text-primary p-0">' + s.enlace_texto + ' <i class="fas fa-arrow-right ms-1"></i></a>' +
                        '</div>';
                    row.appendChild(col);
                });
            }
        }
    }

    // ====================================================
    // MENÚ / PRODUCTOS
    // ====================================================
    function applyMenu() {
        var menu = siteConfig.MENU;
        if (!menu) return;
        var section = qs('#menu');
        if (!section) return;

        if (menu.titulo_pequeno) {
            var h6 = section.querySelector('h6');
            if (h6) h6.textContent = menu.titulo_pequeno;
        }
        if (menu.titulo_grande) {
            var h2 = section.querySelector('h2');
            if (h2) h2.textContent = menu.titulo_grande;
        }
        if (menu.descripcion) {
            var p = section.querySelector('.text-muted.mx-auto');
            if (p) p.textContent = menu.descripcion;
        }

        // Filter buttons - rebuild from config
        if (menu.categorias) {
            var filterContainer = section.querySelector('.text-center.mb-4');
            if (filterContainer) {
                filterContainer.innerHTML = '';
                menu.categorias.forEach(function (cat, i) {
                    var btn = document.createElement('button');
                    btn.className = 'btn btn-outline-primary m-1' + (i === 0 ? ' active' : '');
                    btn.setAttribute('data-filter', cat.id);
                    btn.textContent = cat.texto;
                    filterContainer.appendChild(btn);
                });
                // Re-bind filter click events
                filterContainer.querySelectorAll('[data-filter]').forEach(function (button) {
                    button.addEventListener('click', function () {
                        filterContainer.querySelectorAll('[data-filter]').forEach(function (btn) {
                            btn.classList.remove('active');
                        });
                        button.classList.add('active');
                        var filterValue = button.getAttribute('data-filter');
                        section.querySelectorAll('.portfolio-item').forEach(function (item) {
                            var category = item.getAttribute('data-category');
                            if (filterValue === 'all' || category === filterValue) {
                                item.style.display = 'block';
                                item.style.opacity = '0';
                                setTimeout(function () {
                                    item.style.transition = 'opacity 0.5s ease';
                                    item.style.opacity = '1';
                                }, 100);
                            } else {
                                item.style.display = 'none';
                            }
                        });
                    });
                });
            }
        }

        // Products - rebuild from config
        if (menu.productos) {
            var row = section.querySelector('.row.g-4');
            if (row) {
                row.innerHTML = '';
                menu.productos.forEach(function (prod) {
                    var col = document.createElement('div');
                    col.className = 'col-lg-4 col-md-6 portfolio-item';
                    col.setAttribute('data-category', prod.categoria);
                    col.innerHTML =
                        '<div class="product-card bg-white rounded-3 shadow-sm h-100">' +
                            '<div class="overflow-hidden"><img src="' + prod.imagen + '" alt="' + prod.titulo + '" class="img-fluid w-100"></div>' +
                            '<div class="p-3">' +
                                '<span class="product-category">' + prod.etiqueta + '</span>' +
                                '<h5>' + prod.titulo + '</h5>' +
                                '<p class="text-muted small">' + prod.descripcion + '</p>' +
                                '<div class="product-price">' + prod.precio + '</div>' +
                            '</div>' +
                        '</div>';
                    row.appendChild(col);
                });
            }
        }
    }

    // ====================================================
    // INFO IMPORTANTE
    // ====================================================
    function applyInfoImportante() {
        var info = siteConfig.INFO_IMPORTANTE;
        if (!info) return;
        var section = qs('#info');
        if (!section) return;

        if (info.titulo_pequeno) {
            var h6 = section.querySelector('h6');
            if (h6) h6.textContent = info.titulo_pequeno;
        }
        if (info.titulo_grande) {
            var h2 = section.querySelector('h2');
            if (h2) h2.textContent = info.titulo_grande;
        }

        if (info.items) {
            var row = section.querySelector('.row.g-4');
            if (row) {
                row.innerHTML = '';
                info.items.forEach(function (item) {
                    var col = document.createElement('div');
                    col.className = 'col-md-6';
                    col.innerHTML =
                        '<div class="p-4 bg-white rounded-3 shadow-sm h-100">' +
                            '<h5><i class="fas ' + item.icono + ' text-primary me-2"></i> ' + item.titulo + '</h5>' +
                            '<p class="text-muted">' + item.descripcion + '</p>' +
                        '</div>';
                    row.appendChild(col);
                });
            }
        }
    }

    // ====================================================
    // FUNDADORAS
    // ====================================================
    function applyFundadoras() {
        var fund = siteConfig.FUNDADORAS;
        if (!fund) return;
        var section = qs('#fundadoras');
        if (!section) return;

        if (fund.titulo_pequeno) {
            var h6 = section.querySelector('h6');
            if (h6) h6.textContent = fund.titulo_pequeno;
        }
        if (fund.titulo_grande) {
            var h2 = section.querySelector('h2');
            if (h2) h2.textContent = fund.titulo_grande;
        }
        if (fund.descripcion) {
            var p = section.querySelector('.text-muted.mx-auto');
            if (p) p.textContent = fund.descripcion;
        }

        // Founders cards
        if (fund.fundadoras) {
            fund.fundadoras.forEach(function (f, i) {
                var idx = i + 1;
                var imgEl = qs('#founder-img-' + idx);
                var nameEl = qs('#founder-name-' + idx);
                var cargoEl = qs('#founder-cargo-' + idx);
                var bioEl = qs('#founder-bio-' + idx);

                if (imgEl) { imgEl.src = f.imagen; imgEl.alt = f.nombre; }
                if (nameEl) nameEl.textContent = f.nombre;
                if (cargoEl) cargoEl.textContent = f.cargo;
                if (bioEl) bioEl.textContent = f.bio;
            });
        }

        // Mission
        if (fund.mision) {
            var missionTitle = qs('#mission-title');
            var missionText = qs('#mission-text');
            if (missionTitle && fund.mision.titulo) missionTitle.innerHTML = '<i class="fas fa-heart me-2"></i>' + fund.mision.titulo;
            if (missionText && fund.mision.texto) missionText.textContent = fund.mision.texto;
        }
    }

    // ====================================================
    // CONTACTO
    // ====================================================
    function applyContacto() {
        var contact = siteConfig.CONTACTO;
        if (!contact) return;
        var section = qs('#contacto');
        if (!section) return;

        if (contact.titulo_pequeno) {
            var h6 = section.querySelector('h6');
            if (h6) h6.textContent = contact.titulo_pequeno;
        }
        if (contact.titulo_grande) {
            var h2 = section.querySelector('h2');
            if (h2) h2.textContent = contact.titulo_grande;
        }
        if (contact.descripcion) {
            var p = section.querySelector('.text-muted.mx-auto');
            if (p) p.textContent = contact.descripcion;
        }

        // Contact info
        if (contact.informacion) {
            var infoDiv = qs('.contact-info');
            if (infoDiv) {
                var items = infoDiv.querySelectorAll('.d-flex > div:nth-child(2)');
                if (contact.informacion.telefono && items[0]) {
                    items[0].querySelector('h6').textContent = contact.informacion.telefono.label;
                    items[0].querySelector('p').textContent = contact.informacion.telefono.valor;
                }
                if (contact.informacion.email && items[1]) {
                    items[1].querySelector('h6').textContent = contact.informacion.email.label;
                    items[1].querySelector('p').textContent = contact.informacion.email.valor;
                }
                if (contact.informacion.instagram && items[2]) {
                    var h6i = items[2].querySelector('h6');
                    var ai = items[2].querySelector('a');
                    h6i.textContent = contact.informacion.instagram.label;
                    if (ai) { ai.href = contact.informacion.instagram.enlace; ai.textContent = contact.informacion.instagram.valor; }
                }
                if (contact.informacion.facebook && items[3]) {
                    var h6f = items[3].querySelector('h6');
                    var af = items[3].querySelector('a');
                    h6f.textContent = contact.informacion.facebook.label;
                    if (af) { af.href = contact.informacion.facebook.enlace; af.textContent = contact.informacion.facebook.valor; }
                }
            }
        }
    }

    // ====================================================
    // GALERÍA
    // ====================================================
    function applyGaleria() {
        var gal = siteConfig.GALERIA;
        if (!gal) return;
        var section = qs('#galeria');
        if (!section) return;

        if (gal.titulo_pequeno) {
            var h6 = section.querySelector('h6');
            if (h6) h6.textContent = gal.titulo_pequeno;
        }
        if (gal.titulo_grande) {
            var h2 = section.querySelector('h2');
            if (h2) h2.textContent = gal.titulo_grande;
        }

        if (gal.fotos) {
            var row = section.querySelector('.row.g-3');
            if (row) {
                row.innerHTML = '';
                gal.fotos.forEach(function (foto) {
                    var col = document.createElement('div');
                    col.className = 'col-lg-3 col-md-4 col-6';
                    col.innerHTML = '<img src="' + foto.src + '" alt="' + foto.alt + '" class="img-fluid rounded-3 shadow-sm" style="height:200px;object-fit:cover;width:100%">';
                    row.appendChild(col);
                });
            }
        }
    }

    // ====================================================
    // FOOTER
    // ====================================================
    function applyFooter() {
        var foot = siteConfig.FOOTER;
        if (!foot) return;
        var footer = qs('footer');
        if (!footer) return;

        // Logo and description
        if (foot.logo) {
            var h5 = footer.querySelector('h5');
            if (h5) {
                h5.innerHTML = '<img src="' + foot.logo.src + '" alt="' + foot.logo.texto + '" style="height:40px; margin-right:10px;">' + foot.logo.texto;
            }
        }
        if (foot.descripcion) {
            var p = footer.querySelector('.text-white-50');
            if (p) p.textContent = foot.descripcion;
        }

        // Social links
        if (foot.redes_sociales) {
            var socialLinks = footer.querySelectorAll('.social-links a');
            var socialMap = ['facebook', 'instagram', 'whatsapp', 'email'];
            socialMap.forEach(function (key, i) {
                if (foot.redes_sociales[key] && socialLinks[i]) {
                    socialLinks[i].href = foot.redes_sociales[key];
                }
            });
        }

        // Footer links
        if (foot.enlaces_footer) {
            var linksCol = footer.querySelectorAll('.col-lg-2 .list-unstyled li a');
            foot.enlaces_footer.forEach(function (link, i) {
                if (linksCol[i]) {
                    linksCol[i].href = link.enlace;
                    linksCol[i].textContent = link.texto;
                }
            });
        }

        // Footer services
        if (foot.servicios_footer) {
            var servLinks = footer.querySelectorAll('.col-lg-3:nth-of-type(1) .list-unstyled li a');
            foot.servicios_footer.forEach(function (link, i) {
                if (servLinks[i]) {
                    servLinks[i].href = link.enlace;
                    servLinks[i].textContent = link.texto;
                }
            });
        }

        // Newsletter
        if (foot.boletin) {
            var boletinCols = footer.querySelectorAll('.col-lg-3');
            if (boletinCols.length >= 2) {
                var boletinCol = boletinCols[1];
                var h5b = boletinCol.querySelector('h5');
                var pb = boletinCol.querySelector('p');
                var input = boletinCol.querySelector('input');
                if (h5b && foot.boletin.titulo) h5b.textContent = foot.boletin.titulo;
                if (pb && foot.boletin.descripcion) pb.textContent = foot.boletin.descripcion;
                if (input && foot.boletin.placeholder) input.placeholder = foot.boletin.placeholder;
            }
        }

        // Copyright
        if (foot.copyright) {
            var copyPs = footer.querySelectorAll('.text-white-50');
            if (copyPs.length >= 3) copyPs[2].textContent = foot.copyright;
        }
        if (foot.frase_final) {
            var copyPs2 = footer.querySelectorAll('.text-white-50');
            if (copyPs2.length >= 4) copyPs2[3].textContent = foot.frase_final;
        }
    }

    // ====================================================
    // WHATSAPP FLOTANTE
    // ====================================================
    function applyWhatsApp() {
        var contact = siteConfig.CONTACTO;
        if (!contact || !contact.whatsapp) return;

        var waLink = qs('.whatsapp-float');
        if (waLink) {
            var encodedMsg = encodeURIComponent(contact.whatsapp.mensaje_predeterminado);
            waLink.href = 'https://wa.me/' + contact.whatsapp.numero + '?text=' + encodedMsg;
        }
    }

    // ====================================================
    // INICIAR: cargar config.json y luego aplicar
    // ====================================================
    function initLoader() {
        fetchConfig().then(function () {
            applyAllConfig();
        }).catch(function () {
            console.error('[ConfigLoader] No se pudo cargar la configuración.');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLoader);
    } else {
        initLoader();
    }

})();