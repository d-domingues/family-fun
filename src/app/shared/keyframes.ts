import { animate, keyframes, state, style, transition, trigger } from '@angular/animations'

export const wobble = [
	style({
		offset: 0.15,
		transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)'
	}),
	style({
		offset: 0.3,
		transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)'
	}),
	style({
		offset: 0.45,
		transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)'
	}),
	style({
		offset: 0.6,
		transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)'
	}),
	style({
		offset: 0.75,
		transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)'
	}),
	style({ offset: 1, transform: 'none' })
]

export const jello = [
	style({ offset: 0.111, transform: 'skewX(-12.5deg) skewY(-12.5deg)' }),
	style({ offset: 0.222, transform: 'skewX(6.25deg) skewY(6.25deg)' }),
	style({ offset: 0.333, transform: 'skewX(-3.125deg) skewY(-3.125deg)' }),
	style({ offset: 0.444, transform: 'skewX(1.5625deg) skewY(1.5625deg)' }),
	style({ offset: 0.555, transform: 'skewX(-0.78125deg) skewY(-0.78125deg)' }),
	style({ offset: 0.666, transform: 'skewX(0.390625deg) skewY(0.390625deg)' }),
	style({ offset: 0.777, transform: 'skewX(0.390625deg) skewY(0.390625deg)' }),
	style({
		offset: 0.888,
		transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)'
	}),
	style({ offset: 1, transform: 'none' })
]

export const swing = [
	style({ offset: 0.2, transform: 'rotate3d(0, 0, 1, 15deg)' }),
	style({ offset: 0.4, transform: 'rotate3d(0, 0, 1, -10deg)' }),
	style({ offset: 0.6, transform: 'rotate3d(0, 0, 1, 5deg)' }),
	style({ offset: 0.8, transform: 'rotate3d(0, 0, 1, -5deg)' }),
	style({ offset: 1, transform: 'none' })
]

export const slideOutLeft = [
	style({ offset: 0, transform: 'translate3d(0, 0, 0)' }),
	style({ offset: 1, transform: 'translate3d(-150%, 0, 0)', opacity: 0 })
]

export const zoomOutRight = [
	style({
		offset: 0.4,
		transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)'
	}),
	style({
		offset: 1,
		transform: 'scale(.1) translate3d(2000px, 0, 0)',
		'transform-origin': 'right center'
	})
]

export const rotateOutUpRight = [
	style({
		offset: 0,
		transform: 'rotate3d(0, 0, 0, 0deg)',
		opacity: 1,
		'transform-origin': 'right bottom'
	}),
	style({
		offset: 1,
		transform: 'rotate3d(0, 0, 1, 90deg)',
		opacity: 0,
		'transform-origin': 'right bottom'
	})
]

export const flipOutY = [
	style({ offset: 0, transform: 'perspective(400px)' }),
	style({
		offset: 0.33,
		transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)',
		opacity: 1
	}),
	style({
		offset: 1,
		transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
		opacity: 0
	})
]

export const flipBack = [
	style({
		transform: 'perspective(400px) rotateY(0deg)',
		offset: 0
	}),
	style({
		transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(80deg)',
		offset: 0.4
	}),
	style({
		transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(100deg)',
		offset: 0.5
	}),
	style({
		transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) rotateY(180deg)',
		offset: 0.8
	}),
	style({
		transform: 'perspective(400px) scale3d(1, 1, 1) rotateY(180deg)',
		offset: 1
	})
]

export const flipFront = [
	style({
		transform: 'perspective(400px) rotateY(0deg)',
		offset: 0
	}),
	style({
		transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(-80deg)',
		offset: 0.4
	}),
	style({
		transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(-100deg)',
		offset: 0.5
	}),
	style({
		transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) rotateY(-180deg)',
		offset: 0.8
	}),
	style({
		transform: 'perspective(400px) scale3d(1, 1, 1) rotateY(-180deg)',
		offset: 1
	})
]

// TRIGGERS
export const flipTrigger = trigger('flip', [
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
	transition('front => back', [animate('1s 0s ease-out', keyframes(flipBack))]),
	transition('back => front', [animate('1s 0s ease-in', keyframes(flipFront))])
])
