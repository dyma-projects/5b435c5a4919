import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  nameAttributOfFileTs: string;
  interpolationDeVariable: string;

  constructor() {
    this.nameAttributOfFileTs = "Je suis valorisé dans le constructeur du fichier ts (liaison d'attribut)";
    this.interpolationDeVariable = "Je suis valorisé dans le constructeur du fichier ts (interpolation de variable)";
  }

  ngOnInit() {
  }

  liaisonEvenement() {
    console.log("Liaison d'evenement sur click")
  }

}
