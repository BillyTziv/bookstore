import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRatingComponent } from './item-rating.component';

describe('ItemRatingComponent', () => {
  let component: ItemRatingComponent;
  let fixture: ComponentFixture<ItemRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
