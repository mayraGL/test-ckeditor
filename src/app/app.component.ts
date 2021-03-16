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
  private data3: string = "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><munder><mi>lim</mi><mrow><mi>x</mi><mo>→</mo><mo>∞</mo></mrow></munder></math>&nbsp;&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>α</mi><mi>β</mi><mi>γ</mi><mi>δ</mi></math></p>";
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
