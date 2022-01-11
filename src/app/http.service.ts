import { Injectable } from '@angular/core';
import {HttpResponse} from "./HttpResponse";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public static readonly RESPONSE_SUCCESS_CODE = "SUCCESS";

  private url : string = "http://localhost:8080";
  private http : HttpClient;

  constructor(private h : HttpClient) {
    this.http = h;
  }

  // data is null if api call returns no data!!!!
  public get<T>(endpoint : string, args : Map<string, string>, implementation : (data : T) => void) {
    endpoint = this.getEndpointWithArguments(endpoint, args);

    this.http.get<HttpResponse<T>>(this.url + endpoint).subscribe((response) => {
      HttpService.callImplementation<T>(response, implementation);
    });
  }

  public post<T>(endpoint : string, body : T, implementation : (data : T) => void) {
    this.http.post<HttpResponse<T>>(this.url + endpoint, body).subscribe((response) => {
      HttpService.callImplementation<T>(response, implementation);
    });
  }

  public put<T>(endpoint : string, body : T, implementation : (data : T) => void) {
    this.http.put<HttpResponse<T>>(this.url + endpoint, body).subscribe((response) => {
      HttpService.callImplementation<T>(response, implementation);
    });
  }

  public delete<T>(endpoint : string, body : T, implementation : (data : T) => void) {
    this.http.delete<HttpResponse<T>>(this.url + endpoint, {body: body}).subscribe((response) => {
      HttpService.callImplementation<T>(response, implementation);
    });
  }

  public getEndpointWithArguments(endpoint : string, args : Map<string, string>) : string {
    if (args.size !== 0) {
      endpoint += "?";
      args.forEach((value: string, key: string) => {
        endpoint += key + "=" + value + "&";
      });
      endpoint = endpoint.substr(0, endpoint.length - 1);
    }
    return endpoint;
  }

  private static callImplementation<T>(response : HttpResponse<T>, implementation : (data : T) => void | null) : void {
    // if error
    if (response.response !== HttpService.RESPONSE_SUCCESS_CODE) {
      HttpService.onError(response.error);
    }
    implementation(response.data);
  }

  private static onError(message : string) {
    console.log(message);
  }
}
