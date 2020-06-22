import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations'
import { Component, ContentChildren, Directive, forwardRef, QueryList, TemplateRef } from '@angular/core'

import { Figure } from '../models/figure'
import { FigureService } from '../services/figure.service'

@Component({
	selector: 'app-advanced',
	templateUrl: './advanced.page.html',
	styleUrls: ['./advanced.page.scss'],
	animations: [
		trigger('listAnimation', [
			transition('* => *', [
				query(
					':enter',
					[
						style({ opacity: 0, transform: 'translateY(-100%)' }),
						stagger(
							-100,
							animate(
								1000,
								style({
									offset: 1,
									opacity: 1,
									transform: 'translateY(0%) rotateY(360deg)'
								})
							)
						)
					],
					{ optional: true }
				),
				query(':leave', animate(2000, style({ opacity: 0 })), { optional: true })
			])
		]),
		trigger('openClose', [
			state('false', style({ width: '*' })),
			state('true', style({ width: '600px' })),
			transition('false => true', animate(1000)),
			transition('true => false', animate(1000))
		])
	]
})
export class AdvancedPage {
	/* @HostBinding('@pageAnimations') animatePage = true */
	mve

	photos = this.figService.getShuffledPairs()
	constructor(private figService: FigureService) {}

	pushItem() {
		this.photos.push({ name: 'new item added' } as Figure)
	}
	removeItem(idx) {
		this.photos.splice(idx, 1)
	}

	popItem() {
		this.photos.pop()
	}

	print(i) {
		console.log(i)
	}
}

/* keyframes([
									style({
										offset: 0.1,
										opacity: 0.1,
										transform: 'translateY(-90%) rotateY(36deg)'
									}),
									style({
										offset: 0.2,
										opacity: 0.2,
										transform: 'translateY(-80%) rotateY(72deg)'
									}),
									style({
										offset: 0.3,
										opacity: 0.3,
										transform: 'translateY(-70%) rotateY(108deg)'
									}),
									style({
										offset: 0.4,
										opacity: 0.4,
										transform: 'translateY(-60%) rotateY(144deg)'
									}),
									style({
										offset: 0.5,
										opacity: 0.5,
										transform: 'translateY(-50%) rotateY(180deg)'
									}),
									style({
										offset: 0.6,
										opacity: 0.6,
										transform: 'translateY(-40%) rotateY(216deg)'
									}),
									style({
										offset: 0.7,
										opacity: 0.7,
										transform: 'translateY(-30%) rotateY(252deg)'
									}),
									style({
										offset: 0.8,
										opacity: 0.8,
										transform: 'translateY(-20%) rotateY(288deg)'
									}),
									style({
										offset: 0.9,
										opacity: 0.9,
										transform: 'translateY(-10%) rotateY(324deg)'
									}),
									style({
										offset: 1,
										opacity: 1,
										transform: 'translateY(0%) rotateY(360deg)'
									})
								]) */
//
//
//
//
//
//
//
//
//
//
//
//
//

// MARK DIRECTIVE
@Directive({ selector: '[wizardStep]' })
export class WizardStep {}

// BASE
export abstract class BaseComp {
	abstract print(): void
}

// FIRST
@Component({
	selector: 'step-one',
	template: '<div>FIRST</div>',
	providers: [{ provide: BaseComp, useExisting: forwardRef(() => StepOne) }]
})
export class StepOne extends BaseComp {
	print = () => console.log('test ----> 1')
}

// SECOND
@Component({
	selector: 'step-two',
	template: '<div>SECOND</div>',
	providers: [{ provide: BaseComp, useExisting: forwardRef(() => StepTwo) }]
})
export class StepTwo extends BaseComp {
	print = () => console.log('test ----> 2')
}

// PARENT
@Component({
	selector: 'wizard',
	template: '<ng-content></ng-content>'
})
export class Wizard {
	@ContentChildren(WizardStep, { read: BaseComp })
	steps: QueryList<BaseComp>

	ngAfterContentInit() {
		this.steps.changes.subscribe()
	}
}

/////////////////////////

@Directive({ selector: '[leftNav]' })
export class LeftNavDirective {
	constructor(private tmpl: TemplateRef<any>) {
		console.log(tmpl);
	}
}

@Component({
	selector: 'leftNav-comp',
	template: '<h1> NAV COMPONENT </h1>'
})
export class LeftNavComponent {}

@Component({
	selector: 'some-route',
	template: `
		<div *leftNav>
			<h1> SOME ROUTE </h1>
		</div>
	`
})
export class SomeRoute {}
