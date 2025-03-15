import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  template: `
    <div class="container">
        <!-- Sección de Información -->
        <div class="info">
            <h4 class="titulo-empresa">MULTISERVICIOS LESCANO</h4>
            <h1>Déjanos tus Datos</h1>
            <p>Puede contactarnos las 24 horas, llene el formulario y deje sus consultas que nuestro personal se contactará a la brevedad.</p>
            
            <div class="contacto">
                <div class="item">
                    <i class="fas fa-phone-alt"></i>
                    <div>
                        <p class="label">Celular de Contacto</p>
                        <p class="valor">(+51) 948 104 848</p>
                    </div>
                </div>
                <div class="item">
                    <i class="fas fa-phone-alt"></i>
                    <div>
                        <p class="label">Celular de Contacto</p>
                        <p class="valor">(+51) 910 990 547</p>
                    </div>
                </div>
                <div class="item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <p class="label">Ubicación</p>
                        <p class="valor">Oficina: Ascomapat Mz D Lote 3 Trujillo - La Libertad</p>
                    </div>
                </div>
                <div class="item">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <p class="label">Correo</p>
                        <p class="valor">Cotización: info&#64;multiservicioslescano.com</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sección del Formulario -->
        <div class="formulario">
            <h3>Contacto</h3>
            <form action="#" method="POST">
                <input type="text" name="nombre" placeholder="Nombre" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="tel" name="celular" placeholder="Celular" required>
                <textarea name="mensaje" placeholder="Mensaje" required></textarea>
                <button type="submit">ENVIAR</button>
            </form>
        </div>
    </div>

  `,
  styles: `
    /* Contenedor principal */
.container {
    display: flex;
    max-width: 1100px;
    margin: 50px auto;
    background-color: white;
    padding: 30px;
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

/* Estilo de los ítems de contacto */
.contacto {
    margin-top: 20px;
}

.item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.item i {
    font-size: 20px;
    color: #007bff;
    margin-right: 15px;
}

.label {
    font-weight: bold;
    color: #333;
}

.valor {
    color: #555;
}

/* Sección del formulario */
.formulario {
    flex: 1;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 5px;
}

h3 {
    margin-bottom: 15px;
}

form {
    display: flex;
    flex-direction: column;
}

input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

textarea {
    height: 100px;
}

button {
    background-color: navy;
    color: white;
    padding: 12px;
    border: none;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: darkblue;
}

/* Responsivo */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        padding: 20px;
    }
}
  `
})
export class FormComponent {

}
