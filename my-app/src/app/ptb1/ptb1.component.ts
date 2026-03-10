import { Component } from '@angular/core';

@Component({
  selector: 'app-ptb1',
  standalone: false,
  templateUrl: './ptb1.component.html',
  styleUrl: './ptb1.component.css'
})
export class Ptb1Component {
  get_solution(hsa:HTMLInputElement, hsb:HTMLInputElement,result:HTMLElement)
  {
    let a=parseFloat(hsa.value)
    let b=parseFloat(hsb.value)
    if(a==0 && b==0)
    {result.innerHTML="Vô số nghiệm"}
    else if(a==0 && b!=0)
    {result.innerHTML="Vô nghiệm"}
    else{
      let x=-b/a
      result.innerHTML="x="+x
    }
  }
  clear_data(hsa:HTMLInputElement,hsb:HTMLInputElement,result:HTMLElement)
{
  hsa.value=""
  hsb.value=""
  result.innerHTML=""
  hsa.focus()

}

}
