import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: []
})
export class HeaderComponent implements OnInit {
    private homeTitle = 'Revature Testing Suite';
    pageTitle = this.homeTitle;
    page = 'home';

    constructor() {}

    ngOnInit() {}

    /**
     * Switches between page or home to apply appropriate CSS
     * @param page string
     */
    switchPage(page: string) {
        switch (page) {
            case 'home':
                this.page = 'home';
                break;
            case 'tests':
                this.page = 'tests';
                break;
            case 'history':
                this.page = 'history';
        }
    }

}

enum Pages {
    HOME, TESTS
}
