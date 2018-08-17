import { Component, OnInit } from '@angular/core';
import { BatchResult } from '../batch-result';
import { TestService } from '../services/test-service.service';
import { HttpService } from '../services/http.service';
import { URIService } from '../services/uris.service';
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
        private sanitizer: DomSanitizer,
        private uri: URIService
    ) {}

    ngOnInit() {}

    /**
     * Hits the server for test result
     * Upon receipt, navigates to test route
     * Note that if served locally on NG Serve, it defaults to localhost
     */
    onLoad() {
        this.loading = true;
        let uri;
        if (window.location.href === this.uri.ANGULAR_DEFAULT) {
            uri = this.uri.URIs.runLocal;
        } else {
            uri = this.uri.URIs.run;
        }
        this.httpService.getTestData(uri).subscribe(
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