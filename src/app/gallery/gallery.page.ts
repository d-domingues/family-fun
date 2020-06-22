import { animate, query, stagger, style, transition, trigger } from '@angular/animations'
import { Component, HostBinding } from '@angular/core'

import { Figure } from '../models/figure'
import { FigureService } from '../services/figure.service'

@Component({
	templateUrl: './gallery.page.html',
	styleUrls: ['./gallery.page.scss'],
	animations: [
		trigger('pageAnimations', [
			transition(':enter', [
				query(':self, app-gallery-pic', [
					style({ opacity: 0 }),
					stagger(100, [animate('300ms ease-out', style({ opacity: 1 }))])
				])
			])
		])
	]
})
export class GalleryPage {
	@HostBinding('@pageAnimations')
	public animatePage = true

	figures: Figure[] = []

	constructor(private figService: FigureService) {
		this.figures = this.figService.getFigures()
	}

	onClick() {
		const el = document.getElementById('demo')
		console.log(el)
	}
}
