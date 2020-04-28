import { Component } from '@angular/core'

import { FigureService } from '../components/figure/figure.service'
import { Figure } from '../models/figure'

@Component({
	templateUrl: './gallery.page.html',
	styleUrls: ['./gallery.page.scss']
})
export class GalleryPage {
	figures: Figure[] = [];

	constructor(private figService: FigureService) {
		this.figures = this.figService.getFigures();
	}
}
