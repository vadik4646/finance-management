import { Injectable } from '@angular/core'
import { ApiClient } from 'app/core/services/api/apiClient'

@Injectable()
export class AuthenticationService {

  constructor(private apiClient: ApiClient) {}

  login(email: string, password: string) {
    return this.apiClient.post('login', { email, password })
  }

  register(email: string, password: string) {
    return this.apiClient.post('register', { email, password })
  }

  logout() {
    return this.apiClient.get('logout')
  }

}
