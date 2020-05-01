import { Component } from '@angular/core'

import { FigureService } from '../components/figure/figure.service'

@Component({
	templateUrl: 'match-pairs.page.html',
	styleUrls: ['match-pairs.page.scss']
	/* animations: [
		trigger('cardAnimator', [
			transition('* => wobble', animate(1000, keyframes(kf.wobble))),
			transition('* => swing', animate(1000, keyframes(kf.swing))),
			transition('* => jello', animate(1000, keyframes(kf.jello))),
			transition('* => zoomOutRight', animate(1000, keyframes(kf.zoomOutRight))),
			transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
			transition(
				'* => rotateOutUpRight',
				animate(1000, keyframes(kf.rotateOutUpRight))
			),
			transition('* => flipOutY', animate(1000, keyframes(kf.flipOutY)))
		])
	] */
})
export class MatchPairsPage {
	figures = [...this.figService.getFigures(), ...this.figService.getFigures()]
	animationState: string

	constructor(private figService: FigureService) {}

	startAnimation(state) {
		console.log(state)
		if (!this.animationState) {
			this.animationState = state
		}
	}

	resetAnimationState() {
		this.animationState = ''
	}
}
