import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {
  header=new Headers()

  constructor() {
    this.header.append("Content-type","application/json; charset=UTF-8",)
   }


  performAddition(data:any){
    let options={
      method:"post",
      body:JSON.stringify(data),
      headers:this.header
    }
    return fetch("http://127.0.0.1:8000/add",options)

  }

  performSubtraction(data:any){
    let options={
      method:"post",
      body:JSON.stringify(data),
      headers:this.header
    }
    return fetch("http://127.0.0.1:8000/sub",options)
  }

  performFactorial(data:any){
    let options={
      method:"post",
      body:JSON.stringify(data),
    }
    return fetch("http://127.0.0.1:8000/fact",options)
  }
}
