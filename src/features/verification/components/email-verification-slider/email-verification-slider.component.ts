import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-email-verification-slider',
    templateUrl: './email-verification-slider.component.html',
    styleUrls: ['./email-verification-slider.component.scss']
})
export class EmailVerificationSliderComponent implements OnInit {

    public scaneIndex = 0;
    public imageList = [
        {
            index: 0,
            src: 'slider-1.jpg',
            alt: 'slider 1'
        },
        {
            index: 1,
            src: 'slider-2.jpg',
            alt: 'slider 2'
        },
        {
            index: 2,
            src: 'slider-3.jpg',
            alt: 'slider 3'
        }
    ]

    public intervalId?: any;

    constructor() { }

    ngOnInit(): void {
        this.interval();
    }

    public onClickPaginatorCircle(index: number) {
        this.scaneIndex = index;
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.interval();
        }
    }

    public interval() {
        let _this = this;
        this.intervalId = setInterval(function () {
            _this.scaneIndex <= _this.imageList.length - 2 ? _this.scaneIndex += 1 : _this.scaneIndex = 0;
        }, 5000);//
    }
}
