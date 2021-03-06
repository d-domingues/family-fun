import { Component } from '@angular/core'

import { FigureService } from '../services/figure.service'

@Component({
	templateUrl: 'match-pairs.page.html',
	styleUrls: ['match-pairs.page.scss']
})
export class MatchPairsPage {
	figures = this.figService.getShuffledPairs().slice(0, 6)
	animationState: string

	constructor(private figService: FigureService) {}
}
