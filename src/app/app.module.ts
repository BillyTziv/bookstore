import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Material */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button'; 
import { MatMenuModule } from '@angular/material/menu';

/* Product-Related Components */
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductCreationComponent } from './product/product-creation/product-creation.component';
import { ProductSearchComponent } from './product/product-search/product-search.component';
import { GridLayoutComponent } from './layout/grid-layout/grid-layout.component';
import { GridLayoutItemComponent } from './layout/grid-layout-item/grid-layout-item.component';
import { ItemRatingComponent } from './layout/item-rating/item-rating.component';

/* Global Components */
import { FormFileUploadComponent } from './core/components/form-file-upload/form-file-upload.component';
import { RecommendedBooksComponent } from './product/recommended-books/recommended-books.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent,
    ProductCreationComponent,
    ProductSearchComponent,
    GridLayoutComponent,
    ItemRatingComponent,
    GridLayoutItemComponent,
    FormFileUploadComponent,
    RecommendedBooksComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
