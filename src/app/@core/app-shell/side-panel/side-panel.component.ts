import { Component, OnInit } from '@angular/core';
import { AppShellService } from './../app-shell.service';

@Component({
    selector: 'ig-side-panel',
    templateUrl: './side-panel.component.html'
})
export class SidePanelComponent implements OnInit {

    public isOpen: boolean;

    constructor(private appShellService: AppShellService) {
    }

    public ngOnInit(): void {
        this.appShellService.isSidePanelOpenChanges.subscribe((isOpen) => this.isOpen = isOpen);
    }

    public toggleSidePanelOpen() {
        this.isOpen = !this.isOpen;
        this.appShellService.toggleSidePanelOpen(this.isOpen);
    }
}
