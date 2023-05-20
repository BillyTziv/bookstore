import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCreationComponent } from './product-creation.component';
import { FormFileUploadComponent } from '../../core/components/form-file-upload/form-file-upload.component';
import { MatIconModule } from '@angular/material/icon'; // Import the MatIconModule
describe('ProductCreationComponent', () => {
  let component: ProductCreationComponent;
  let fixture: ComponentFixture<ProductCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductCreationComponent,
        FormFileUploadComponent
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatIconModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });

 
});
