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

    let siteConfig = null;

    // ====================================================
    // Cargar configuración desde config.json (con cache-busting)
    // ====================================================
    async function loadConfig() {
        try {
            // Agregar timestamp para evitar caché del navegador
            const cacheBuster = '?v=' + Date.now();
            const response = await fetch('config.json' + cacheBuster);
            if (!response.ok) throw new Error('No se pudo cargar config.json');
            siteConfig = await response.json();
            applyAllConfig();
            console.log('[ConfigLoader] ✓ Configuración aplicada correctamente.');
            console.log('[ConfigLoader] Sección NOSOTROS parrafo_1:', siteConfig.NOSOTROS ? siteConfig.NOSOTROS.parrafo_1.substring(0, 50) + '...' : 'NO ENCONTRADA');
            console.log('[ConfigLoader] Sección FUNDADORAS:', siteConfig.FUNDADORAS ? 'OK' : 'NO ENCONTRADA');
        } catch (error) {
            console.error('[ConfigLoader] ✗ Error:', error);
        }
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
        applyFooter();
        applyWhatsApp();
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
        const m = siteConfig.METADATA;
        if (!m) return;
        if (m.titulo_pagina) document.title = m.titulo_pagina;
        const desc = qs('meta[name="description"]');
        if (desc && m.descripcion_seo) desc.setAttribute('content', m.descripcion_seo);
        const author = qs('meta[name="author"]');
        if (author && m.autor) author.setAttribute('content', m.autor);
    }

    // ====================================================
    // COLORES - Actualizar variables CSS
    // ====================================================
    function applyColors() {
        const c = siteConfig.COLORES;
        if (!c) return;
        const root = document.documentElement;
        const map = {
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
        for (const [key, variable] of Object.entries(map)) {
            if (c[key]) {
                root.style.setProperty(variable, c[key]);
            }
        }
    }

    // ====================================================
    // NAVEGACIÓN
    // ====================================================
    function applyNavigation() {
        const nav = siteConfig.NAVEGACION;
        if (!nav) return;

        // Logo
        if (nav.logo) {
            const logoImg = qs('.navbar-brand img');
            if (logoImg) {
                logoImg.src = nav.logo.src;
                logoImg.alt = nav.logo.alt;
            }
            const brandText = qs('.navbar-brand .brand-text');
            if (brandText) brandText.textContent = nav.logo.texto_marca;
        }

        // Menu items
        if (nav.items_menu) {
            const ul = qs('.navbar-nav');
            if (ul) {
                ul.innerHTML = '';
                nav.items_menu.forEach(function (item) {
                    const li = document.createElement('li');
                    li.className = 'nav-item';
                    const a = document.createElement('a');
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
        const hero = siteConfig.HERO;
        if (!hero) return;

        // Slogan image
        if (hero.slogan_imagen) {
            const sloganImg = qs('#inicio .hero-section img');
            if (sloganImg) {
                sloganImg.src = hero.slogan_imagen.src;
                sloganImg.alt = hero.slogan_imagen.alt;
                sloganImg.style.maxWidth = hero.slogan_imagen.max_ancho;
            }
        }

        // Title
        if (hero.titulo_principal) {
            const h1 = qs('#inicio h1');
            if (h1) h1.textContent = hero.titulo_principal;
        }

        // Subtitle
        if (hero.subtitulo) {
            const p = qs('#inicio .lead');
            if (p) p.textContent = hero.subtitulo;
        }

        // Buttons
        if (hero.boton_1) {
            const btns = qs('#inicio .d-flex.gap-3 .btn:nth-child(1)');
            if (btns) {
                btns.textContent = hero.boton_1.texto;
                btns.href = hero.boton_1.enlace;
            }
        }
        if (hero.boton_2) {
            const btns = qs('#inicio .d-flex.gap-3 .btn:nth-child(2)');
            if (btns) {
                btns.textContent = hero.boton_2.texto;
                btns.href = hero.boton_2.enlace;
            }
        }

        // Video
        if (hero.video) {
            const video = qs('#inicio video');
            const videoSource = qs('#inicio video source');
            if (videoSource) videoSource.src = hero.video.src;
            if (video) video.load();
            if (hero.video.mostrar === false && video) {
                video.parentElement.style.display = 'none';
            }
        }
    }

    // ====================================================
    // NOSOTROS - FIXED: selector ahora apunta a la columna de texto
    // ====================================================
    function applyNosotros() {
        const nos = siteConfig.NOSOTROS;
        if (!nos) return;
        const section = qs('#nosotros');
        if (!section) return;

        if (nos.titulo_pequeno) {
            const h6 = section.querySelector('h6');
            if (h6) h6.textContent = nos.titulo_pequeno;
        }
        if (nos.titulo_grande) {
            const h2 = section.querySelector('h2');
            if (h2) h2.textContent = nos.titulo_grande;
        }

        // FIX CRITICO: querySelector('.col-lg-6') devuelve la PRIMERA columna (la IMAGEN).
        // Usamos [1] para obtener la SEGUNDA columna que contiene el texto.
        const allCols = section.querySelectorAll('.col-lg-6');
        const colTexto = allCols[1]; // La segunda .col-lg-6 es la de texto
        if (colTexto) {
            const paragraphs = colTexto.querySelectorAll('p.text-muted');
            if (nos.parrafo_1 && paragraphs[0]) paragraphs[0].textContent = nos.parrafo_1;
            if (nos.parrafo_2 && paragraphs[1]) paragraphs[1].textContent = nos.parrafo_2;
        }

        // Image
        if (nos.imagen) {
            const img = section.querySelector('.about-img');
            if (img) {
                img.src = nos.imagen.src;
                img.alt = nos.imagen.alt;
            }
        }

        // Values: los .col-md-6 están dentro de colTexto (la segunda columna)
        if (nos.valores_columna_1 && colTexto) {
            const valueCols = colTexto.querySelectorAll('.col-md-6');
            const firstValueCol = valueCols[0];
            if (firstValueCol) {
                const items = firstValueCol.querySelectorAll('li');
                nos.valores_columna_1.forEach(function (val, i) {
                    if (items[i]) {
                        items[i].innerHTML = '<i class="fas fa-check-circle text-primary me-2"></i>' + val;
                    }
                });
            }
        }
        if (nos.valores_columna_2 && colTexto) {
            const valueCols = colTexto.querySelectorAll('.col-md-6');
            const secondValueCol = valueCols[1];
            if (secondValueCol) {
                const items = secondValueCol.querySelectorAll('li');
                nos.valores_columna_2.forEach(function (val, i) {
                    if (items[i]) {
                        items[i].innerHTML = '<i class="fas fa-check-circle text-primary me-2"></i>' + val;
                    }
                });
            }
        }

        // Stats
        if (nos.estadisticas) {
            const statNumbers = section.querySelectorAll('.stat-number');
            const statDescs = section.querySelectorAll('.stat-number + .text-muted');
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
        const serv = siteConfig.SERVICIOS;
        if (!serv) return;
        const section = qs('#servicios');
        if (!section) return;

        if (serv.titulo_pequeno) {
            const h6 = section.querySelector('h6');
            if (h6) h6.textContent = serv.titulo_pequeno;
        }
        if (serv.titulo_grande) {
            const h2 = section.querySelector('h2');
            if (h2) h2.textContent = serv.titulo_grande;
        }
        if (serv.descripcion) {
            const p = section.querySelector('.text-muted.mx-auto');
            if (p) p.textContent = serv.descripcion;
        }

        // Service cards - rebuild from config
        if (serv.servicios) {
            const row = section.querySelector('.row.g-4');
            if (row) {
                row.innerHTML = '';
                serv.servicios.forEach(function (s) {
                    const col = document.createElement('div');
                    col.className = 'col-lg-4 col-md-6';
                    col.innerHTML = `
                        <div class="service-card h-100 p-4 bg-white rounded-3 shadow-sm">
                            <div class="service-icon mb-3"><i class="fas ${s.icono} fa-3x text-primary"></i></div>
                            <h4>${s.titulo}</h4>
                            <p class="text-muted">${s.descripcion}</p>
                            <a href="${s.enlace}" class="btn btn-link text-primary p-0">${s.enlace_texto} <i class="fas fa-arrow-right ms-1"></i></a>
                        </div>
                    `;
                    row.appendChild(col);
                });
            }
        }
    }

    // ====================================================
    // MENÚ / PRODUCTOS
    // ====================================================
    function applyMenu() {
        const menu = siteConfig.MENU;
        if (!menu) return;
        const section = qs('#menu');
        if (!section) return;

        if (menu.titulo_pequeno) {
            const h6 = section.querySelector('h6');
            if (h6) h6.textContent = menu.titulo_pequeno;
        }
        if (menu.titulo_grande) {
            const h2 = section.querySelector('h2');
            if (h2) h2.textContent = menu.titulo_grande;
        }
        if (menu.descripcion) {
            const p = section.querySelector('.text-muted.mx-auto');
            if (p) p.textContent = menu.descripcion;
        }

        // Filter buttons - rebuild from config
        if (menu.categorias) {
            // Use the specific container with filter buttons
            const filterContainer = section.querySelector('.text-center.mb-4');
            if (filterContainer) {
                filterContainer.innerHTML = '';
                menu.categorias.forEach(function (cat, i) {
                    const btn = document.createElement('button');
                    btn.className = 'btn btn-outline-primary m-1' + (i === 0 ? ' active' : '');
                    btn.dataset.filter = cat.id;
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
                        const filterValue = button.getAttribute('data-filter');
                        section.querySelectorAll('.portfolio-item').forEach(function (item) {
                            const category = item.getAttribute('data-category');
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
            const row = section.querySelector('.row.g-4');
            if (row) {
                row.innerHTML = '';
                menu.productos.forEach(function (prod) {
                    const col = document.createElement('div');
                    col.className = 'col-lg-4 col-md-6 portfolio-item';
                    col.setAttribute('data-category', prod.categoria);
                    col.innerHTML = `
                        <div class="product-card bg-white rounded-3 shadow-sm h-100">
                            <div class="overflow-hidden"><img src="${prod.imagen}" alt="${prod.titulo}" class="img-fluid w-100"></div>
                            <div class="p-3">
                                <span class="product-category">${prod.etiqueta}</span>
                                <h5>${prod.titulo}</h5>
                                <p class="text-muted small">${prod.descripcion}</p>
                            </div>
                        </div>
                    `;
                    row.appendChild(col);
                });
            }
        }
    }

    // ====================================================
    // INFO IMPORTANTE
    // ====================================================
    function applyInfoImportante() {
        const info = siteConfig.INFO_IMPORTANTE;
        if (!info) return;
        const section = qs('#info');
        if (!section) return;

        if (info.titulo_pequeno) {
            const h6 = section.querySelector('h6');
            if (h6) h6.textContent = info.titulo_pequeno;
        }
        if (info.titulo_grande) {
            const h2 = section.querySelector('h2');
            if (h2) h2.textContent = info.titulo_grande;
        }

        if (info.items) {
            const row = section.querySelector('.row.g-4');
            if (row) {
                row.innerHTML = '';
                info.items.forEach(function (item) {
                    const col = document.createElement('div');
                    col.className = 'col-md-6';
                    col.innerHTML = `
                        <div class="p-4 bg-white rounded-3 shadow-sm h-100">
                            <h5><i class="fas ${item.icono} text-primary me-2"></i> ${item.titulo}</h5>
                            <p class="text-muted">${item.descripcion}</p>
                        </div>
                    `;
                    row.appendChild(col);
                });
            }
        }
    }

    // ====================================================
    // FUNDADORAS - CON SELECTORES ESPECÍFICOS (IDs)
    // ====================================================
    function applyFundadoras() {
        const fund = siteConfig.FUNDADORAS;
        if (!fund) return;
        const section = qs('#fundadoras');
        if (!section) return;

        if (fund.titulo_pequeno) {
            const h6 = section.querySelector('h6');
            if (h6) h6.textContent = fund.titulo_pequeno;
        }
        if (fund.titulo_grande) {
            const h2 = section.querySelector('h2');
            if (h2) h2.textContent = fund.titulo_grande;
        }
        if (fund.descripcion) {
            const p = section.querySelector('.text-center.mb-5 p.text-muted');
            if (p) p.textContent = fund.descripcion;
        }

        // Founders cards - usar IDs específicos para evitar conflictos
        if (fund.fundadoras) {
            fund.fundadoras.forEach(function (f, i) {
                const imgEl = qs('#founder-img-' + (i + 1));
                const nameEl = qs('#founder-name-' + (i + 1));
                const cargoEl = qs('#founder-cargo-' + (i + 1));
                const bioEl = qs('#founder-bio-' + (i + 1));

                if (imgEl) { imgEl.src = f.imagen; imgEl.alt = f.nombre; }
                if (nameEl) nameEl.textContent = f.nombre;
                if (cargoEl) cargoEl.textContent = f.cargo;
                if (bioEl) bioEl.textContent = '"' + f.bio + '"';
            });
        }

        // Mission - usar IDs específicos
        if (fund.mision) {
            const missionTitle = qs('#mission-title');
            const missionText = qs('#mission-text');
            if (missionTitle && fund.mision.titulo) {
                missionTitle.innerHTML = '<i class="fas fa-heart me-2"></i>' + fund.mision.titulo;
            }
            if (missionText && fund.mision.texto) {
                missionText.textContent = fund.mision.texto;
            }
        }
    }

    // ====================================================
    // CONTACTO
    // ====================================================
    function applyContacto() {
        const contact = siteConfig.CONTACTO;
        if (!contact) return;
        const section = qs('#contacto');
        if (!section) return;

        if (contact.titulo_pequeno) {
            const h6 = section.querySelector('h6');
            if (h6) h6.textContent = contact.titulo_pequeno;
        }
        if (contact.titulo_grande) {
            const h2 = section.querySelector('h2');
            if (h2) h2.textContent = contact.titulo_grande;
        }
        if (contact.descripcion) {
            const p = section.querySelector('.text-center.mb-5 p.text-muted');
            if (p) p.textContent = contact.descripcion;
        }

        // Contact info
        if (contact.informacion) {
            const infoDiv = qs('.contact-info');
            if (infoDiv) {
                const flexItems = infoDiv.querySelectorAll('.d-flex.mb-4, .d-flex:last-of-type');
                if (contact.informacion.telefono && flexItems[0]) {
                    const textDiv = flexItems[0].querySelectorAll('div')[1];
                    if (textDiv) {
                        const h6 = textDiv.querySelector('h6');
                        const p = textDiv.querySelector('p');
                        if (h6) h6.textContent = contact.informacion.telefono.label;
                        if (p) p.textContent = contact.informacion.telefono.valor;
                    }
                }
                if (contact.informacion.email && flexItems[1]) {
                    const textDiv = flexItems[1].querySelectorAll('div')[1];
                    if (textDiv) {
                        const h6 = textDiv.querySelector('h6');
                        const p = textDiv.querySelector('p');
                        if (h6) h6.textContent = contact.informacion.email.label;
                        if (p) p.textContent = contact.informacion.email.valor;
                    }
                }
                if (contact.informacion.instagram && flexItems[2]) {
                    const textDiv = flexItems[2].querySelectorAll('div')[1];
                    if (textDiv) {
                        const h6 = textDiv.querySelector('h6');
                        const a = textDiv.querySelector('a');
                        if (h6) h6.textContent = contact.informacion.instagram.label;
                        if (a) { a.href = contact.informacion.instagram.enlace; a.textContent = contact.informacion.instagram.valor; }
                    }
                }
                if (contact.informacion.facebook && flexItems[3]) {
                    const textDiv = flexItems[3].querySelectorAll('div')[1];
                    if (textDiv) {
                        const h6 = textDiv.querySelector('h6');
                        const a = textDiv.querySelector('a');
                        if (h6) h6.textContent = contact.informacion.facebook.label;
                        if (a) { a.href = contact.informacion.facebook.enlace; a.textContent = contact.informacion.facebook.valor; }
                    }
                }
            }
        }
    }

    // ====================================================
    // FOOTER - FIXED: selectors más específicos
    // ====================================================
    function applyFooter() {
        const foot = siteConfig.FOOTER;
        if (!foot) return;
        const footer = qs('footer');
        if (!footer) return;

        // Logo and text
        if (foot.logo) {
            const firstCol = footer.querySelectorAll('.col-lg-4, .col-lg-2, .col-lg-3')[0];
            if (firstCol) {
                const h5 = firstCol.querySelector('h5');
                if (h5) {
                    h5.innerHTML = '<img src="' + foot.logo.src + '" alt="' + foot.logo.texto + '" style="height:40px; margin-right:10px;">' + foot.logo.texto;
                }
            }
        }

        // Description - target the first .col-lg-4 specifically
        if (foot.descripcion) {
            const footerCols = footer.querySelectorAll('.row.g-4 > div');
            const firstCol = footerCols[0];
            if (firstCol) {
                const descP = firstCol.querySelector('p.text-white-50');
                if (descP) descP.textContent = foot.descripcion;
            }
        }

        // Social links
        if (foot.redes_sociales) {
            const socialLinks = footer.querySelectorAll('.social-links a');
            const socialMap = ['facebook', 'instagram', 'whatsapp', 'email'];
            socialMap.forEach(function (key, i) {
                if (foot.redes_sociales[key] && socialLinks[i]) {
                    socialLinks[i].href = foot.redes_sociales[key];
                }
            });
        }

        // Footer links (col-lg-2)
        if (foot.enlaces_footer) {
            const footerCols = footer.querySelectorAll('.row.g-4 > div');
            const linksCol = footerCols[1]; // col-lg-2
            if (linksCol) {
                const links = linksCol.querySelectorAll('.list-unstyled li a');
                foot.enlaces_footer.forEach(function (link, i) {
                    if (links[i]) {
                        links[i].href = link.enlace;
                        links[i].textContent = link.texto;
                    }
                });
            }
        }

        // Footer services (first col-lg-3)
        if (foot.servicios_footer) {
            const footerCols = footer.querySelectorAll('.row.g-4 > div');
            const servicesCol = footerCols[2]; // col-lg-3 (servicios)
            if (servicesCol) {
                const links = servicesCol.querySelectorAll('.list-unstyled li a');
                foot.servicios_footer.forEach(function (link, i) {
                    if (links[i]) {
                        links[i].href = link.enlace;
                        links[i].textContent = link.texto;
                    }
                });
            }
        }

        // Newsletter (last col-lg-3)
        if (foot.boletin) {
            const footerCols = footer.querySelectorAll('.row.g-4 > div');
            const boletinCol = footerCols[3]; // Último col
            if (boletinCol) {
                const h5 = boletinCol.querySelector('h5');
                const p = boletinCol.querySelector('p');
                const input = boletinCol.querySelector('input');
                if (h5 && foot.boletin.titulo) h5.textContent = foot.boletin.titulo;
                if (p && foot.boletin.descripcion) p.textContent = foot.boletin.descripcion;
                if (input && foot.boletin.placeholder) input.placeholder = foot.boletin.placeholder;
            }
        }

        // Copyright and frase final
        if (foot.copyright) {
            const bottomRow = footer.querySelector('hr + .row');
            if (bottomRow) {
                const pTags = bottomRow.querySelectorAll('p.text-white-50');
                if (pTags[0]) pTags[0].textContent = foot.copyright;
            }
        }
        if (foot.frase_final) {
            const bottomRow = footer.querySelector('hr + .row');
            if (bottomRow) {
                const pTags = bottomRow.querySelectorAll('p.text-white-50');
                if (pTags[1]) pTags[1].textContent = foot.frase_final;
            }
        }
    }

    // ====================================================
    // WHATSAPP FLOTANTE
    // ====================================================
    function applyWhatsApp() {
        const contact = siteConfig.CONTACTO;
        if (!contact || !contact.whatsapp) return;

        const waLink = qs('.whatsapp-float');
        if (waLink) {
            const encodedMsg = encodeURIComponent(contact.whatsapp.mensaje_predeterminado);
            waLink.href = 'https://wa.me/' + contact.whatsapp.numero + '?text=' + encodedMsg;
        }
    }

    // ====================================================
    // INICIAR cuando DOM esté listo
    // ====================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadConfig);
    } else {
        loadConfig();
    }

})();