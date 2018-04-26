import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotasService } from '../../servicios/notes.service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 //comentario

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
nota = {id: null, titulo: null, descripcion: null};
id:null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public notasService: NotasService) {
    this.id = navParams.get('id');
    if(this.id != 0){
      this.nota = notasService.getNota(this.id);
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  addNota(){
    if(this.id != 0){
      //editando
      this.notasService.editarNota(this.nota);
      alert('Nota Editada')
      
    }else{
      this.nota.id = Date.now();
      this.notasService.crearNota(this.nota);
      alert('Nota Creada')
      
    }
    this.navCtrl.pop();
  }
  delNota(){
    this.notasService.delNota(this.nota);
    alert('Nota Eliminada');
    this.navCtrl.pop();
  }
 
}
