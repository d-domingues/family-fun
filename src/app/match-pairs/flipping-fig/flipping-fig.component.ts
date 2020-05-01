import { Component, Input } from '@angular/core'
import { Figure } from 'src/app/models/figure'

@Component({
	selector: 'app-flipping-fig',
	templateUrl: './flipping-fig.component.html',
	styleUrls: ['./flipping-fig.component.scss'],
/* 	animations: [
		trigger('cardAnimator', [
			transition('* => jello', animate(1000, keyframes(kf.jello)))
		])
	] */
})
export class FlippingFigComponent {
	flip = false

	@Input() figure: Figure

	toggle() {
		this.flip = !this.flip
	}
}
