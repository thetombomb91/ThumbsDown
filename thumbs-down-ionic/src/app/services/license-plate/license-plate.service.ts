import { Injectable } from '@angular/core';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Injectable()
export class LicensePlateService {

    constructor(private http: HTTP) {

    }

    createNewOrAddToExistingLicensePlate(): Promise<HTTPResponse> {
        console.log("I do something useful!");


        let body = {
            "licensePlate": "SUPER_CAR23432",
            "state": "CA"
        }
        this.http.setDataSerializer("json");

        return this.http.post('https://cfrtlaqb43.execute-api.us-east-1.amazonaws.com/prod', body, {})
    }

};