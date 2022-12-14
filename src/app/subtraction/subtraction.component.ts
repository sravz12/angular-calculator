import { Component } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent {
  result:Number=0
  num1:any
  num2:any
  constructor(private service:CalcService){

  }



  subNumbers(){
    let data={"num1":this.num1,"num2":this.num2}
    this.service.performSubtraction(data).then(res=>res.json()).then(data=>this.result=data.Result)
  }

}
