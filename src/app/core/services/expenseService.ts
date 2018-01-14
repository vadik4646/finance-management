import { Injectable } from '@angular/core'
import { ApiClient } from 'app/core/services/api/apiClient'

@Injectable()
export class ExpenseService {
  constructor(private apiClient: ApiClient) {
  }

  get() {
    return this.apiClient.get('expense')
  }

  delete(id) {
    return this.apiClient.post('expense/delete', { id })
  }

  edit(id, value, category, tags, spentAt, currency) {
    let expense = { value, category, tags, spentAt, currency }

    return this.apiClient.post('expense/edit/' + id, expense)
  }

  create(value, category, tags, spentAt, currency) {
    let expense = { value, category, tags, spentAt, currency }

    return this.apiClient.post('expense/create', expense)
  }
}
