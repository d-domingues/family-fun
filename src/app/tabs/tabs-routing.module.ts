import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { TabsPage } from './tabs.page'

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../gallery/gallery.module').then(m => m.GalleryModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../games/games.module').then(m => m.GamesPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../match-pairs/match-pairs.module').then(m => m.MatchPairsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
