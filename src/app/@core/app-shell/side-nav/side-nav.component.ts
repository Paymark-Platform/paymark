import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AppShellService } from './../app-shell.service';

@Component({
    selector: 'ig-side-nav',
    templateUrl: './side-nav.component.html'
})
export class SideNavComponent implements OnInit {

    public isCollapse: boolean;

    constructor(private appShellService: AppShellService, private router: Router) {
        router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                if (window.innerWidth < 992) {
                    this.appShellService.toggleSideNavCollapse(false);
                }
            }
        });
    }

    public ngOnInit() {
        this.appShellService.isSideNavCollapseChanges.subscribe({
            next: (isCollapse) => this.isCollapse = isCollapse
        });
    }

    public toggleSideNavCollapse() {
        this.isCollapse = !this.isCollapse;
        this.appShellService.toggleSideNavCollapse(this.isCollapse);
    }
}
