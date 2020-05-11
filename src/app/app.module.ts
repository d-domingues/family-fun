import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PreloadAllModules, RouteReuseStrategy, RouterModule } from '@angular/router'
import { ServiceWorkerModule } from '@angular/service-worker'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'

import { environment } from '../environments/environment'
import { AppComponent } from './app.component'
import { appRoutes } from './app.routing'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		IonicModule.forRoot(),
		RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production
		})
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
