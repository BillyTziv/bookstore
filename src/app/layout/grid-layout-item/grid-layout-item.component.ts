import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-layout-item',
  templateUrl: './grid-layout-item.component.html',
  styleUrls: ['./grid-layout-item.component.scss']
})
export class GridLayoutItemComponent {
  @Input() item: any;
  @Input() bookIndex: number;

  constructor() {
    this.bookIndex = 0;
  }
}
