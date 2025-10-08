// Triada Bienestar - JavaScript Completo
// =====================================

// Configuración global
const CONFIG = {
    whatsappNumber: '5214581019800',
    webhookURL: 'https://hook.us2.make.com/tyg7niibsztlwfbdn80x5abyiy6aa5ju',
    animationDuration: 300,
    scrollOffset: 80,
    debounceDelay: 10
};

// Objeto de traducciones
const translations = {
    es: {
        'logo': 'Triada Bienestar',
        'nav-home': 'Inicio',
        'nav-services': 'Servicios',
        'nav-booking': 'Reservar',
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
        'service-ayurveda-title': 'Masaje Ayurvédico',
        'service-ayurveda-desc': 'Medicina tradicional de la India que utiliza aceites medicados y movimientos específicos para equilibrar las energías vitales, desintoxicar el cuerpo y promover la relajación profunda.',
        'benefit-energy': 'Equilibrio energético',
        'benefit-detox': 'Desintoxicación',
        'service-swedish-title': 'Masaje Sueco',
        'service-swedish-desc': 'Técnica clásica que utiliza movimientos largos y fluidos, amasamiento y fricción para relajar los músculos, mejorar la circulación y aliviar la tensión corporal.',
        'benefit-muscle': 'Relajación muscular',
        'benefit-circulation': 'Mejora circulación',
        'service-chiro-title': 'Quiromasaje',
        'service-chiro-desc': 'Técnica manual que utiliza diversas manipulaciones sobre los tejidos blandos para aliviar dolores musculares, mejorar la circulación y promover el bienestar general.',
        'benefit-pain': 'Alivio del dolor',
        'benefit-wellness': 'Bienestar general',
        'service-shiatsu-title': 'Masaje Shiatsu',
        'service-shiatsu-desc': 'Terapia japonesa que utiliza presión de dedos y palmas sobre puntos específicos del cuerpo para equilibrar la energía vital y mejorar la salud general.',
        'benefit-health': 'Salud integral',
        'service-cranio-title': 'Masaje Craneofacial',
        'service-cranio-desc': 'Técnica especializada en cabeza, cara, cuello y hombros que ayuda a aliviar tensión, estrés, dolores de cabeza y migrañas, mejorando la circulación.',
        'benefit-migraine': 'Alivio de migrañas',
        'benefit-stress': 'Reduce estrés',
        'service-champi-title': 'Masaje Champi',
        'service-champi-desc': 'Técnica tradicional india enfocada en cabeza, cuello y hombros que alivia la tensión, mejora la circulación del cuero cabelludo y promueve la calma.',
        'benefit-relaxation': 'Relajación profunda',
        'benefit-scalp': 'Mejora capilar',
        'service-sotai-title': 'Masaje Sotai',
        'service-sotai-desc': 'Terapia japonesa de reeducación postural que corrige desequilibrios y alivia el dolor a través de movimientos suaves y naturales guiados por el terapeuta.',
        'benefit-posture': 'Corrección postural',
        'benefit-movement': 'Movimiento natural',
        'service-holistic-title': 'Masaje Holístico',
        'service-holistic-desc': 'Enfoque integral que considera cuerpo, mente y espíritu, combinando diversas técnicas para abordar el bienestar físico, emocional y mental.',
        'benefit-integral': 'Bienestar integral',
        'benefit-balance': 'Equilibrio total',
        'booking-title': 'Reservar Cita',
        'booking-subtitle': 'Agenda tu sesión de bienestar en simples pasos',
        'booking-hours-title': 'Horario de Atención',
        'booking-hours-days': 'Lunes a Viernes',
        'feature-1': 'Confirmación inmediata',
        'feature-2': 'Atención personalizada',
        'feature-3': 'Ambiente relajante',
        'form-name': 'Nombre Completo',
        'form-phone': 'Teléfono',
        'form-email': 'Correo Electrónico',
        'form-date': 'Fecha',
        'form-time': 'Hora',
        'btn-confirm': 'Confirmar Reserva',
        'placeholder-name': 'Ingresa tu nombre completo',
        'placeholder-phone': '123-456-7890',
        'placeholder-email': 'tu@email.com',
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
        'hours-schedule': 'Lunes a Viernes',
        'hours-time': '9:00 AM - 8:00 PM PREVIA CITA',
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
        'nav-booking': 'Book',
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
        'service-ayurveda-title': 'Ayurvedic Massage',
        'service-ayurveda-desc': 'Traditional Indian medicine that uses medicated oils and specific movements to balance vital energies, detoxify the body, and promote deep relaxation.',
        'benefit-energy': 'Energy balance',
        'benefit-detox': 'Detoxification',
        'service-swedish-title': 'Swedish Massage',
        'service-swedish-desc': 'Classic technique using long, fluid strokes, kneading, and friction to relax muscles, improve circulation, and relieve body tension.',
        'benefit-muscle': 'Muscle relaxation',
        'benefit-circulation': 'Improved circulation',
        'service-chiro-title': 'Chiromassage',
        'service-chiro-desc': 'Manual technique that uses various manipulations on soft tissues to relieve muscle pain, improve circulation, and promote general well-being.',
        'benefit-pain': 'Pain relief',
        'benefit-wellness': 'General well-being',
        'service-shiatsu-title': 'Shiatsu Massage',
        'service-shiatsu-desc': 'Japanese therapy that uses finger and palm pressure on specific body points to balance vital energy and improve overall health.',
        'benefit-health': 'Integral health',
        'service-cranio-title': 'Craniosacral Massage',
        'service-cranio-desc': 'Specialized technique for head, face, neck, and shoulders that helps relieve tension, stress, headaches, and migraines, improving circulation.',
        'benefit-migraine': 'Migraine relief',
        'benefit-stress': 'Reduces stress',
        'service-champi-title': 'Champi Massage',
        'service-champi-desc': 'Traditional Indian technique focused on the head, neck, and shoulders that relieves tension, improves scalp circulation, and promotes calm.',
        'benefit-relaxation': 'Deep relaxation',
        'benefit-scalp': 'Hair improvement',
        'service-sotai-title': 'Sotai Massage',
        'service-sotai-desc': 'Japanese postural re-education therapy that corrects imbalances and relieves pain through gentle, natural movements guided by the therapist.',
        'benefit-posture': 'Postural correction',
        'benefit-movement': 'Natural movement',
        'service-holistic-title': 'Holistic Massage',
        'service-holistic-desc': 'Integral approach that considers body, mind, and spirit, combining various techniques to address physical, emotional, and mental well-being.',
        'benefit-integral': 'Integral well-being',
        'benefit-balance': 'Total balance',
        'booking-title': 'Book Appointment',
        'booking-subtitle': 'Schedule your wellness session in simple steps',
        'booking-hours-title': 'Business Hours',
        'booking-hours-days': 'Monday to Friday',
        'feature-1': 'Immediate confirmation',
        'feature-2': 'Personalized attention',
        'feature-3': 'Relaxing environment',
        'form-name': 'Full Name',
        'form-phone': 'Phone',
        'form-email': 'Email',
        'form-date': 'Date',
        'form-time': 'Time',
        'btn-confirm': 'Confirm Booking',
        'placeholder-name': 'Enter your full name',
        'placeholder-phone': '123-456-7890',
        'placeholder-email': 'your@email.com',
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
        'hours-schedule': 'Monday to Friday',
        'hours-time': '9:00 AM - 8:00 PM by APPOINTMENT',
        'social-title': 'Follow Us on Social Media',
        'maps-link': 'Google Maps',
        'footer-text': '© 2024 Triada Wellness. All rights reserved.',
        'footer-subtitle': 'Balance your being - Feel, breathe, reborn',
        'whatsapp-message-base': 'Hello, I would like to book an appointment for a massage',
        'whatsapp-message-suffix': '. Could you help me with information and availability?'
    }
};

