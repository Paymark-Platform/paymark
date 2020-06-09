import { Component, OnInit } from '@angular/core';
import { AppShellService } from './app-shell.service';

export type HeaderType = 'header-default' | 'header-primary' | 'header-info' | 'header-success' | 'header-danger' | 'header-dark';
export type SideNavType = 'sidenav-default' | 'side-nav-dark';

@Component({
  selector: 'ig-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

  public headerThemes = ['header-default', 'header-primary', 'header-info', 'header-success', 'header-danger', 'header-dark'];
  public sidenavThemes = ['sidenav-default', 'side-nav-dark'];
  public headerSelected: HeaderType;
  public sidenavSelected: SideNavType;
  public isCollapse: boolean;
  public rtlActived = false;

  public themeConfigOpen = false;

  constructor(private tplSvc: AppShellService) { }

  public ngOnInit() {
    this.tplSvc.isSideNavCollapseChanges.subscribe(isCollapse => this.isCollapse = isCollapse);
  }

  public changeHeader(headerTheme: HeaderType) {
    this.headerSelected = headerTheme;
  }

  public changeSidenav(sidenavTheme: SideNavType) {
    this.sidenavSelected = sidenavTheme;
  }

  public toggleThemeConfig() {
    this.themeConfigOpen = !this.themeConfigOpen;
  }

}
