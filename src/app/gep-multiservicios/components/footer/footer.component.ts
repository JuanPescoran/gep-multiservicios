import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer>
        <div class="footer-container">
            <!-- Logo y descripción -->
            <div class="footer-info">
                <h2><span class="logo">MsL</span> GEP MULTISERVICIOS</h2>
                <p>Brindamos soluciones en sistemas automáticos a tu hogar, oficina o empresa.</p>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>

            <!-- Menú de navegación -->
            <div class="footer-links">
                <h3>Link</h3>
                <ul>
                    <li><i class="fas fa-angle-right"></i> <a href="#">Inicio</a></li>
                    <li><i class="fas fa-angle-right"></i> <a href="#">Productos</a></li>
                    <li><i class="fas fa-angle-right"></i> <a href="#">Empresa</a></li>
                    <li><i class="fas fa-angle-right"></i> <a href="#">Galería</a></li>
                    <li><i class="fas fa-angle-right"></i> <a href="#">Contacto</a></li>
                </ul>
            </div>

            <!-- Información de contacto -->
            <div class="footer-contact">
                <h3>Contacto</h3>
                <p><strong>Ubicación</strong></p>
                <p><i class="fas fa-map-marker-alt"></i> <strong>Oficina:</strong> Ascomapat Mz D Lote 3, Trujillo - La Libertad</p>
                
                <p><strong>Celulares</strong></p>
                <p><i class="fas fa-phone"></i> (+51) 948 104 848</p>
                <p><i class="fas fa-phone"></i> (+51) 910 990 547</p>
            </div>
        </div>

        <!-- Derechos reservados -->
        <div class="footer-bottom">
            <p>© Copyright 2023 | <a href="#">GEP MULTISERVICIOS</a> | All Rights Reserved</p>
        </div>
    </footer>
  `,
  styles: `
    /* Estilos generales */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
}

/* Footer */
footer {
    background-color: #0A0A26;
    color: white;
    padding: 40px 0;
}

.footer-container {
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
}

/* Sección izquierda - Logo y descripción */
.footer-info {
    max-width: 300px;
}

.footer-info h2 {
    font-size: 20px;
}

.footer-info .logo {
    font-weight: bold;
    color: #007bff;
}

.footer-info p {
    font-size: 14px;
    margin-top: 10px;
    color: #b5b5b5;
}

/* Redes sociales */
.social-icons {
    margin-top: 15px;
}

.social-icons a {
    color: white;
    margin-right: 10px;
    font-size: 18px;
    transition: 0.3s;
}

.social-icons a:hover {
    color: #007bff;
}

/* Sección central - Links */
.footer-links h3, .footer-contact h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.footer-links ul {
    list-style: none;
    padding: 0;
}

.footer-links ul li {
    margin: 5px 0;
}

.footer-links ul li a {
    color: #b5b5b5;
    text-decoration: none;
    font-size: 14px;
    transition: 0.3s;
}

.footer-links ul li i {
    color: #007bff;
    margin-right: 5px;
}

.footer-links ul li a:hover {
    color: #007bff;
}

/* Sección derecha - Contacto */
.footer-contact p {
    font-size: 14px;
    color: #b5b5b5;
    margin: 5px 0;
}

.footer-contact i {
    color: #007bff;
    margin-right: 5px;
}

/* Footer inferior */
.footer-bottom {
    text-align: center;
    margin-top: 30px;
    padding-top: 10px;
    border-top: 1px solid #333;
}

.footer-bottom p {
    font-size: 12px;
    color: #b5b5b5;
}

.footer-bottom a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
}

.footer-bottom a:hover {
    text-decoration: underline;
}

/* Responsivo */
@media (max-width: 768px) {
    .footer-container {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .footer-info,
    .footer-links,
    .footer-contact {
        max-width: 100%;
    }
}

  `
})
export class FooterComponent {  

}
