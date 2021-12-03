import { Component } from '@angular/core';
import { IUsuario } from '../servicio/IUsuario';
import { UsuarioServicioService } from '../servicio/usuario-servicio.service';

@Component({
    selector: 'registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})

export class registroComponent {
    public usuario: IUsuario = {
        nombre: "",
        apellidos: "",
        contrasena: "",
        correo: "",
        sede: "",
        carrera: "",
        nombreUsuario: ""
    }
    private servicioUsuario: UsuarioServicioService;
    constructor(servicio: UsuarioServicioService) {
        this.servicioUsuario = servicio;
    }

    agregarUsuario() {        
        this.servicioUsuario.agregarUsuarios(this.usuario)
        .subscribe(respuesta => respuesta)
    }

    ngOnInit() {}

}