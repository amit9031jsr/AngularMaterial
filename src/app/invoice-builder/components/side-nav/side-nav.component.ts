import { Component, NgZone, OnInit } from '@angular/core';

const MAX_WIDTH_BREAKPOINT = 720;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = 
  matchMedia(`(max-width: ${MAX_WIDTH_BREAKPOINT}px)`)
  
  constructor(zone: NgZone) { 
    this.mediaMatcher.addEventListener('change', (mql) => {
      zone.run(() => mql)
    })
  }

  ngOnInit(): void {
  }

  isScreenSmall() {
    return this.mediaMatcher.matches;
  }

}
