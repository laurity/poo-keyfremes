import { Tarea } from './tarea.js';

export class TareasManager{
    constructor(listaTareas){
        this.arregloTareas = [];
        this.contador = 0;
        this.listaTareas = listaTareas;
    }

    agregarTarea(descripcion) { 
        this.contador++;
        const nuevaTarea = new Tarea (this.contador, descripcion);
        this.arregloTareas.push(nuevaTarea);
        this.setContador();
        this.setArregloTareas();
    }

    }
