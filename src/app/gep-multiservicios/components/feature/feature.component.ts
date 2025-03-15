import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  imports: [],
  template: `
    <div class="container">
        <!-- Sección de Información -->
        <div class="info">
            <h4 class="titulo-empresa">MULTISERVICIOS LESCANO</h4>
            <h1>Venta e Instalación de Puertas de Garaje.</h1>
            <p>Empresa trujillana con más de 20 años de experiencia en la instalación y mantenimiento de una amplia gama de productos tales como.</p>
            
            <div class="servicios">
                <ul>
                    <li><i class="fas fa-check-circle"></i> Puertas Automáticas</li>
                    <li><i class="fas fa-check-circle"></i> Puertas de Garaje</li>
                    <li><i class="fas fa-check-circle"></i> Portones Industriales</li>
                    <li><i class="fas fa-check-circle"></i> Cercos Eléctricos</li>
                </ul>
                <ul>
                    <li><i class="fas fa-check-circle"></i> Alarmas Contra Incendios</li>
                    <li><i class="fas fa-check-circle"></i> Alarmas Contra Robos</li>
                    <li><i class="fas fa-check-circle"></i> Cámaras de Seguridad</li>
                    <li><i class="fas fa-check-circle"></i> Video Porteros (Intercomunicadores)</li>
                </ul>
            </div>

            <div class="ventajas">
                <div class="ventaja">
                    <i class="fas fa-user-cog"></i>
                    <p>Técnicos Capacitados</p>
                </div>
                <div class="ventaja">
                    <i class="fas fa-thumbs-up"></i>
                    <p>Trabajos con Garantía</p>
                </div>
                <div class="ventaja">
                    <i class="fas fa-headset"></i>
                    <p>Soporte Técnico 24/7</p>
                </div>
            </div>
        </div>

        <!-- Sección de Imagen -->
        <div class="imagen">
            <img src="garaje.jpg" alt="Puerta de Garaje">
            <div class="satisfaccion">
                <i class="fas fa-star"></i> 99% <br> <span>Clientes Satisfechos</span>
            </div>
        </div>
    </div>
  `,
  styles: `
    /* Estilos generales */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
}

/* Contenedor principal */
.container {
    display: flex;
    max-width: 1100px;
    margin: 50px auto;
    gap: 30px;
}

/* Sección de información */
.info {
    flex: 1;
}

.titulo-empresa {
    color: #007bff;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
}

h1 {
    font-size: 28px;
    margin: 10px 0;
}

p {
    color: #555;
    font-size: 16px;
}

/* Listado de servicios */
.servicios {
    display: flex;
    gap: 50px;
    margin-top: 20px;
}

.servicios ul {
    list-style: none;
    padding: 0;
}

.servicios li {
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
}

.servicios li i {
    color: #007bff;
    margin-right: 10px;
}

/* Tarjetas de ventajas */
.ventajas {
    display: flex;
    gap: 15px;
    margin-top: 30px;
}

.ventaja {
    flex: 1;
    background-color: white;
    padding: 20px;
    text-align: center;
    border: 2px solid transparent;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

.ventaja i {
    font-size: 30px;
    margin-bottom: 10px;
    color: #000;
}

.ventaja p {
    font-weight: bold;
}

.ventaja:hover,
.ventaja.active {
    border-color: #007bff;
    background-color: #007bff;
    color: white;
}

.ventaja:hover i,
.ventaja.active i {
    color: white;
}

/* Sección de imagen */
.imagen {
    flex: 1;
    position: relative;
}

.imagen img {
    width: 100%;
    border-radius: 5px;
}

/* Indicador de satisfacción */
.satisfaccion {
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: white;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.satisfaccion i {
    color: #007bff;
}

/* Responsivo */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        padding: 20px;
    }

    .servicios {
        flex-direction: column;
    }

    .ventajas {
        flex-direction: column;
    }
}

  `
})
export class FeatureComponent {

}
