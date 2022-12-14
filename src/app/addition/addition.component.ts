import { Component } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
  result:Number=0

  constructor(private service:CalcService){

  }




  addNumbers(num1:any,num2:any){
   let n1=Number(num1.value)
   let n2=Number(num2.value)
   let data={"num1":n1,"num2":n2}
   this.service.performAddition(data).then(res=>res.json()).then(data=>this.result=data.Result)
   

   
    
    
    
  }
}
