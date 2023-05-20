import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core'; // Import MatNativeDateModule

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

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
    MatDatepickerModule,
    MatNativeDateModule,
    SlickCarouselModule,
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
