// Triada Bienestar - JavaScript Completo
// =====================================

// Configuración global
const CONFIG = {
    whatsappNumber: '5214581019800',
    // webhookURL se define en la nueva lógica del formulario
    animationDuration: 300,
    scrollOffset: 100, // Ajustado por el header más grande
    debounceDelay: 10
};

// --- Objeto de traducciones (Actualizado) ---
const translations = {
    es: {
        'logo': 'Triada Bienestar',
        'nav-home': 'Inicio',
        'nav-services': 'Servicios',
        'nav-testimonials': 'Testimonios',
        'nav-booking': 'Reservar',
        // 'nav-videos': 'Videos', // Eliminado
        'nav-location': 'Ubicación',
        'nav-contact': 'Contacto',
        'hero-title': 'Masajes Profesionales',
        'hero-subtitle': 'Equilibra tu ser - Siente, respira, renace',
        'hero-description': 'Descubre el poder transformador de nuestras técnicas especializadas de masaje terapéutico, diseñadas para restaurar tu bienestar integral.',
        'btn-explore': 'Explorar Servicios',
        'btn-book': 'Reservar Cita',
        'btn-schedule': 'Agendar Cita',
        'services-title': 'Nuestros Servicios',
        'services-subtitle': 'Técnicas especializadas para tu bienestar integral',
        
        // Beneficios (se usan como fallback si Firebase falla)
        'benefit-energy': 'Equilibrio energético',
        'benefit-detox': 'Desintoxicación',
        'benefit-muscle': 'Relajación muscular',
        'benefit-circulation': 'Mejora circulación',
        'benefit-pain': 'Alivio del dolor',
        'benefit-wellness': 'Bienestar general',
        'benefit-health': 'Salud integral',
        'benefit-migraine': 'Alivio de migrañas',
        'benefit-stress': 'Reduce estrés',
        'benefit-relaxation': 'Relajación profunda',
        'benefit-scalp': 'Mejora capilar',
        'benefit-posture': 'Corrección postural',
        'benefit-movement': 'Movimiento natural',
        'benefit-integral': 'Bienestar integral',
        'benefit-balance': 'Equilibrio total',

        'testimonials-title': 'Testimonios',
        'testimonials-subtitle': 'Lo que nuestros clientes dicen',

        'booking-title': 'Reservar Cita',
        'booking-subtitle': 'Agenda tu sesión de bienestar en simples pasos',
        'booking-hours-title': 'Horario de Atención (Cancún)',
        'booking-hours-days': 'Lunes a Viernes',
        'booking-hours-sat': 'Sábado',
        'feature-1': 'Confirmación de reserva',
        'feature-2': 'Atención personalizada',
        'feature-3': 'Ambiente relajante',
        'form-name': 'Nombre Completo',
        'form-phone': 'Teléfono',
        'form-email': 'Correo Electrónico',
        'form-massage-type': 'Tipo de Servicio (Todos 60 min)', // Actualizado
        // 'form-duration': 'Duración (minutos)', // Eliminado
        'form-date': 'Fecha',
        'form-time': 'Hora de Inicio',
        'btn-confirm': 'Confirmar Reserva',
        'placeholder-name': 'Ingresa tu nombre completo',
        'placeholder-phone': '123-456-7890',
        'placeholder-email': 'tu@email.com',
        'placeholder-select-massage': 'Selecciona un servicio', // Actualizado
        // 'placeholder-select-duration': 'Selecciona primero un masaje', // Eliminado

        // 'videos-title': 'Ejemplos de Manipulaciones', // Eliminado
        // 'videos-subtitle': 'Una muestra de nuestras técnicas', // Eliminado

        'location-title': 'Nuestra Ubicación',
        'location-subtitle': 'Un espacio diseñado para tu tranquilidad y bienestar',
        'cabin-title': 'Cabina de Masaje',
        'entrance-label': 'Entrada Principal',
        'cabin-label': 'Cabina de Masaje',
        'environment-label': 'Ambiente Relajante',
        'home-service-title': 'Servicio a Domicilio',
        'home-service-desc': 'Si prefieres recibir el masaje en la comodidad de tu hogar, ofrecemos servicio a domicilio con un costo adicional por transportación (ida y regreso).',
        'visit-us': 'Visítanos',
        'contact-title': 'Contacto y Redes Sociales',
        'contact-subtitle': 'Conecta con nosotros y agenda tu sesión de bienestar',
        'contact-info-title': 'Información de Contacto',
        'appointment-required': 'Previa cita requerida',
        'address-title': 'Dirección',
        'hours-title': 'Horarios',
        'hours-schedule': 'Lunes a Viernes: 9am - 7pm',
        'hours-time': 'Sábado: 9am - 3pm (PREVIA CITA)',
        'social-title': 'Síguenos en Redes Sociales',
        'maps-link': 'Google Maps',
        'footer-text': '© 2024 Triada Bienestar. Todos los derechos reservados.',
        'footer-subtitle': 'Equilibra tu ser - Siente, respira, renace',
        'whatsapp-message-base': 'Hola, me gustaría agendar una cita para un masaje',
        'whatsapp-message-suffix': '. ¿Podrían ayudarme con la información y disponibilidad?'
    },
    en: {
        'logo': 'Triada Wellness',
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-testimonials': 'Testimonials',
        'nav-booking': 'Book',
        // 'nav-videos': 'Videos', // Eliminado
        'nav-location': 'Location',
        'nav-contact': 'Contact',
        'hero-title': 'Professional Massages',
        'hero-subtitle': 'Balance your being - Feel, breathe, reborn',
        'hero-description': 'Discover the transformative power of our specialized therapeutic massage techniques, designed to restore your integral well-being.',
        'btn-explore': 'Explore Services',
        'btn-book': 'Book Appointment',
        'btn-schedule': 'Book an Appointment',
        'services-title': 'Our Services',
        'services-subtitle': 'Specialized techniques for your integral well-being',
        
        // Benefits fallback
        'benefit-energy': 'Energy balance',
        'benefit-detox': 'Detoxification',
        'benefit-muscle': 'Muscle relaxation',
        'benefit-circulation': 'Improved circulation',
        'benefit-pain': 'Pain relief',
        'benefit-wellness': 'General well-being',
        'benefit-health': 'Integral health',
        'benefit-migraine': 'Migraine relief',
        'benefit-stress': 'Reduces stress',
        'benefit-relaxation': 'Deep relaxation',
        'benefit-scalp': 'Hair improvement',
        'benefit-posture': 'Postural correction',
        'benefit-movement': 'Natural movement',
        'benefit-integral': 'Integral well-being',
        'benefit-balance': 'Total balance',

        'testimonials-title': 'Testimonials',
        'testimonials-subtitle': 'What our clients say',

        'booking-title': 'Book Appointment',
        'booking-subtitle': 'Schedule your wellness session in simple steps',
        'booking-hours-title': 'Business Hours (Cancun)',
        'booking-hours-days': 'Monday to Friday',
        'booking-hours-sat': 'Saturday',
        'feature-1': 'Booking confirmation',
        'feature-2': 'Personalized attention',
        'feature-3': 'Relaxing environment',
        'form-name': 'Full Name',
        'form-phone': 'Phone',
        'form-email': 'Email',
        'form-massage-type': 'Type of Service (All 60 min)', // Actualizado
        // 'form-duration': 'Duration (minutes)', // Eliminado
        'form-date': 'Date',
        'form-time': 'Start Time',
        'btn-confirm': 'Confirm Booking',
        'placeholder-name': 'Enter your full name',
        'placeholder-phone': '123-456-7890',
        'placeholder-email': 'your@email.com',
        'placeholder-select-massage': 'Select a service', // Actualizado
        // 'placeholder-select-duration': 'First, select a massage', // Eliminado

        // 'videos-title': 'Manipulation Examples', // Eliminado
        // 'videos-subtitle': 'A sample of our techniques', // Eliminado

        'location-title': 'Our Location',
        'location-subtitle': 'A space designed for your tranquility and well-being',
        'cabin-title': 'Massage Cabin',
        'entrance-label': 'Main Entrance',
        'cabin-label': 'Massage Cabin',
        'environment-label': 'Relaxing Environment',
        'home-service-title': 'Home Service',
        'home-service-desc': 'If you prefer to receive the massage in the comfort of your home, we offer home service with an additional cost for transportation (round trip).',
        'visit-us': 'Visit Us',
        'contact-title': 'Contact and Social Media',
        'contact-subtitle': 'Connect with us and book your wellness session',
        'contact-info-title': 'Contact Information',
        'appointment-required': 'Appointment required',
        'address-title': 'Address',
        'hours-title': 'Hours',
        'hours-schedule': 'Monday to Friday: 9am - 7pm',
        'hours-time': 'Saturday: 9am - 3pm (BY APPOINTMENT)',
        'social-title': 'Follow Us on Social Media',
        'maps-link': 'Google Maps',
        'footer-text': '© 2024 Triada Wellness. All rights reserved.',
        'footer-subtitle': 'Balance your being - Feel, breathe, reborn',
        'whatsapp-message-base': 'Hello, I would like to book an appointment for a massage',
        'whatsapp-message-suffix': '. Could you help me with information and availability?'
    }
};

