import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
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
    this.textResult=((this.num1+"<sup>"+this.num2+"</sup>= "));
    this.result=((Math.pow(this.num1, this.num2)));
  }
  log():void{
    this.textResult=(("log<sub>"+this.num2+"</sub>"+this.num1+"= "));
    this.result=((Math.log(this.num1)/Math.log(this.num2)));
  }
  fact():void{
    this.textResult=((this.num1+"!"+"= "));
    this.result=((this.factorial(this.num1)));
  }

  factorial(x: number): number {
    if(x==0)
      return 1;
    return x * this.factorial(x-1);
  }
}