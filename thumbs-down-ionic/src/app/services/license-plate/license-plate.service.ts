import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LicensePlateService {

    constructor(private http: HTTP) {

    }

    someFunction() {
        console.log("I do something useful!");

        // this.http.get('https://dog.ceo/api/breeds/image/random').subscribe((response) => {
        //     console.log(response);
        // });


        this.http.get('https://dog.ceo/api/breeds/image/random', {}, {})
            .then(data => {
                console.log("GOOD but now really good")

                console.log(data.status);
                console.log(data.data); // data received by server

            })
            .catch(error => {
                console.log("NOT GOOD")
                console.log(error.status);
                console.log(error.error); // error message as string
            });
    }

};