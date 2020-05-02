import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'

import { FigureModule } from '../components/figure/figure.module'
import { WhoIsPageRoutingModule } from './who-is-routing.module'
import { WhoIsPage } from './who-is.page'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    WhoIsPageRoutingModule,
    FigureModule
  ],
  declarations: [WhoIsPage]
})
export class WhoIsModule {}
