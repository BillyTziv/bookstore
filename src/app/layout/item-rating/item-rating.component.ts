import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-item-rating',
	templateUrl: './item-rating.component.html',
	styleUrls: ['./item-rating.component.scss']
})
export class ItemRatingComponent {
	@Input() rating: number = 0;

	public MAX_RATING = 5;
}