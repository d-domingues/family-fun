import { Routes } from '@angular/router'

import { TabsPage } from './tabs.page'

export const tabsRoutes: Routes = [
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{
				path: 'gallery',
				loadChildren: () =>
					import('../gallery/gallery.module').then(m => m.GalleryModule)
			},
			{
				path: 'who-is',
				loadChildren: () => import('../who-is/who-is.module').then(m => m.WhoIsModule)
			},
			{
				path: 'match-pairs',
				loadChildren: () =>
					import('../match-pairs/match-pairs.module').then(m => m.MatchPairsModule)
			},
			{
				path: '',
				redirectTo: '/tabs/gallery',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '',
		redirectTo: '/tabs/gallery',
		pathMatch: 'full'
	}
]
