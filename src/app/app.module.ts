import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
	direction: 'horizontal',
	slidesPerView: 'auto',
	keyboard: true
};

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		SwiperModule
	],
	providers: [{
		provide: SWIPER_CONFIG,
		useValue: DEFAULT_SWIPER_CONFIG
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
