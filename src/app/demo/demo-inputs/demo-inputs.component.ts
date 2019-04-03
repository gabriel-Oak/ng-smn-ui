import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { UiToolbarService } from '../../../../projects/smn-ui/src/lib/smn-ui.module';
import { UiElement } from '../../../../projects/smn-ui/src/lib/utils/providers/element.provider';

@Component({
    selector: 'demo-inputs',
    templateUrl: './demo-inputs.component.html',
    styleUrls: ['./demo-inputs.component.scss']
})
export class DemoInputsComponent implements OnInit {
    list: string[];
    // @ViewChild('test') test;

    constructor(private titleService: Title, private toolbarService: UiToolbarService) {
        this.list = ['São Paulo', 'Ohio', 'New York'];
    }

    ngOnInit() {
        this.titleService.setTitle('Input - SMN UI Demos');
        this.toolbarService.set('Input');

        // setTimeout(() => {
        //     UiElement.focus(this.test.nativeElement);
        // }, 2000);
    }

}
