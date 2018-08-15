import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {

  statut: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  changeStatut(): void {
    console.log("Change le statut de " + this.statut + " -> " + !this.statut);
    this.statut = !this.statut;
  }

}
