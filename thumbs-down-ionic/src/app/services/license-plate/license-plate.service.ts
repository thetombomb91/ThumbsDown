import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Injectable()
export class LicensePlateService {

    constructor(private http: HTTP) {

    }

    createNewOrAddToExistingLicensePlate() {
        console.log("I do something useful!");


        let body = {
            "licensePlate": "SUPER_CAR",
            "state": "CA"
        }
        this.http.setDataSerializer("json");

        this.http.post('https://cfrtlaqb43.execute-api.us-east-1.amazonaws.com/prod', body, {})
            .then(data => {
                console.log("GOOD but now really good")

                console.log(data.status);
                console.log(data.data); // data received by server

            })
            .catch(error => {
                console.log("NOT GOOD")
                console.log(error);
                console.log(error.error); // error message as string
            });
    }

};