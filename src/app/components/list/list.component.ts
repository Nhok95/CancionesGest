import { Component, OnInit } from '@angular/core';
import { CancionService } from 'src/app/services/cancion.services';
import { Cancion } from 'src/app/model/cancion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  canciones: Cancion[] = undefined;
  constructor(private cancionService: CancionService,
              private router: Router) { }

  ngOnInit() {
    this.canciones = this.cancionService.getAll();
  }

  remove(codigo:number){
    this.cancionService.remove(codigo);
    this.canciones = this.cancionService.getAll();
  }

  navigateToEdit(codigo:number){
    this.router.navigateByUrl('/edit/' + codigo);
  }
}
