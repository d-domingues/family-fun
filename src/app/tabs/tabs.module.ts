import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'

import { TabsPage } from './tabs.page'
import { tabsRoutes } from './tabs.routes'

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RouterModule.forChild(tabsRoutes)
	],
	declarations: [TabsPage]
})
export class TabsPageModule {}
