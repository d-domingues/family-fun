import { animate, keyframes, state, style, transition, trigger } from '@angular/animations'
import { Component, Input } from '@angular/core'
import { Figure } from 'src/app/models/figure'

import * as kf from './../../shared/keyframes'

@Component({
	selector: 'app-flipping-fig',
	templateUrl: './flipping-fig.component.html',
	styleUrls: ['./flipping-fig.component.scss'],
	animations: [
		trigger('flip', [
			state(
				'front',
				style({
					transform: 'rotateY(0deg)'
				})
			),
			state(
				'back',
				style({
					transform: 'rotateY(180deg)'
				})
			),
			transition('front => back', [animate('1s 0s ease-out', keyframes(kf.flipBack))
			]),
			transition('back => front', [animate('1s 0s ease-in', keyframes(kf.flipFront))])
		])
		/* 		trigger('cardAnimator', [
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
		]) */
	]
})
export class FlippingFigComponent {
	@Input() figure: Figure
	animationState: string
	flipState = 'front'

	startAnimation(stateAnim) {
		console.log(stateAnim)
		if (!this.animationState) {
			this.animationState = stateAnim
		}
	}

	resetAnimationState() {
		this.animationState = ''
	}


	onFlipClick() {
		if (this.flipState === 'front') {
			this.flipState = 'back'
		} else {
			this.flipState = 'front'
		}
	}
}
