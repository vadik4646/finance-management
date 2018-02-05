import { HttpErrorResponse } from '@angular/common/http'

export class ApiResponse {
  private _data
  private _validationErrors
  private _message

  constructor(response) {
    if (response instanceof HttpErrorResponse) {
      this.fill(response.error)
    } else {
      this.fill(response)
    }
  }

  get data() {
    return this._data
  }

  get validationErrors() {
    return this._validationErrors
  }

  get message() {
    return this._message
  }

  private fill(raw) {
    this._data = 'data' in raw ? raw.data : null
    this._validationErrors = 'validationErrors' in raw ? raw.validationErrors : null
    this._message = 'message' in raw ? raw.message : null
  }
}
