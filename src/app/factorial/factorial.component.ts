import { Component } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent {
  fact:any=1
  num:Number=0


  factorial(){
    this.fact=1
    for(let i=1;i<=this.num;i++){
      this.fact=this.fact*i
    }


  }

}