let currentLang = localStorage.getItem('lang') || 'es';

// --- Variables Globales de Firebase ---
let db, auth, storage, userId;
let firebaseApp;
let initializeApp, getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged;
let getFirestore, collection, doc, onSnapshot, addDoc, getDocs, setLogLevel;
let getStorage, ref, getDownloadURL;


// --- FUNCIÓN DE INICIALIZACIÓN PRINCIPAL ---
function initializeAppCode() {
    
    // Desestructuración de funciones de Firebase (ahora se ejecuta)
    ({
        initializeApp, getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged,
        getFirestore, collection, doc, onSnapshot, addDoc, getDocs, setLogLevel,
        getStorage, ref, getDownloadURL
    } = window.firebase);


    // Utilidades
    const Utils = {
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        throttle(func, limit) {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },

        smoothScrollTo(target, offset = CONFIG.scrollOffset) {
            const element = document.querySelector(target);
            if (element) {
                const elementPosition = element.offsetTop;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        },

        generateWhatsAppMessage(serviceName = '') {
            const baseMessage = translations[currentLang]['whatsapp-message-base'];
            const suffix = translations[currentLang]['whatsapp-message-suffix'];
            return serviceName 
                ? `${baseMessage} de ${serviceName}. ${suffix}`
                : `${baseMessage}${suffix}`;
        },

        isMobile() {
            return window.innerWidth <= 768;
        },

        lazyLoadImage(img) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const image = entry.target;
                        if (image.dataset.src) {
                            image.src = image.dataset.src;
                            image.classList.remove('lazy');
                            observer.unobserve(image);
                        }
                    }
                });
            });
            imageObserver.observe(img);
        }
    };

    // Navegación móvil mejorada
    class MobileNavigation {
        constructor() {
            this.hamburger = document.querySelector('.hamburger');
            this.navMenu = document.querySelector('.nav-menu');
            this.navLinks = document.querySelectorAll('.nav-menu a');
            this.isOpen = false;
            
            this.init();
        }

        init() {
            if (this.hamburger && this.navMenu) {
                this.hamburger.addEventListener('click', () => this.toggle());
                this.navLinks.forEach(link => {
                    link.addEventListener('click', () => this.close());
                });
                
                document.addEventListener('click', (e) => {
                    if (this.hamburger && !this.hamburger.contains(e.target) && this.navMenu && !this.navMenu.contains(e.target)) {
                        this.close();
                    }
                });

                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && this.isOpen) {
                        this.close();
                    }
                });
            }
        }

        toggle() {
            this.isOpen ? this.close() : this.open();
        }

        open() {
            if (this.hamburger) this.hamburger.classList.add('active');
            if (this.navMenu) this.navMenu.classList.add('active');
            this.isOpen = true;
            document.body.style.overflow = 'hidden';
        }

        close() {
            if (this.hamburger) this.hamburger.classList.remove('active');
            if (this.navMenu) this.navMenu.classList.remove('active');
            this.isOpen = false;
            document.body.style.overflow = '';
        }
    }

    // Header con efectos de scroll
    class HeaderEffects {
        constructor() {
            this.header = document.querySelector('.header');
            this.lastScrollY = window.scrollY;
            
            this.init();
        }

        init() {
            if (this.header) {
                const throttledScroll = Utils.throttle(() => this.handleScroll(), 16);
                window.addEventListener('scroll', throttledScroll);
                this.handleScroll(); // Llama una vez al inicio
            }
        }

        handleScroll() {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }

            this.lastScrollY = currentScrollY;
        }
    }

    // Animaciones de elementos al entrar en viewport
    class ScrollAnimations {
        constructor() {
            this.observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            this.init();
        }

        init() {
            this.observer = new IntersectionObserver(
                (entries) => this.handleIntersection(entries),
                this.observerOptions
            );

            this.observeElements();
        }

        observeElements() {
            // Eliminado .video-card
            const animatedElements = document.querySelectorAll(
                '.service-card, .contact-card, .social-link, .location-image, .section-header, .testimonial-card'
            );
            
            animatedElements.forEach(el => {
                el.classList.add('loading');
                this.observer.observe(el);
            });
        }

        handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                    this.observer.unobserve(entry.target);
                }
            });
        }
    }

    // Gestor de datos de Firebase
    class FirebaseDataManager {
        constructor() {
            console.log("FirebaseDataManager: constructor() llamado.");
            this.init();
        }

        async init() {
            try {
                console.log("FirebaseDataManager: init() comenzado.");

                // 1. Configuración de Firebase (proporcionada por el usuario)
                const firebaseConfig = {
                  apiKey: "AIzaSyChtVomZJxYrJjFU55wTe2t2ZdxEorEAsI",
                  authDomain: "materialpaginatriada.firebaseapp.com",
                  projectId: "materialpaginatriada",
                  storageBucket: "materialpaginatriada.firebasestorage.app",
                  messagingSenderId: "709014662703",
                  appId: "1:709014662703:web:a685a5210ae808b177e0da"
                };
                
                // 2. Inicializar Firebase
                firebaseApp = initializeApp(firebaseConfig);
                db = getFirestore(firebaseApp);
                auth = getAuth(firebaseApp);
                storage = getStorage(firebaseApp);
                setLogLevel('Debug');
                
                console.log("FirebaseDataManager: Firebase inicializado (db, auth, storage).");

                // 3. Cargar datos inmediatamente
                this.loadAllData();

                // 4. Autenticar usuario (en segundo plano)
                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        userId = user.uid;
                        console.log('User authenticated:', userId);
                    } else {
                        console.log("FirebaseDataManager: No hay usuario, intentando signInAnonymously...");
                        try {
                            if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
                                await signInWithCustomToken(auth, __initial_auth_token);
                            } else {
                                await signInAnonymously(auth);
                            }
                        } catch (authError) {
                            console.error('Error signing in anonymously:', authError);
                        }
                    }
                });

            } catch (error) {
                console.error('Error initializing Firebase:', error);
            }
        }

        loadAllData() {
            if (!db) { 
                console.warn('FirebaseDataManager: loadAllData() llamado, pero la DB no está lista. Saltando.');
                return;
            }
            console.log('FirebaseDataManager: loadAllData() llamado. DB está lista. Cargando todos los datos...');
            this.loadServices();
            this.loadTestimonials();
            // this.loadVideos(); // Eliminado
        }

        async loadServices() {
            const grid = document.getElementById('services-grid');
            if (!grid) {
                console.warn('FirebaseDataManager: loadServices() - No se encontró #services-grid.');
                return;
            }
            console.log('FirebaseDataManager: loadServices() - Buscando en #services-grid...');

            const collectionPath = `servicios`;
            try {
                const q = collection(db, collectionPath);
                onSnapshot(q, (querySnapshot) => {
                    if (querySnapshot.empty) {
                        console.warn('FirebaseDataManager: La colección "servicios" está vacía.');
                        grid.innerHTML = `<p class="loading-placeholder">No hay servicios disponibles por el momento.</p>`;
                        return;
                    }
                    console.log(`FirebaseDataManager: Se encontraron ${querySnapshot.size} servicios.`);
                    grid.innerHTML = ''; // Limpiar
                    querySnapshot.forEach((doc) => {
                        const service = doc.data();
                        const serviceId = doc.id;
                        const benefitsHtml = (service.beneficios || [])
                            .map(b => `<span class="benefit-tag">${b}</span>`)
                            .join('');
                        
                        // **INICIO DE LA MODIFICACIÓN: Quitar duración y precio**
                        grid.innerHTML += `
                            <div class="service-card" data-service-id="${serviceId}">
                                <div class="service-image">
                                    <img src="${service.imagen || 'https://placehold.co/600x400/7B9A8B/E8F5E8?text=Triada'}" alt="${service.nombre || 'Servicio'}">
                                    <div class="service-overlay">
                                        <i class="fas fa-leaf"></i>
                                    </div>
                                </div>
                                <div class="service-content">
                                    <h3>${service.nombre || 'Servicio'}</h3>
                                    <p>${service.descripcion || 'Descripción no disponible.'}</p>
                                    <div class="service-benefits">
                                        ${benefitsHtml}
                                    </div>
                                    <!-- MODIFICACIÓN: Añadir precio, mantener duración eliminada -->
                                    <div class="service-details" style="margin-top: 15px; border-top: 1px solid #eee; padding-top: 15px; display: flex; justify-content: space-between; align-items: center;">
                                        <p style="font-weight: bold; color: var(--primary-dark); margin: 0;">Precio: $${service.precio || 'N/A'}</p>
                                        <!-- Duración sigue eliminada -->
                                    </div>
                                </div>
                            </div>
                        `;
                         // **FIN DE LA MODIFICACIÓN**
                    });
                });
            } catch (error) {
                console.error('Error loading services:', error);
                grid.innerHTML = `<p class="loading-placeholder">Error al cargar los servicios.</p>`;
            }
        }

        async loadTestimonials() {
            const grid = document.getElementById('testimonials-grid');
            if (!grid) {
                console.warn('FirebaseDataManager: loadTestimonials() - No se encontró #testimonials-grid.');
                return;
            }
            console.log('FirebaseDataManager: loadTestimonials() - Buscando en #testimonials-grid...');

            const collectionPath = `testimonios`;
            try {
                const q = collection(db, collectionPath);
                onSnapshot(q, (querySnapshot) => {
                    if (querySnapshot.empty) {
                        console.warn('FirebaseDataManager: La colección "testimonios" está vacía.');
                        grid.innerHTML = `<p class="loading-placeholder">Aún no hay testimonios.</p>`;
                        return;
                    }
                    console.log(`FirebaseDataManager: Se encontraron ${querySnapshot.size} testimonios.`);
                    grid.innerHTML = ''; // Limpiar
                    querySnapshot.forEach((doc) => {
                        const testimonial = doc.data();
                        grid.innerHTML += `
                            <div class="testimonial-card">
                                <blockquote>
                                    ${testimonial.testimonio || '...'}
                                    <footer>- ${testimonial.nombre || 'Cliente'}</footer>
                                </blockquote>
                            </div>
                        `;
                    });
                });
            } catch (error) {
                console.error('Error loading testimonials:', error);
                grid.innerHTML = `<p class="loading-placeholder">Error al cargar los testimonios.</p>`;
            }
        }

        // --- loadVideos() ELIMINADO ---
    }


    // Navegación suave mejorada
    class SmoothNavigation {
        constructor() {
            this.navLinks = document.querySelectorAll('a[href^="#"]');
            this.scrollIndicator = document.querySelector('.hero-scroll-indicator');
            
            this.init();
        }

        init() {
            this.navLinks.forEach(anchor => {
                anchor.addEventListener('click', (e) => this.handleNavClick(e, anchor));
            });

            if (this.scrollIndicator) {
                this.scrollIndicator.addEventListener('click', () => {
                    Utils.smoothScrollTo('#servicios');
                });
            }
        }

        handleNavClick(e, anchor) {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            
            if (targetId && targetId !== '#') {
                Utils.smoothScrollTo(targetId);
                
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    document.querySelector('.hamburger')?.classList.remove('active');
                }
            }
        }
    }

    // Gestión de enlaces externos
    class ExternalLinksManager {
        constructor() {
            this.externalLinks = document.querySelectorAll('a[target="_blank"]');
            this.whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
            this.socialLinks = document.querySelectorAll('.social-link');
            
            this.init();
        }

        init() {
            this.externalLinks.forEach(link => {
                link.addEventListener('click', () => this.handleExternalClick(link));
            });

            this.whatsappLinks.forEach(link => {
                link.addEventListener('click', () => this.trackWhatsAppClick());
            });

            this.socialLinks.forEach(link => {
                link.addEventListener('click', () => this.trackSocialClick(link));
            });
        }

        handleExternalClick(link) {
            const originalOpacity = link.style.opacity;
            link.style.opacity = '0.7';
            
            setTimeout(() => {
                link.style.opacity = originalOpacity;
            }, 1000);
        }

        trackWhatsAppClick() {
            console.log('WhatsApp link clicked');
        }

        trackSocialClick(link) {
            const platform = link.classList.contains('facebook') ? 'Facebook' : 
                             link.classList.contains('instagram') ? 'Instagram' : 'Google Maps';
            console.log(`${platform} link clicked`);
        }
    }

    // --- LÓGICA DEL NUEVO FORMULARIO DE RESERVA ---
    
    // URL de tu webhook de Make
    const WEBHOOK_URL = 'https://hook.us2.make.com/tyg7niibsztlwfbdn80x5abyiy6aa5ju';

    // --- Definición de Masajes y Duraciones ---
    // Todos los masajes duran 60 minutos
    const massageInfo = {
        'holistico': { duration: 60, label: 'Holístico' },
        'sueco': { duration: 60, label: 'Sueco' },
        'ayurveda': { duration: 60, label: 'Ayurveda' },
        'quiromasaje': { duration: 60, label: 'Quiromasaje' },
        'shiatsu': { duration: 60, label: 'Shiatsu' },
        'champi': { duration: 60, label: 'Champi' },
        'sotai': { duration: 60, label: 'Sotai' },
        'craneofacial': { duration: 60, label: 'Craneofacial' },
        'fusion': { duration: 60, label: 'Fusión' }
    };

    // --- Horarios de Atención (Minutos desde medianoche) ---
    // Zona Horaria: America/Cancun
    const businessHours = {
        // Lunes a Viernes (Dias 1-5)
        weekday: { start: 9 * 60, end: 19 * 60 }, // 9:00 AM - 7:00 PM
        // Sábado (Dia 6)
        saturday: { start: 9 * 60, end: 15 * 60 }, // 9:00 AM - 3:00 PM
        // Domingo (Dia 0)
        sunday: { start: 0, end: 0 } 
    };

    // --- Configurar fecha mínima (hoy) y máxima (6 meses) ---
    const fechaInput = document.getElementById('fecha');
    if (fechaInput) {
        const today = new Date();
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 6);
        
        fechaInput.setAttribute('min', today.toISOString().split('T')[0]);
        fechaInput.setAttribute('max', maxDate.toISOString().split('T')[0]);
    }

    // --- Validación de Días Hábiles (Lunes a Sábado) ---
    function isBusinessDay(dateString) {
        // Usamos T12:00:00 para evitar errores de zona horaria al cambiar de día
        const date = new Date(dateString + 'T12:00:00');
        const dayOfWeek = date.getDay();
        return dayOfWeek >= 1 && dayOfWeek <= 6; // 1 = Lunes, 6 = Sábado
    }

    // --- Validación de Hora de Cita (Inicio y Fin dentro del horario) ---
    function isValidBookingTime(dateString, timeString, durationMinutes) {
        if (!dateString || !timeString || !durationMinutes) return false;

        const date = new Date(dateString + 'T12:00:00');
        const dayOfWeek = date.getDay();
        
        let hours;
        // Domingo
        if (dayOfWeek === 0) {
            return { valid: false, message: 'No se aceptan citas en Domingo.' };
        }
        // Sábado
        else if (dayOfWeek === 6) {
            hours = businessHours.saturday;
        }
        // Lunes a Viernes
        else {
            hours = businessHours.weekday;
        }

        const [startHours, startMinutes] = timeString.split(':').map(Number);
        const startTimeInMinutes = startHours * 60 + startMinutes;
        const endTimeInMinutes = startTimeInMinutes + parseInt(durationMinutes, 10);

        // 1. Verifica si la cita comienza ANTES de la hora de apertura
        if (startTimeInMinutes < hours.start) {
            return { valid: false, message: 'La hora de inicio debe ser a partir de las 9:00 AM.' };
        }

        // 2. Verifica si la cita TERMINA DESPUÉS de la hora de cierre
        if (endTimeInMinutes > hours.end) {
            const closingTime = `${Math.floor(hours.end / 60)}:${(hours.end % 60).toString().padStart(2, '0')}`;
            return { valid: false, message: `La cita (de 60 min) debe terminar antes de las ${closingTime}.` };
        }

        return { valid: true };
    }

    // --- Funciones para Mostrar/Limpiar Errores ---
    function showFieldError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.getElementById(fieldId + '-error'); 
        
        if (field) field.classList.add('invalid-input'); 
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        }
    }

    function clearFieldError(fieldId) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.getElementById(fieldId + '-error');
        
        if (field) field.classList.remove('invalid-input');
        if (errorDiv) errorDiv.style.display = 'none';
    }

    // --- Limpiar errores al modificar campos ---
    const fieldsToClear = ['cliente', 'telefono', 'correo', 'fecha', 'hora', 'tipoMasaje'];
    fieldsToClear.forEach(fieldId => {
        const element = document.getElementById(fieldId);
        if(element) {
            element.addEventListener('input', () => clearFieldError(fieldId));
        }
    });

    // Validación específica de fecha al cambiar
    const fechaInputElement = document.getElementById('fecha');
    if (fechaInputElement) {
        fechaInputElement.addEventListener('change', function(e) {
            const selectedDate = e.target.value;
            
            if (selectedDate && !isBusinessDay(selectedDate)) {
                showFieldError('fecha', 'Solo se permiten citas de Lunes a Sábado');
                e.target.value = '';
            } else {
                clearFieldError('fecha');
            }
        });
    }

    // --- Manejar envío del formulario ---
    const appointmentFormElement = document.getElementById('appointmentForm');
    if (appointmentFormElement) {
        appointmentFormElement.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            fieldsToClear.forEach(clearFieldError);
            
            const submitBtn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const loading = document.getElementById('loading');
            const messageDiv = document.getElementById('message');
            
            const selectedMasajeKey = document.getElementById('tipoMasaje').value;
            const selectedMasajeInfo = massageInfo[selectedMasajeKey];
            
            const duration = selectedMasajeInfo ? selectedMasajeInfo.duration : null;
            const masajeLabel = selectedMasajeInfo ? selectedMasajeInfo.label : null;

            const formData = {
                cliente: document.getElementById('cliente').value.trim(),
                telefono: document.getElementById('telefono').value.trim(),
                correo: document.getElementById('correo').value.trim(),
                tipoMasajeKey: selectedMasajeKey,
                tipoMasajeLabel: masajeLabel,
                duracion: duration,
                fecha: document.getElementById('fecha').value,
                hora: document.getElementById('hora').value,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                targetTimezone: 'America/Cancun'
            };
            
            let hasErrors = false;
            
            if (!formData.cliente) { showFieldError('cliente', 'El nombre es obligatorio.'); hasErrors = true; }
            if (!formData.telefono) { showFieldError('telefono', 'El teléfono es obligatorio.'); hasErrors = true; }
            if (!formData.correo) { showFieldError('correo', 'El correo es obligatorio.'); hasErrors = true; }
            if (!formData.tipoMasajeKey) { showFieldError('tipoMasaje', 'Selecciona un tipo de servicio.'); hasErrors = true; }
            if (!formData.fecha) { showFieldError('fecha', 'Selecciona una fecha.'); hasErrors = true; }
            if (!formData.hora) { showFieldError('hora', 'Selecciona una hora de inicio.'); hasErrors = true; }
            
            if (hasErrors) return; 

            if (!isBusinessDay(formData.fecha)) {
                showFieldError('fecha', 'Selecciona un día laboral (Lunes-Sábado)');
                hasErrors = true;
            }
            
            const timeValidation = isValidBookingTime(formData.fecha, formData.hora, formData.duracion);
            if (!timeValidation.valid) {
                showFieldError('hora', timeValidation.message);
                hasErrors = true;
            }
            
            if (hasErrors) {
                return;
            }
            
            submitBtn.disabled = true;
            btnText.style.opacity = '0';
            loading.style.display = 'block';
            messageDiv.style.display = 'none';
            
            try {
                const response = await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    mode: 'cors',
                    body: JSON.stringify(formData)
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const result = await response.json();
                console.log('Respuesta del servidor:', result);
                
                messageDiv.style.display = 'block';
                
                if (result.disponible) {
                    messageDiv.className = 'booking-message success';
                    messageDiv.innerHTML = `
                        <strong>✓ CITA CONFIRMADA</strong><br>
                        ${result.mensaje}<br>
                        <small>Fecha: ${formData.fecha} | Hora: ${formData.hora}</small>
                    `;
                    
                    setTimeout(() => {
                        document.getElementById('appointmentForm').reset();
                    }, 3000);
                    
                } else {
                    messageDiv.className = 'booking-message warning';
                    messageDiv.innerHTML = `
                        <strong>⚠ HORARIO NO DISPONIBLE</strong><br>
                        ${result.mensaje}
                    `;
                }
                
            } catch (error) {
                console.error('Error:', error);
                messageDiv.style.display = 'block';
                messageDiv.className = 'booking-message error';
                messageDiv.innerHTML = `
                    <strong>✗ ERROR DE CONEXIÓN</strong><br>
                    No se pudo procesar la solicitud. Intenta nuevamente.
                `;
            } finally {
                submitBtn.disabled = false;
                btnText.style.opacity = '1';
                loading.style.display = 'none';
            }
        });
    }

    // Formateo automático del teléfono
    const telefonoInput = document.getElementById('telefono');
    if (telefonoInput) {
        telefonoInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 10) {
                value = value.substring(0, 10);
            }
            if (value.length >= 6) {
                value = value.replace(/(\d{3})(\d{3})(\d{0,4})/, '$1-$2-$3');
            } else if (value.length >= 3) {
                 value = value.replace(/(\d{3})(\d{0,3})/, '$1-$2');
            }
            e.target.value = value.replace(/-$/, ''); // Evitar guion al final
        });
    }
    
    // --- FIN DE LA LÓGICA DEL NUEVO FORMULARIO ---


    // Efectos visuales avanzados
    class VisualEffects {
        constructor() {
            this.init();
        }

        init() {
            this.initParallaxEffects();
            this.initHoverEffects();
            this.initLoadingStates();
        }

        initParallaxEffects() {
            const decorativeElements = document.querySelectorAll('.decoration-circle, .decoration-triangle');
            
            if (decorativeElements.length > 0) {
                const handleParallax = Utils.throttle(() => {
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * -0.5;
                    
                    decorativeElements.forEach(element => {
                        element.style.transform = `translateY(${rate}px)`;
                    });
                }, 16);

                window.addEventListener('scroll', handleParallax);
            }
        }

        initHoverEffects() {
            // Los estilos :hover de CSS son más eficientes
        }

        initLoadingStates() {
            const loadingElements = document.querySelectorAll('.loading');
            
            loadingElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('loaded');
                }, index * 100);
            });
        }
    }

    // Optimizaciones de rendimiento
    class PerformanceOptimizer {
        constructor() {
            this.init();
        }

        init() {
            this.optimizeImages();
            this.preloadCriticalResources();
        }

        optimizeImages() {
            const images = document.querySelectorAll('img[data-src]');
            images.forEach(img => Utils.lazyLoadImage(img));

            const allImages = document.querySelectorAll('img');
            allImages.forEach(img => {
                img.loading = 'lazy';
            });
        }

        preloadCriticalResources() {
            const criticalImages = [
                'images/logo_triada.png',
                'images/imagen_masajes_profesionales_nueva.png'
            ];

            criticalImages.forEach(src => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';
                link.href = src;
                document.head.appendChild(link);
            });
        }
    }

    // Gestión de errores y fallbacks
    class ErrorHandler {
        constructor() {
            this.init();
        }

        init() {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.addEventListener('error', () => this.handleImageError(img));
            });

            window.addEventListener('error', (e) => this.handleGlobalError(e));
        }

        handleImageError(img) {
            console.warn(`Error loading image: ${img.src}`);
            img.src = 'https://placehold.co/400x300/7B9A8B/E8F5E8?text=Imagen+no+disponible';
        }

        handleGlobalError(error) {
            console.error('Global error:', error);
        }
    }

    // Función para aplicar las traducciones
    function applyTranslations(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Aplicar placeholders traducidos
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
        
        document.documentElement.lang = lang;
    }

    // Función para cambiar el idioma
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        applyTranslations(lang);
        
        document.querySelectorAll('.lang-btn').forEach(button => {
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // --- INICIALIZACIÓN DE CLASES ---
    
    console.log("initializeAppCode() ejecutado. Inicializando componentes...");
        
    // Primero, inicializar Firebase
    new FirebaseDataManager();
    
    // Luego, el resto de los componentes
    new MobileNavigation();
    new HeaderEffects();
    new ScrollAnimations();
    new SmoothNavigation();
    new ExternalLinksManager();
    // new BookingSystem(); // La lógica nueva del formulario no es una clase
    new VisualEffects();
    new PerformanceOptimizer();
    new ErrorHandler();

    // Aplica el idioma y añade el listener a los botones
    setLanguage(currentLang);

    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            setLanguage(e.target.dataset.lang);
        });
    });

} // --- FIN DE initializeAppCode ---


// --- Lógica para esperar a que window.firebase esté listo ---
function checkFirebaseReady() {
    console.log("checkFirebaseReady() corriendo...");
    if (window.firebase && window.firebase.initializeApp) {
        console.log("Firebase SDKs loaded, initializing app.");
        initializeAppCode(); // Ejecuta todo el código de la aplicación
    } else {
        console.log("Waiting for Firebase SDKs...");
        setTimeout(checkFirebaseReady, 50); // Revisa de nuevo en 50ms
    }
}

// Iniciar el chequeo.
console.log("Script loaded. Starting checkFirebaseReady()...");
checkFirebaseReady();