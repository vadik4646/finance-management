import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'

@Injectable()
export class ExpensesService {

  private expensesStore = [
    {
      kek: '4eburek'
    }
  ]

  constructor(
    private http: HttpClient,
  ) {
    console.log('constructor')
    window.addEventListener('online', event => {
      console.log('event registered')
      if (this.expensesStore.length) {
        this.post(this.expensesStore)
          .subscribe(data => {
            if (data) {
              this.expensesStore.length = 0
            }
          })
      }
    })
  }

  get() {
    let headers = new HttpHeaders()
    headers.append('X-AUTH-TOKEN', 'dev')
    headers.append('Content-Type', 'application/json')
    return this.http.get(
      'http://ec2-35-177-195-76.eu-west-2.compute.amazonaws.com/api/expense',
      {
        headers,
      }
    )
      .subscribe(data => {
        console.log('Http success', data)
      }, err => {
        console.log(err)
        if (!navigator.onLine) {
          console.log('Offline, go get from cache')
        } else {
          console.log('Unknown http error')
        }
      })
  }

  post(expenses) {
    console.log('writing expenses')
    return Observable.from([true])
    // return this.http.post('/expenses/create', expenses)
  }

}
