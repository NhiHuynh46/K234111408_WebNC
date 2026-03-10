import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Listcustomer2Component } from './listcustomer2/listcustomer2.component';
import { Ptb2Component } from './ptb2/ptb2.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { Listcustomer3Component } from './listcustomer3/listcustomer3.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { FakeproductComponent } from './fakeproduct/fakeproduct.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {path:"gioi-thieu",component:Ptb2Component},
  {path:"khach-hang1",component:ListcustomerComponent},
  {path:"khach-hang2",component:Listcustomer2Component},
  {path:"khach-hang3",component:Listcustomer3Component},
  {path:"san-pham1",component:ListproductComponent},
  {path:"san-pham1/:id",component:ProductdetailComponent},
  {path:"ex26",component:FakeproductComponent},
  {path:"ex39",component:BooksComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
