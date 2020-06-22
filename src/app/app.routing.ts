import { Routes } from '@angular/router'

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./advanced/advanced.module').then( m => m.AdvancedModule)
  },
  {
    path: 'advanced',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
