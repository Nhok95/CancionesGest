import { Component, OnInit } from '@angular/core';
import { Cancion } from 'src/app/model/cancion';
import { CancionService } from 'src/app/services/cancion.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  codigo:number = undefined;
  editedCancion:Cancion = undefined;

  constructor(private cancionService: CancionService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      console.log(x);
      this.editedCancion = this.cancionService.read(Number(x.codigo));
      console.log(this.editedCancion)
    })
  }

  update(){
    this.cancionService.update(this.editedCancion);
    this.router.navigateByUrl('/list');
  }

}
