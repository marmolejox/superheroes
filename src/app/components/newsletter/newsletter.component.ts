import { Component, ElementRef, OnInit } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {


  constructor( /*private toastrSvc: ToastrService,*/ private elementRef:ElementRef){

  };


  guardarCambios():void{

      //this.toastrSvc.success('¡El usuario ha sido registrado correctamente!');

  }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type="text/javascript";
    s.src="../../newsletter/localStorage.js";
    this.elementRef.nativeElement.appendChild(s);

  }

}
