import { Component } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent {
result:Number=0


cubeNumber(num1:any){
  let n1=Number(num1.value)
  let cube=n1**3
  this.result=cube
}
}
