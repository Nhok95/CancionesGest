import { Cancion } from '../model/cancion';
import { Injectable } from '@angular/core';

const CANCIONES: Map<number, Cancion> = new Map(
    [
        [1,{codigo: 1,
            titulo: "vientos del norte",
            autor: "carlos núñez",
            explicita: true,
            release: new Date()}],
        [2,{codigo: 2,
            titulo: "la camisa negra",
            autor: "juanes",
            explicita: true,
            release: new Date()}],
        [3,{codigo: 3,
            titulo: "cosmic girl",
            autor: "jamiroquai",
            explicita: false,
            release: new Date()}]
    ]
);

@Injectable({
    providedIn: 'root'
})
export class CancionService{

    getAll(): Cancion[]{
        let canciones: Cancion[] = [];

        for (let cancion of CANCIONES.values()){
            canciones.push(cancion);
        }
        return canciones;
    }

    create(cancion:Cancion): boolean{

        if (CANCIONES.has(cancion.codigo)) {
            alert("El codigo ya existe >:C");
            return false;
        } else if (!CANCIONES.has(cancion.codigo)){
            CANCIONES.set(cancion.codigo, cancion);
            return true;
        }
        
    }
    
    remove(codigo:number): void{
        CANCIONES.delete(codigo);
    }

    read(codigo:number): Cancion{
        return CANCIONES.get(codigo);
    }

    update(cancion:Cancion){
        CANCIONES.set(cancion.codigo, cancion);
    }
}