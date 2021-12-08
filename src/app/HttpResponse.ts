
export class HttpResponse<T> {
  response : string = "";
  errorMessage : string = "";
  data : T;

  constructor(data : T) {
    this.data = data;
  }
}
