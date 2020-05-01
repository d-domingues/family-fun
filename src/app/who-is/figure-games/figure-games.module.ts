import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { FigureModule } from 'src/app/components/figure/figure.module'

import { FigureGamesPageRoutingModule } from './figure-games-routing.module'
import { FigureGamesPage } from './figure-games.page'

@NgModule({
	imports: [CommonModule, IonicModule, FigureGamesPageRoutingModule, FigureModule],
	declarations: [FigureGamesPage]
})
export class FigureGamesPageModule {}
