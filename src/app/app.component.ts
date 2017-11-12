import { Component, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface, SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';

	public show: boolean = true;

	public slides = [
		'banner-slidder.jpg',
		'banner-slidder.jpg',
		'banner-slidder.jpg',
		'banner-slidder.jpg',
		'banner-slidder.jpg',
		'banner-slidder.jpg'
	];

	public type: string = 'component';

	public disabled: boolean = false;

	public config: SwiperConfigInterface = {
		keyboard: true,
		autoplay: {
			delay: 5000,
		},
		fadeEffect: {
			crossFade: true
		},
		mousewheel: true,
		scrollbar: false,
		navigation: true,
		pagination: true
	};

	public onIndexChange(index: number) {
		console.log('Swiper index: ', index);
	}

}
