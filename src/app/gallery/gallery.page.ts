import { animate, query, stagger, style, transition, trigger } from '@angular/animations'
import { Component } from '@angular/core'

import { FigureService } from '../components/figure/figure.service'
import { Figure } from '../models/figure'

@Component({
	templateUrl: './gallery.page.html',
	styleUrls: ['./gallery.page.scss'],
	animations: [
		trigger('pageAnimations', [
			transition(':enter', [
				query('ion-row', [
					style({ opacity: 0, transform: 'translateY(-100px)' }),
					stagger(-30, [
						animate(
							'2000ms cubic-bezier(0.35, 0, 0.25, 1)',
							style({ opacity: 1, transform: 'none' })
						)
					])
				])
			])
		])
	]
})
export class GalleryPage {
	figures: Figure[] = []

	constructor(private figService: FigureService) {
		this.figures = this.figService.getFigures()
	}
}
