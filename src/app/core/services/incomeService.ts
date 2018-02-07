import { Injectable } from '@angular/core'
import { ApiClient } from 'app/core/services/api/apiClient'

@Injectable()
export class IncomeService {
  constructor(private apiClient: ApiClient) {}

  get(search = '') {
    return this.apiClient.get('income', { params: { search } })
  }

  delete(id) {
    return this.apiClient.post('income/delete', { id })
  }

  edit(id, value, category, tags, incomeAt, currency) {
    let expense = { value, category, tags, incomeAt, currency }

    return this.apiClient.post('income/edit/' + id, expense)
  }

  create(value, category, tags, incomeAt, currency) {
    let expense = { value, category, tags, incomeAt, currency }

    return this.apiClient.post('income/create', expense)
  }
}
