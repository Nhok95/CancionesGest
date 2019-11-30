import { Component, OnInit } from '@angular/core';
import { Cancion } from 'src/app/model/cancion';
import { CancionService } from 'src/app/services/cancion.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  cancion:Cancion;

  constructor(private cancionServices:CancionService, 
              private router:Router) { }

  ngOnInit() {

    this.cancion = new Cancion();
    this.cancion.explicita = false;
  }

  crear(){

    if (this.cancion.codigo == undefined || 
        this.cancion.autor == undefined || 
        this.cancion.titulo == undefined ||
        this.cancion.release == undefined) {
      alert("Te faltan campos");

    } else {
      let success = this.cancionServices.create(this.cancion);
      if (success) this.router.navigateByUrl('list');
    }
    

    
  }

}
