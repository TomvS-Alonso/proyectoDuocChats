import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMensaje } from '../servicio/IMensaje';
import { MensajeServicioService } from '../servicio/mensaje-servicio.service';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})

export class chatComponent implements OnInit {
    private url: string = 'http://localhost:3000/mensajes';
    public mensaje: IMensaje = {
        cuerpo: ""
    }

    mensajes: Observable<Array<IMensaje>>;

    private serviciosMensajes: MensajeServicioService;
    constructor(servicio: MensajeServicioService, private cliente: HttpClient, ) {
        this.serviciosMensajes = servicio;
    }

    ngOnInit() {
        this.cliente.get<any>(this.url).subscribe((res) => {
            this.mensajes = res;
        })
    }

    mandarMensaje() {
        this.serviciosMensajes.agregarMensaje(this.mensaje).subscribe((res) => {
            window.location.reload();
        });
    }
}