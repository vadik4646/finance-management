import { HttpErrorResponse } from '@angular/common/http'

export class ApiResponse {
  private data
  private validationErrors
  private message

  constructor(response) {
    if (response instanceof HttpErrorResponse) {
      this.fill(response.error)
    } else {
      this.fill(response)
    }
  }

  getData() {
    return this.data
  }

  getValidationErrors() {
    return this.validationErrors
  }

  getMessage() {
    return this.message
  }

  private fill(raw) {
    this.data = 'data' in raw ? raw.data : null
    this.validationErrors = 'validationErrors' in raw ? raw.validationErrors : null
    this.message = 'message' in raw ? raw.message : null
  }
}
