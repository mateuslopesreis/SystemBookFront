import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  imagensGrid!: any[];

  constructor(public nav: NavController) { }

  equipamentos(){
    this.nav.navigateForward('sel-equipamento');
  }

  equipamentoItem(){
    this.nav.navigateForward('add-edit-equipamento-item');
  }

  ngOnInit() {
    this.imagensGrid = [
      {
        img: 'assets/livros-brasileiros.jpg',
        name: 'Livros'
      },
      {
        img: 'assets/loan.png',
        name: 'Emprestimo'
      },
      
    ]
  }

  navegacao(){
    
  }

}
