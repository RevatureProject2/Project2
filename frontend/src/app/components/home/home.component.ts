import { Component, OnInit } from '@angular/core';
import { BatchResult } from '../batch-result';
import { TestService } from '../services/test-service.service';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [
        `a { color: #eee; }`,
        `a:hover { color: #aaa; }`,
    ],
})
export class HomeComponent implements OnInit {

    private testResults: BatchResult;
    loading = false;
    webSocketURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://angular.io/');

    constructor(
        private httpService: HttpService,
        private router: Router,
        private testService: TestService,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit() {}

    /**
     * Hits the server for test result
     * Upon receipt, navigates to test route
     */
    onLoad() {
        this.loading = true;
        this.httpService.getTestData('/run').subscribe(
            (response: BatchResult) => {
                this.testResults = response;
                this.loading = false;
                this.router.navigate(['/tests']);
            },
            (error) => console.log(error)
        );
    }

    /**
     * Transfers test results to Test Service object when component is destroyed
     */
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnDestroy() {
        this.testService.batchResults = this.testResults;
    }

}
