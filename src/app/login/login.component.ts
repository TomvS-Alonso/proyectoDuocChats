import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class loginComponent implements OnInit {

    public loginForm: FormGroup;

    constructor(private formbuilder: FormBuilder, private cliente: HttpClient, private router: Router, public alertController: AlertController) { }

    ngOnInit(): void {
        this.loginForm = this.formbuilder.group({
            nombreUsuario: [''],
            contrasena: ['']
        });
    }
    

    async alerta() {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Error',
          subHeader: '',
          message: 'Nombre de usuario y/o contraseña incorrecto.',
          buttons: ['Cerrar']
        });
        await alert.present();
    }

    ingreso() {
        this.cliente.get<any>("http://localhost:3000/usuarios")
        .subscribe(response => {
            const usuario = response.find((a: any) => {
                return a.nombreUsuario === this.loginForm.value.nombreUsuario && a.contrasena === this.loginForm.value.contrasena
            });
            if (usuario) {
                this.loginForm.reset();
                this.router.navigate(['principal'])
            }
            else {
                this.alerta();
            }
        })
    }
    

}