let currentLang = localStorage.getItem('lang') || 'es';

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
                if (!this.hamburger.contains(e.target) && !this.navMenu.contains(e.target)) {
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
        this.hamburger.classList.add('active');
        this.navMenu.classList.add('active');
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
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

        const animatedElements = document.querySelectorAll(
            '.service-card, .contact-card, .social-link, .location-image, .section-header'
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

// Gestión de servicios
class ServiceManager {
    constructor() {
        this.serviceCards = document.querySelectorAll('.service-card');
        this.init();
    }

    init() {
        this.serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => this.handleHover(card, true));
            card.addEventListener('mouseleave', () => this.handleHover(card, false));
            
            card.addEventListener('click', () => this.handleServiceClick(card));
            
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.handleServiceClick(card);
                }
            });
        });
    }

    handleHover(card, isHovering) {
        const overlay = card.querySelector('.service-overlay');
        if (overlay) {
            overlay.style.opacity = isHovering ? '1' : '0';
        }
    }

    handleServiceClick(card) {
        const serviceName = card.querySelector('h3')?.textContent || '';
        const message = Utils.generateWhatsAppMessage(serviceName);
        const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
        
        window.open(whatsappUrl, '_blank');
        
        this.trackServiceClick(serviceName);
    }

    trackServiceClick(serviceName) {
        console.log(`Servicio clickeado: ${serviceName}`);
    }
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

