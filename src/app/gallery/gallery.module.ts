import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'

import { FigureComponent } from '../components/figure/figure.component'
import { FigureModule } from '../components/figure/figure.module'
import { GalleryRoutingModule } from './gallery-routing.module'
import { GalleryPage } from './gallery.page'

@NgModule({
	imports: [CommonModule, IonicModule, FigureModule, GalleryRoutingModule],
	exports: [FigureComponent],
	declarations: [GalleryPage]
})
export class GalleryModule {}
