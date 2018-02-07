import { Injectable } from '@angular/core'
import { ApiClient } from 'app/core/services/api/apiClient'

@Injectable()
export class CustomizationService {
  constructor(private apiClient: ApiClient) {}

  get() {
    return this.apiClient.get('customization')
  }

  set(name, value) {
    let customization = { name, value }

    return this.apiClient.post('customization/set', customization)
  }
}
