import { Component } from '@angular/core';
import { IBook } from '../myclasses/iBook';
import { BookAPIService } from '../myservices/book-api.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent {
  book=new IBook();
  books:any
  errMessage:string=''
  constructor(private _service: BookAPIService){
    this._service.getBooks().subscribe({
    next:(data)=>{this.books=data},
    error:(err)=>{this.errMessage=err}
    })
  }
  postBook()
  {
    this._service.postBook(this.book).subscribe({next:(data)=>{this.books=data},
    error:(err)=>{this.errMessage=err}
    })
  }

}
