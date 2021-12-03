import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsuarioServicioService } from '../servicio/usuario-servicio.service';

@Component({
    selector: 'perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css']
})

export class perfilComponent {
    private url: string = 'http://localhost:3000/usuarios'; 
    
    nombre: string;
    nombreUsuario: string;
    correo: string;
    carrera: string;
    sede: string;
    apellidos: string;
    id: number = 1;

    constructor(private cliente: HttpClient, private servicio: UsuarioServicioService) {}

    ngOnInit() {
        this.cliente.get<any>(this.url).subscribe((response) => {
            const usuario = response.find((encontrado:any) =>{
                return encontrado.id === this.id; 
            });
            if(usuario) {
                this.nombre = usuario.nombre;
                this.apellidos = usuario.apellidos;
                this.nombreUsuario = usuario.nombreUsuario;
                this.correo = usuario.correo;
                this.carrera = usuario.carrera;
                this.sede = usuario.sede;                                
            }
        });
    }
}