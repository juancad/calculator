import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  num1="";
  num2="";
  output="0";
  result=0;
  isNum1=true;
  operator="";

  reset():void {
    this.num1="";
    this.num2="";
    this.output="0";
    this.result=0;
    this.isNum1=true;
    this.operator="";
  }

  solve():void {
    switch(this.operator) {
      case "+":
        this.result = Number(this.num1)+Number(this.num2);
        this.num1 = String(this.result);
        this.num2 = "";
      break;
      case "-":
        this.result = Number(this.num1)-Number(this.num2);
        this.num1 = String(this.result);
        this.num2 = "";
      break;
      case "*": 
        this.result = Number(this.num1)*Number(this.num2);
        this.num1 = String(this.result);
        this.num2 = "";
      break;
      case "/":         
        this.result = Number(this.num1)/Number(this.num2);
        this.num1 = String(this.result);
        this.num2 = "";
      break;
      case "!":
        this.result = this.factorial(Number(this.num1));
        this.num1 = String(this.result);
        this.num2 = "";
      break;
      case "log":
        this.result=((Math.log(Number(this.num1))/Math.log(Number(this.num2))));
        this.num1 = String(this.result);
        this.num2 = "";
      break;
      case "^":
        this.result=((Math.pow(Number(this.num1), Number(this.num2))));
        this.num1 = String(this.result);
        this.num2 = "";
      break;
      case "√":
        this.result=((Math.sqrt(Number(this.num1))));
        this.num1 = String(this.result);
        this.num2 = "";
      break;
    }
  }

  setOperator(op: string): void {
    this.isNum1 = false;
    this.operator = op;
    this.changeOutput();
  }

  number(x: number):void {
    if(this.isNum1) {
      this.num1+=x;
      this.changeOutput();
    }
    else {
      this.num2+=x;
      this.changeOutput();
    }
  }

  changeOutput(): void {
    if(this.isNum1) {
      this.output = this.num1;
    }
    else {
      switch(this.operator) {
        case "+": this.output = this.num1+"+"+this.num2;
        break;
        case "-": this.output = this.num1+"-"+this.num2;
        break;
        case "*": this.output = this.num1+"*"+this.num2;
        break;
        case "/": this.output = this.num1+"/";
        break;
        case "!": this.output = this.num1+"!";
        break;
        case "log": this.output = "log <sub>"+this.num2+"</sub> ("+this.num1+")";
        break;
        case "^": this.output = this.num1+"<sup>"+this.num2+"</sup>";
        break;
        case "√": this.output = "√"+this.num1;
        break;
      }
    }
  }

  factorial(x: number): number {
    if(x==0)
      return 1;
    return x * this.factorial(x-1);
  }
}