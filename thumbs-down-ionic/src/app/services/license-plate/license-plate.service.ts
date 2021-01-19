import { Injectable } from '@angular/core';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { HttpClient, HttpDownloadProgressEvent, HttpResponse } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { LicensePlate } from 'src/app/models/licensePlate';

@Injectable()
export class LicensePlateService {

    constructor(private http: HTTP) {

    }

    createNewOrAddToExistingLicensePlate(licensePlate: LicensePlate): Promise<HTTPResponse> {
        console.log("I do something useful!", licensePlate);

        let body = {
            "licensePlate": licensePlate.licensePlate,
            "state": licensePlate.state
        }

        console.log("Body in service", body);

        // let body = {
        //     "licensePlate": "SUPER_CAR23432",
        //     "state": "CA"
        // }
        this.http.setDataSerializer("json");

        return this.http.post('https://cfrtlaqb43.execute-api.us-east-1.amazonaws.com/prod', body, {})
    }

    lookupLicensePlate(): Promise<HTTPResponse> {
        return this.http.post('URL HERE', {}, {})
    }

};