import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  
  forma: FormGroup;
  usuarios;
  usuario:any={
    nombre:"xxx",
    correo:"zzz@www.com",
    fecha:"01/01/2000",
    sexo:'x'
    }
  constructor() {
    this.usuarios = localStorage.getItem("usuarios");
    this.usuarios= JSON.parse(this.usuarios);
    if(this.usuarios == null)
      this.usuarios = [];
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'correo': new FormControl('',[Validators.required,Validators.email]),
      'fecha': new FormControl('', [Validators.required,Validators.minLength(10)]),
      'sexo': new FormControl('', Validators.required),
      });
   }

   añadir(cad1:any,cad2:any,cad3:any,cad4:any){
    var nuevo = JSON.stringify(
        { nombre:cad1,
        correo:cad2,
        fecha:cad3,
        sexo:cad4
    });
    alert(nuevo);

        this.usuarios.push(nuevo);
        localStorage.setItem("usuarios",JSON.stringify(this.usuarios));

  }

  guardarCambios():void{
    console.log("metodo guardarCambios");
    console.log(this.forma);
    console.log(this.forma.value);
    this.añadir(this.forma.value.nombre,this.forma.value.correo,this.forma.value.fecha,this.forma.value.sexo);
    }


  ngOnInit(): void {


  }

}
