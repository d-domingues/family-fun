import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'

import { FigureModule } from '../components/figure/figure.module'
import { MatchPairsPage } from './match-pairs.page'

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FigureModule,
		RouterModule.forChild([{ path: '', component: MatchPairsPage }])
	],
	declarations: [MatchPairsPage]
})
export class MatchPairsPageModule {}
