import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, Input } from '@angular/core'
import { Figure } from 'src/app/models/figure'
import { PlayerService } from 'src/app/services/player.service'

@Component({
	selector: 'app-gallery-pic',
	templateUrl: './gallery-pic.component.html',
	styleUrls: ['./../gallery.page.scss'],
	animations: [
		trigger('zoom', [
			state('inact', style({ transform: 'scale(1)' })),
			state('act', style({ transform: 'scale(1.1)' })),
			transition('inact <=> act', animate(2000))
		])
	]
})
export class GalleryPicComponent {
	@Input() figure: Figure
	@Input() text?: string

	animState = 'inact'

	constructor(private player: PlayerService) {}

	ngOnInit() {
		console.log(this.figure)
	}

	play() {
		this.player.play(this.figure.soundSrc)
	}

	changeAnimState() {
    this.animState = this.animState === 'inact' ? 'act' : 'inact'
  }
}
