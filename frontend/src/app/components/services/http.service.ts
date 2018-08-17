import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {
    constructor(private http: Http) {}

    /**
     * Sends data of any type to server
     * @param data data to send to the server
     * @param url string url to hit
     * @returns Observable that listens for response
     */
    sendTestData(data: any, url: string): Observable<any> {
        return this.http.put(url, data);
    }

    /**
     * Fetches the test data from the server, using POST
     * cors enabled
     * mapped to parse response from json
     * @param url string url to hit
     * @returns Observable that listens for a response
     */
    getTestData(url: string): Observable<any> {
        const headers = new Headers({
            mode: 'cors'
        });
        return this.http.post(url, headers).pipe(map((response: Response) => {
            return response.json();
        }));
    }
}
