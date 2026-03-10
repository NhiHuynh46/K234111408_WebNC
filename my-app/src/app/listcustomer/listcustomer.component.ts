import { Component } from '@angular/core';

@Component({
  selector: 'app-listcustomer',
  standalone: false,
  templateUrl: './listcustomer.component.html',
  styleUrl: './listcustomer.component.css'
})
export class ListcustomerComponent {
  customers=[
    {"id":"c1","name":"Putin","age":72,"picture":"putin.png"},
    {"id":"c2","name":"Trump","age":78,"picture":"trump.png"},
    {"id":"c3","name":"Kim","age":71,"picture":"kim.png"},
    {"id":"c4","name":"Tap","age":79,"picture":"tap.png"},
  ]

}
