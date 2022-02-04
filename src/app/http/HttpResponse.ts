
export class HttpResponse<T> {
  response : string = "";
  error : string = "";
  data : T;

  constructor(data : T) {
    this.data = data;
  }
}
