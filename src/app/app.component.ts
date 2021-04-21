import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  public AppConfig: any;
  private data: string = "<p><span style=\"color:hsl(270, 75 % 60 %);\">Text&nbsp;</span></p>";
  private data2: string = "<p><span style=\"background-color: hsl(0, 0 %, 30 %);\">Texto</span></p>";
  private data3: string = "<p><strong>THE MASQUE OF THE RED DEATH</strong></p><p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>&nbsp;</mo><msqrt><mn>23</mn></msqrt><mo>&nbsp;</mo><mo>?</mo><mo>?</mo><mo>?</mo><mo>?</mo><mo>?</mo><mo>?</mo><mo>?</mo><mi mathvariant=\"normal\">?</mi></math></p><p>The red death had long devastated the country. No pestilence had ever been so fatal, or so hideous. Blood was its Avatar and its seal -- the madness and the horror of blood. There were sharp pains, and sudden dizziness, and then profuse bleeding at the pores, with dissolution. The scarlet stains upon the body and especially upon the face of the victim, were the pest ban which shut him out from the aid and from the sympathy of his fellow-men. And the whole seizure, progress, and termination of the disease, were incidents of half an hour.</p><p>&nbsp;</p>";
  //"<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><munder><mi>lim</mi><mrow><mi>x</mi><mo>→</mo><mo>∞</mo></mrow></munder></math>&nbsp;&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>α</mi><mi>β</mi><mi>γ</mi><mi>δ</mi></math></p>";
  private updated: string = "";
  private updated2: string = "";
  private updated3: string = "";

  constructor(
  ) {

  }

  public update($event): void {
    this.updated = $event;
  }

  public update2($event): void {
    this.updated2 = $event;
  }

  public update3($event): void {
    this.updated3 = $event;
  }

}
