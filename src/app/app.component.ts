import { Component } from '@angular/core';

import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  model = new Model('', 'isPrime')
  result:String|Boolean = ''

  onNumberChangeHandler() {
    Number(this.model.number)%1 !== 0? this.model.number = Number(this.model.number).toFixed():null
    Number(this.model.number) < 0? this.model.number = 1:null
  }

  calResult() {
   switch(this.model.calculation) {
     case 'isPrime': if(this.model.number !== '')
                      this.result = this.isPrime()
                      break
     case 'isFibonacci': if(this.model.number !== '')
                         this.result = this.isFibonacci()
                         break
     default: null
    }
  }

  isPrime():Boolean {
    if(Number(this.model.number) < 2)
      return false

    for (let i = 2; i < Number(this.model.number); i++) {
      if (Number(this.model.number)%i === 0)
        return false
    }
    return true
  }

  isFibonacci():Boolean {
    let arr = [0, 1]
    let last = 1

    if(Number(this.model.number) < 2)
      return true

    while(last <= Number(this.model.number)) {
      if(last === Number(this.model.number))
        return true
      last = arr[arr.length - 1] + arr[arr.length-2]
      arr.push(last)
    }
    return false
  }
}