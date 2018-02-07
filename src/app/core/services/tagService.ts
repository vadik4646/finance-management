import { Injectable } from '@angular/core'
import { ApiClient } from 'app/core/services/api/apiClient'

@Injectable()
export class TagService {
  constructor(private apiClient: ApiClient) {}

  get(search = '') {
    return this.apiClient.get('tag', { params: { search } })
  }
}
