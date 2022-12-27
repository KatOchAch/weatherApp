import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  
  @Output()
  

  private date = new Date()
 
  private dzienArray = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
  private miesiacArray = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]
  

  public dzien:string = ""
  public dzienN: string = ""
  public miesiac:string = ""
  public rok:string = ""
  
  public ampm: string = ""
  public godzina: any
  public minuta: string = ""
  public sekunda: string = ""
  

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000);
    
    this.dzien = this.dzienArray[this.date.getDay()];
    this. miesiac = this.miesiacArray[this.date.getMonth()];

  }
  private updateDate(date:Date){
    const godzina = date.getHours();
    this.ampm = godzina <= 12 ? "pm" : "am";
    this.godzina = godzina % 12;
    this.godzina = this.godzina ? this.godzina : 12;
    this.godzina = this.godzina < 10 ? "0" + this.godzina : this.godzina;

    const minuta = date.getMinutes();
    this.minuta = minuta <10? "0" + minuta: minuta.toString();

    const sekunda = date.getSeconds();
    this.sekunda = sekunda <10? "0" + sekunda: sekunda.toString();

    const dzienN = date.getDate();
    this.dzienN = dzienN <10? "0" + dzienN: dzienN.toString();

    const rok = date.getFullYear();
    this.rok = rok <10? "0" + rok: rok.toString();       
      
  }
}

