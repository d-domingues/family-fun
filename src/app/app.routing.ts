import { Routes } from '@angular/router'

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'advanced-page',
    loadChildren: () => import('./advanced/advanced.module').then( m => m.AdvancedModule)
  }
];
