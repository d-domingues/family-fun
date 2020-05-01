import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, Input } from '@angular/core'
import { Figure } from 'src/app/models/figure'

@Component({
	selector: 'app-flipping-fig',
	templateUrl: './flipping-fig.component.html',
	styleUrls: ['./flipping-fig.component.scss'],
	animations: [
		trigger('flipState', [
			state(
				'active',
				style({
					transform: 'rotateY(180deg)'
				})
			),
			state(
				'inactive',
				style({
					transform: 'rotateY(0)'
				})
			),
			transition('active => inactive', animate('400ms ease-out')),
			transition('inactive => active', animate('400ms ease-in'))
		])
	]
})
export class FlippingFigComponent {
	@Input() figure: Figure
	flip = 'inactive'

	toggleFlip() {
		this.flip = this.flip === 'inactive' ? 'active' : 'inactive'
	}
}
