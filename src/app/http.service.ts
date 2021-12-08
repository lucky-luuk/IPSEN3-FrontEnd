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

  public get<T>(endpoint : string, args : Map<string, string>, implementation : (data : T) => void) {
    endpoint = HttpService.getEndpointWithArguments(endpoint, args);

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

  private static getEndpointWithArguments(endpoint : string, args : Map<string, string>) : string {
    if (args.size !== 0) endpoint += "?";
    args.forEach((value : string, key : string) => {
      endpoint += key + "=" + value + "&";
    });
    endpoint = endpoint.substr(0, endpoint.length - 1);
    return endpoint;
  }

  private static onError(message : string) {
    console.error(message);
    // maybe throw something
  }
}
