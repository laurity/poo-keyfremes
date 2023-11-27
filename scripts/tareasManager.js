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

    listarTareas(){
        this.listarTareas.innerHTML = '';
        this.arregloTareas.reverse().foreach((tarea) =>{
            this.listaTareas.innerHTML += `
            <li id="${tarea.id}">
            <input type="text" class="input-tarea" value="${tarea.descripcion}">
            <button class="boton-eliminar">X</button>
            </li>
            `
        })
    }
        editarTarea(idTarea, descripcion){
            const tarea = this.arregloTareas.find((t) => t.id == idTarea);
            if (tarea){
                tarea.editarTarea(descripcion);
                this.setArregloTareas();
            }
        }

        eliminarTarea(idTarea){
            this.arregloTareas = this.arregloTareas.filter((t) => t.id != idTarea);
            this.setArregloTareas();
        }

        limpiarTodo(){
            this.arreglosTareas = [];
            this.contador = 0;
            this.setArregloTareas(); 
            this.setContador();
        }

        getContador(){
            const cont = localStorage.getItem('contador');
            return cont;
        }

        setContador(){
            localStorage.setItem("contador", this.contador);
        }

        inicializarContador() {
            if (this.getContador() !=null){
                this.contador = this.getContador();
            }
        }

        getArregloTareas(){
            this.setContador();
            const arreglo = JSON.parse (localStorage.getItem("arregloTareas"));
            return arreglo || [];
        }

        setArregloTareas(){
            localStorage.setItem("arregloTareas", JSON.stringify(this.arregloTareas));
            this.listarTareas();
        }
    }
