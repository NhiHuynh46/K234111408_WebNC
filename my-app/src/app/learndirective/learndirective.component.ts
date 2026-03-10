import { Component } from '@angular/core';

@Component({
  selector: 'app-learndirective',
  standalone: false,
  templateUrl: './learndirective.component.html',
  styleUrl: './learndirective.component.css'
})
export class LearndirectiveComponent {
flag_value:number=-1
changeView()
{
  if(this.flag_value==1)
    this.flag_value=2
  else
    this.flag_value=1
}
  products=["Thuốc Lào", "Thuốc Lá", "Thuốc Tây"]
  customers=[
    {"id":"c1","name":"Obama","phone":"123"},
    {"id":"c2","name":"Putin","phone":"456"},
    {"id":"c3","name":"Biden","phone":"789"},
  ]
}
