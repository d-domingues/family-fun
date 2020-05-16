import { Injectable } from '@angular/core'
import { Figure } from 'src/app/models/figure'

const figures: Figure[] = [
	{
		id: 1,
		name: 'Papá',
		src: 'assets/img/papa.png',
		soundSrc: 'assets/mp3/papa.mp3'
	},
	{
		id: 2,
		name: 'Mamã',
		src: 'assets/img/mama.png',
		soundSrc: 'assets/mp3/mama.mp3'
	},
	{
		id: 3,
		name: 'Tio',
		src: 'assets/img/tio.png',
		soundSrc: 'assets/mp3/tio.mp3'
	},
	{
		id: 4,
		name: 'Vovó',
		src: 'assets/img/vovo.png',
		soundSrc: 'assets/mp3/vovo.mp3'
	}
]

@Injectable({ providedIn: 'root' })
export class FigureService {
	getFigures() {
		return figures
	}

	getShuffledFigures() {
		return figures.concat().sort(() => Math.random() - 0.5)
	}

	getShuffledPairs() {
		return [...figures, ...figures].concat().sort(() => Math.random() - 0.5)
	}
}
