import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ApiResponse } from 'app/core/services/api/apiResponse'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ApiClient {
  private readonly API_HOST = 'http://ec2-35-177-195-76.eu-west-2.compute.amazonaws.com/'
  // private readonly API_HOST = 'http://localhost:8000/'
  private readonly API_PATH = 'api/'
  private readonly API_URL = this.API_HOST + this.API_PATH

  constructor(private http: HttpClient) {
  }

  get(url, options = {}): Observable<ApiResponse> {
    let headers = this.buildHeaders(options)

    return this.http.get(this.API_URL + url, { headers })
      .map(response => new ApiResponse(response))
      .catch(err => Observable.throw(new ApiResponse(err)))
  }

  post(url, body, options = {}): Observable<ApiResponse> {
    let headers = this.buildHeaders(options)

    return this.http.post(this.API_URL + url, body, { headers })
      .map(response => new ApiResponse(response))
      .catch(err => Observable.throw(new ApiResponse(err)))
  }

  private buildHeaders(options) {
    let headers = 'headers' in options ? options.headers : {}

    return new HttpHeaders(Object.assign({ 'X-AUTH-TOKEN': 'dev', 'content-type': 'application/json' }, headers))
  }
}
