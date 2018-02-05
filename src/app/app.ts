import { Component, OnInit, ViewChild } from '@angular/core'
import { Router, NavigationStart } from '@angular/router'
import { filter } from 'rxjs/operators/filter'
import { MatDrawer } from '@angular/material'

// ----- ----- ----- -----

@Component({
  selector: 'fm-root',
  templateUrl: './app.html',
  styleUrls: [
    './app.styl',
  ],
})
export class AppComponent implements OnInit {

  @ViewChild('menuDrawer') menuDrawer: MatDrawer

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((routerEvent) => routerEvent instanceof NavigationStart)
      )
      .subscribe((routerEvent) => {
        this.menuDrawer.close()
      })
  }

}
