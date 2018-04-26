import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotasService } from '../../servicios/notes.service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Creamos la lista de las notas    
  notas = [];
  @ViewChild('myNav') nav: NavController
  //Importamos el servicio NotaasService, el return nos regresa las notas
  constructor(public navCtrl: NavController, public notasService: NotasService) {
    this.notas = notasService.getNotas();

  }

  public goToDetail(id){
    this.navCtrl.push(DetailPage, {id:id});
  }
  public crearNota(){
    this.navCtrl.push(DetailPage, {id:0});
  }

}