// Sistema de Reservas
class BookingSystem {
    constructor() {
        this.form = document.getElementById('appointmentForm');
        this.submitBtn = document.getElementById('submitBtn');
        this.btnText = document.getElementById('btnText');
        this.loading = document.getElementById('loading');
        this.messageDiv = document.getElementById('message');
        
        this.init();
    }

    init() {
        if (!this.form) return;
        
        this.setupDateRestrictions();
        this.setupValidations();
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Formateo automático del teléfono
        const phoneInput = document.getElementById('telefono');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => this.formatPhone(e));
        }
    }

    setupDateRestrictions() {
        const fechaInput = document.getElementById('fecha');
        const horaInput = document.getElementById('hora');
        
        if (fechaInput) {
            const today = new Date();
            const maxDate = new Date();
            maxDate.setMonth(maxDate.getMonth() + 6);
            
            fechaInput.setAttribute('min', today.toISOString().split('T')[0]);
            fechaInput.setAttribute('max', maxDate.toISOString().split('T')[0]);
            
            fechaInput.addEventListener('change', (e) => this.validateDate(e));
        }
        
        if (horaInput) {
            horaInput.setAttribute('min', '09:00');
            horaInput.setAttribute('max', '18:00');
            horaInput.setAttribute('step', '1800');
            
            horaInput.addEventListener('change', (e) => this.validateTime(e));
        }
    }

    setupValidations() {
        ['cliente', 'telefono', 'correo', 'fecha', 'hora'].forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.addEventListener('input', () => this.clearFieldError(fieldId));
            }
        });
    }

    validateDate(e) {
        const selectedDate = e.target.value;
        
        if (selectedDate && !this.isWeekday(selectedDate)) {
            this.showFieldError('fecha', currentLang === 'es' 
                ? 'Solo se permiten citas de Lunes a Viernes' 
                : 'Only weekday appointments (Monday-Friday)');
            e.target.value = '';
        } else {
            this.clearFieldError('fecha');
        }
    }

    validateTime(e) {
        const selectedTime = e.target.value;
        
        if (selectedTime && !this.isBusinessHour(selectedTime)) {
            this.showFieldError('hora', currentLang === 'es' 
                ? 'Horario permitido: 9:00 AM - 6:00 PM' 
                : 'Allowed hours: 9:00 AM - 6:00 PM');
            e.target.value = '';
        } else {
            this.clearFieldError('hora');
        }
    }

    isWeekday(dateString) {
        const date = new Date(dateString + 'T00:00:00');
        const dayOfWeek = date.getDay();
        return dayOfWeek >= 1 && dayOfWeek <= 5;
    }

    isBusinessHour(timeString) {
        const [hours, minutes] = timeString.split(':').map(Number);
        const timeInMinutes = hours * 60 + minutes;
        const startTime = 9 * 60;
        const endTime = 18 * 60;
        return timeInMinutes >= startTime && timeInMinutes <= endTime;
    }

    showFieldError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.getElementById(fieldId + '-error');
        
        if (field && errorDiv) {
            field.classList.add('invalid-input');
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        }
    }

    clearFieldError(fieldId) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.getElementById(fieldId + '-error');
        
        if (field && errorDiv) {
            field.classList.remove('invalid-input');
            errorDiv.style.display = 'none';
        }
    }

    formatPhone(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        }
        e.target.value = value;
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        ['cliente', 'telefono', 'correo', 'fecha', 'hora'].forEach(id => this.clearFieldError(id));
        
        const formData = {
            cliente: document.getElementById('cliente').value.trim(),
            telefono: document.getElementById('telefono').value.trim(),
            correo: document.getElementById('correo').value.trim(),
            fecha: document.getElementById('fecha').value,
            hora: document.getElementById('hora').value
        };
        
        let hasErrors = false;
        
        if (!formData.fecha || !this.isWeekday(formData.fecha)) {
            this.showFieldError('fecha', currentLang === 'es' 
                ? 'Selecciona un día laboral (Lunes-Viernes)' 
                : 'Select a weekday (Monday-Friday)');
            hasErrors = true;
        }
        
        if (!formData.hora || !this.isBusinessHour(formData.hora)) {
            this.showFieldError('hora', currentLang === 'es' 
                ? 'Selecciona una hora entre 9:00 AM y 6:00 PM' 
                : 'Select a time between 9:00 AM and 6:00 PM');
            hasErrors = true;
        }
        
        if (hasErrors) return;
        
        this.submitBtn.disabled = true;
        this.btnText.style.opacity = '0';
        this.loading.style.display = 'block';
        this.messageDiv.style.display = 'none';
        
        try {
            const response = await fetch(CONFIG.webhookURL, {
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
            
            this.messageDiv.style.display = 'block';
            
            if (result.disponible) {
                this.messageDiv.className = 'booking-message success';
                this.messageDiv.innerHTML = currentLang === 'es' 
                    ? `<strong>✓ CITA CONFIRMADA</strong><br>${result.mensaje}<br><small>Fecha: ${formData.fecha} | Hora: ${formData.hora}</small>`
                    : `<strong>✓ APPOINTMENT CONFIRMED</strong><br>${result.mensaje}<br><small>Date: ${formData.fecha} | Time: ${formData.hora}</small>`;
                
                setTimeout(() => {
                    this.form.reset();
                }, 3000);
                
            } else {
                this.messageDiv.className = 'booking-message warning';
                this.messageDiv.innerHTML = currentLang === 'es' 
                    ? `<strong>⚠ HORARIO NO DISPONIBLE</strong><br>${result.mensaje}`
                    : `<strong>⚠ TIME NOT AVAILABLE</strong><br>${result.mensaje}`;
            }
            
        } catch (error) {
            console.error('Error:', error);
            this.messageDiv.style.display = 'block';
            this.messageDiv.className = 'booking-message error';
            this.messageDiv.innerHTML = currentLang === 'es' 
                ? '<strong>✗ ERROR DE CONEXIÓN</strong><br>No se pudo procesar la solicitud. Intenta nuevamente.'
                : '<strong>✗ CONNECTION ERROR</strong><br>Could not process the request. Please try again.';
        } finally {
            this.submitBtn.disabled = false;
            this.btnText.style.opacity = '1';
            this.loading.style.display = 'none';
        }
    }
}

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
        const cards = document.querySelectorAll('.service-card, .contact-card, .location-image');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
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
        this.setupIntersectionObserver();
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

    setupIntersectionObserver() {
        const lazyElements = document.querySelectorAll('.lazy-load');
        
        if (lazyElements.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('loaded');
                        observer.unobserve(entry.target);
                    }
                });
            });

            lazyElements.forEach(el => observer.observe(el));
        }
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
        img.style.display = 'none';
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

// Inicialización principal
document.addEventListener('DOMContentLoaded', () => {
    new MobileNavigation();
    new HeaderEffects();
    new ScrollAnimations();
    new ServiceManager();
    new SmoothNavigation();
    new ExternalLinksManager();
    new BookingSystem();
    new VisualEffects();
    new PerformanceOptimizer();
    new ErrorHandler();

    setLanguage(currentLang);

    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            setLanguage(e.target.dataset.lang);
        });
    });
});