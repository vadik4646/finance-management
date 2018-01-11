import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class DataStoreService {

  private offlineDataStore = []

  constructor(
    private http: HttpClient,
  ) { }

  get(uri, ) {

  }

}
