import { Injectable } from '@angular/core'
import { ApiClient } from 'app/core/services/api/apiClient'

@Injectable()
export class CategoryService {
  constructor(private apiClient: ApiClient) {}

  get() {
    return this.apiClient.get('category')
  }

  delete(id) {
    return this.apiClient.post('category/delete', { id })
  }

  edit(id, name, icon) {
    let category = { name, icon }

    return this.apiClient.post('category/edit/' + id, category)
  }

  create(name, icon) {
    let category = { name, icon }

    return this.apiClient.post('category/create', category)
  }
}
