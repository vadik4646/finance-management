import { Injectable } from '@angular/core'
import { ApiClient } from 'app/core/services/api/apiClient'
import { LogType } from '../utils'

@Injectable()
export class LogService {
  constructor(private apiClient: ApiClient) {}

  append(message, type = LogType.WARNING, params = []) {
    let log = { message, type, params }

    return this.apiClient.post('tag', log)
  }
}
