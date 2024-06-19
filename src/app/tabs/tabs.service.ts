import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  private hideTabs = false;

  constructor() {}

  setHideTabs(hide: boolean) {
    this.hideTabs = hide;
  }

  getHideTabs() {
    return this.hideTabs;
  }
}
