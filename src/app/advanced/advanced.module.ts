import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'

import { AdvancedRoutingModule } from './advanced-routing.module'
import { AdvancedPage } from './advanced.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedRoutingModule
  ],
  declarations: [AdvancedPage]
})
export class AdvancedModule {}
