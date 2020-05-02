import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { WhoIsPage } from './who-is.page'

const routes: Routes = [
  {
    path: '',
    component: WhoIsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhoIsPageRoutingModule {}
