// Se importa Injectable para poder injectarlo en cualquier otro componente 
import { Injectable }  from '@angular/core';
@Injectable()
export class NotasService{
//Introduccion de valores a titulo y descripcion
    notas = [
        {id:1, titulo: "Nota 1", descripcion:" Texto de la nota 1"},
        {id:2, titulo: "Nota 2", descripcion:" Texto de la nota 2"},
        {id:3, titulo: "Nota 3", descripcion:" Texto de la nota 3"},
      ];


      public getNotas(){
          return this.notas;
      }
  

      public getNota(id){
          return this.notas.filter(function(e, i){return e.id == id})[0] || {id:null, titulo:null, descripcion:null};
      }


      public crearNota(nota){
          this.notas.push(nota);
      }

      public editarNota(nota){
          for(let i = 0; i <this.notas.length; i++){
              if(this.notas[i].id == nota){
                this.notas[i] = nota;
              }
          }
      }
      //comentario

      public delNota(nota){
        for(let i = 0; i <this.notas.length; i++){
            if(this.notas[i].id == nota.id){
              this.notas.splice(i, 1);
            }
        }
    }
      }
