import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio con calculadora';
  num1=0;
  num2=0;
  textResult="";
  result=0;

  sum():void{
    this.textResult=((this.num1+" + "+this.num2+" = "));
    this.result=((this.num1+this.num2));
  }
  sub():void{
    this.textResult=((this.num1+" - "+this.num2+" = "));
    this.result=((this.num1-this.num2));
  }
  mul():void{
    this.textResult=((this.num1+" x "+this.num2+" = "));
    this.result=((this.num1*this.num2));
  }
  div():void{
    this.textResult=((this.num1+" / "+this.num2+" = "));
    this.result=((this.num1/this.num2));
  }
  sqrt():void{
    this.textResult=(("√"+this.num1+" = "));
    this.result=((Math.sqrt(this.num1)));
  }
  pow():void{
    this.textResult=((this.num1+"^"+this.num2+"= "));
    this.result=((Math.pow(this.num1, this.num2)));
  }
}
