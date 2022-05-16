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

  tabla: any;

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

    this.lista();

  }

  

  añadir(cad1: any, cad2: any, cad3: any, cad4: any) {

    var nuevo = JSON.stringify(
      {
        nombre: cad1,
        correo: cad2,
        fecha: cad3,
        sexo: cad4
      });

    this.usuarios.push(nuevo);
    localStorage.setItem("usuarios", JSON.stringify(this.usuarios));

  }

  guardarCambios(): void {

    console.log("metodo guardarCambios");
    console.log(this.forma);
    console.log(this.forma.value);
    this.añadir(this.forma.value.nombre, this.forma.value.correo, this.forma.value.fecha, this.forma.value.sexo);
  
  }

  lista(){

    var aLength = this.usuarios.length;

    this.tabla = '<thead><tr><th> Nombre </th><th> Correo </th><th> Fecha </th><th> Sexo </th></tr></thead><hr>';

    for(var i in this.usuarios){

        var producto = JSON.parse(this.usuarios[i]);

        this.tabla += '<tbody><tr><td>' + producto.nombre + '</td>';
        this.tabla += "  ";
        this.tabla += '<td>' + producto.correo + '</td>';
        this.tabla += "  ";
        this.tabla += '<td>' + producto.fecha + '</td>';
        this.tabla += "  ";
        this.tabla += '<td>' + producto.sexo + '</td>';
       // this.tabla += "<td><input type = 'button' value= 'Borrar' onClick= 'borrar('+i+')'></td>";
        this.tabla += '</tr></tbody><hr>';

    }

    //document.getElementById("listado").innerHTML=tabla;
    //document.getElementById("total").innerHTML="Total de productos: "+ aLength;

}

  borrar(i: any){
    const ind = i;
  var elmn = JSON.parse(this.usuarios[ind]);
  var nomb = elmn.nombre;

  if(confirm("Deseas borrar el producto: " + nomb + "?")){
      this.usuarios.splice(ind,1);
      localStorage.setItem("usuarios",JSON.stringify(this.usuarios));
  }
  this.lista();
}

  //window: any.onload = this.lista;
    



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
