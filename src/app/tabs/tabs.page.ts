import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TabsService } from '../tabs/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  hideTabs: boolean = false;

  constructor(private router: Router, private tabsService: TabsService) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.hideTabs = !(url.includes('/tabs/compras') || url.includes('/tabs/pesquisa') || url.includes('/tabs/carrinho'));
        this.tabsService.setHideTabs(this.hideTabs);
      }
    });
  }
}
