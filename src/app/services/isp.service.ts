import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) { }

    // get the list of internet service provider
    getInternetServiceData() {
        return this.http.get(environment['API_ENDPOINT'] + '/service');
    }

}
