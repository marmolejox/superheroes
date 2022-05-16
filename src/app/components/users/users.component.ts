import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {

  forma: FormGroup;
  usuarios;
  usuario: any = {
    nombre: "xxx",
    correo: "zzz@www.com",
    fecha: "01/01/2000",
    sexo: 'x'
  }

  constructor() {

    this.usuarios = localStorage.getItem("usuarios");
    this.usuarios = JSON.parse(this.usuarios);

    if (this.usuarios == null)
      this.usuarios = [];

    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'correo': new FormControl('', [Validators.required, Validators.email]),
      'fecha': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'sexo': new FormControl('', [Validators.required, Validators.maxLength(1)]),
    });

  }

  

  añadir(cad1: any, cad2: any, cad3: any, cad4: any) {

    var nuevo = JSON.stringify(
      {
        nombre: cad1,
        correo: cad2,
        fecha: cad3,
        sexo: cad4
      });

    alert(nuevo);

    this.usuarios.push(nuevo);
    localStorage.setItem("usuarios", JSON.stringify(this.usuarios));

  }

  guardarCambios(): void {

    console.log("metodo guardarCambios");
    console.log(this.forma);
    console.log(this.forma.value);
    this.añadir(this.forma.value.nombre, this.forma.value.correo, this.forma.value.fecha, this.forma.value.sexo);
  
  }
    
  todosUsuarios = localStorage.getItem("usuarios");

  /*

  generarTabla(): void{

    var todosUsuarios: any = [];

    var Table: any = [];

    todosUsuarios = localStorage.getItem("usuarios");
    //this.usuarios = JSON.parse(this.usuarios);

    Table = "<thead><tr><th>Nombre</th><th>Correo</th><th>Fecha de Nacimiento</th><th>Sexo</th></th></th></tr></thead>";

    for(var i in todosUsuarios){

      var usuarioUnico = JSON.parse(todosUsuarios[i]);

      Table += "<tbody><tr><td>"+usuarioUnico.nombre+"</td>";
      Table += "<td>"+usuarioUnico.correo+"</td>";
      Table += "<td>"+usuarioUnico.fecha+"</td>";
      Table += "<td>"+usuarioUnico.sexo+"</td>";
      Table += "</tr></tbody>";

    }

    alert(Table);

    //Evitamos el verificar el Null desde tsconfig.json
    //document.getElementById("table-users").innerHTML = Table;


  } */

  ngOnInit(): void {

  }

}
