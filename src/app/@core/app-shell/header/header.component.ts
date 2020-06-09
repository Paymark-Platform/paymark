import { Component, OnInit } from '@angular/core';
import { AppShellService } from './../app-shell.service';

@Component({
    selector: 'ig-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    public searchModel: string;
    public isCollapse: boolean;
    public isOpen: boolean;
    public searchActived = false;

    constructor(private appShellService: AppShellService) {
    }

    public ngOnInit(): void {
        this.appShellService.isSideNavCollapseChanges.subscribe(isCollapse => this.isCollapse = isCollapse);
        this.appShellService.isSidePanelOpenChanges.subscribe(isOpen => this.isOpen = isOpen);
    }

    public toggleSideNavCollapse() {
        this.isCollapse = !this.isCollapse;
        this.appShellService.toggleSideNavCollapse(this.isCollapse);
    }

    public toggleSidePanelOpen() {
        this.isOpen = !this.isOpen;
        this.appShellService.toggleSidePanelOpen(this.isOpen);
    }

    public toggleSearch() {
        this.searchActived = !this.searchActived;
        console.log(this.searchActived);
    }
}
