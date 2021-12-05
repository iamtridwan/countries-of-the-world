import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertString'
})
export class ConvertStringPipe implements PipeTransform {

  transform(value: number): string{
    let strVal = String(value)
    let res: string = '';
    for(let i = 0; i < strVal.length; i++){
      if(i % 3 === 0){
        res += strVal[i] + ', ';  
      }
      else{
        res += strVal[i]
      }
    }
    return res
    
  }

}
