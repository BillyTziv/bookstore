import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreationComponent } from './product/product-creation/product-creation.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductSearchComponent } from './product/product-search/product-search.component';

const routes: Routes = [
  { path: '', component: ProductSearchComponent },
  { path: 'product-creation', component: ProductCreationComponent },
  { path: 'product-view/:id', component: ProductViewComponent },
  { path: 'product-search', component: ProductSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
