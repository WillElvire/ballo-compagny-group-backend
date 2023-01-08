import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { HttpRequestParams } from "src/app/core/interface";
import { HttpResponseType } from "src/app/core/enum";
import { HttpHeader } from "src/app/utils/cors/cors";
import { encrypt } from "src/app/utils/encrypt";

@Injectable({providedIn : 'root'})

export class Http {

    server: string = environment.HttpServers.BASE_API_DEV;

    constructor(private http : HttpClient) {}

    request(httpParams: HttpRequestParams) {

      if (!httpParams?.url) {
        throw new Error('URL is required');
      }

      if (!httpParams?.method) {
        httpParams.method = HttpResponseType.GET;
      }

      if (httpParams.isEnc) {

        const data = {
          AuthCode: encrypt(JSON.stringify(httpParams.body)),
        };

        if (httpParams.method == HttpResponseType.POST) {
          return new Promise((resolve, reject) => {
            this.http
              .post(`${this.server}${httpParams.url}`, data, {headers: HttpHeader})
              .pipe()
              .subscribe((response) => {return resolve(response)},
                (error) => {return reject(error)}
              );
          });
        }


        if (httpParams.method == HttpResponseType.GET) {
          return new Promise((resolve, reject) => {
            this.http
              .get(`${this.server}${httpParams.url}`, { headers: HttpHeader })
              .pipe()
              .subscribe((response) => {return resolve(response)}
              ,(error) => {return reject(error)});
          });
        }

      }

      if (!httpParams.isEnc) {
        if (httpParams.method == HttpResponseType.GET) {
          return new Promise((resolve, reject) => {
            this.http
              .get(`${this.server}${httpParams.url}`, { headers: HttpHeader })
              .pipe()
              .subscribe((response) => {return resolve(response)},
                (error) => {return reject(error)}
              );
          });
        }

        if (httpParams.method == HttpResponseType.POST) {
          return new Promise((resolve, reject) => {
            this.http
              .post(`${this.server}${httpParams.url}`, httpParams.body, {headers: HttpHeader})
              .pipe()
              .subscribe((response) => {return resolve(response)},
                (error) => {return reject(error)}
              );
          });
        }

        return new Promise((resolve, reject) => {
          this.http
            .post(`${this.server}${httpParams.url}`, httpParams.body, {headers: HttpHeader,})
            .pipe()
            .subscribe((response) => {return resolve(response)},
              (error) => {return reject(error)}
            );
        });
      }
    }



    getForTestServer(url : string) {
      return new Promise((resolve, reject) => {
        this.http
          .post(`${environment.HttpServers.BASE_API_DEV}${url}`, {}, {headers: HttpHeader})
          .pipe()
          .subscribe((response) => {return resolve(response)},
            (error) => {return reject(error)}
          );
      });
    }
}
