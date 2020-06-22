import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'

import { AdvancedPage, LeftNavDirective, StepOne, StepTwo, Wizard, WizardStep } from './advanced.page'

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		RouterModule.forChild([{ path: '', component: AdvancedPage }])
	],
	declarations: [
		AdvancedPage,
		Wizard,
		WizardStep,
		StepOne,
		StepTwo,
		LeftNavDirective
	]
})
export class AdvancedModule {}
