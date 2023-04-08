import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  values:string[]=[]
  screen:string = "" //screen
  finalResult:number=0  // result when click =
  sign:string [] = ['-', '+','/','*']

  click(event:any){
    let value = event.target.textContent
    let flage:boolean = false
    for(let i in this.sign){
      if(value=== this.sign[i]){
        flage = true
        break;
      }else{
        flage = false
      }
    }
      if(flage){
        if(this.sign.includes(this.values[this.values.length-1])){
          this.values[this.values.length-1] = value
        }else{
          this.values.push(value)
        }
      }
      else{
      this.values.push(value)
    }
    this.screen = this.values.join("")
  }


  clear(){
    this.screen=""
    this.finalResult =0
    this.values = []
  }

  equal(){
    console.log(this.screen)
    this.finalResult = eval(this.screen)
    this.screen = this.finalResult.toFixed(1).toString()
    console.log(this.finalResult)
  }

}
