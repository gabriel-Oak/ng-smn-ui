import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ui-demo-time-pickers',
    templateUrl: './demo-time-pickers.component.html',
    styleUrls: ['./demo-time-pickers.component.scss']
})
export class DemoTimePickersComponent implements OnInit {

    minTime: string;
    constructor() {
    }

    ngOnInit() {
        this.minTime = '09:00';
    }

}
