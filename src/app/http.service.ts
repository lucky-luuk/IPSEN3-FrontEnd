import { Injectable } from '@angular/core';
import {HttpResponse} from "./HttpResponse";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url : string = "http://localhost:8080";
  private http : HttpClient;

  constructor(private h : HttpClient) {
    this.http = h;
  }

  get<T>(endpoint : string, implementation : (data : T) => void) {
    this.http.get<HttpResponse<T>>(this.url + endpoint).subscribe(
      (response : HttpResponse<T>) => {
        // if error
        if (response.response != "SUCCESS") {
          HttpService.onError(response.errorMessage);
        }
        else {
          implementation(response.data);
        }
    });
  }

  private static onError(message : string) {
    console.error(message);
    // maybe throw something
  }
}
