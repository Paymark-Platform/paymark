import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AppShellService {

    public isSideNavCollapse = false;
    public isSidePanelOpen = false;
    public rtlActived = false;
    private isSideNavCollapseActived = new BehaviorSubject<boolean>(this.isSideNavCollapse);
    private isSidePanelOpenActived = new BehaviorSubject<boolean>(this.isSidePanelOpen);
    public isSideNavCollapseChanges: Observable<boolean> = this.isSideNavCollapseActived.asObservable();
    public isSidePanelOpenChanges: Observable<boolean> = this.isSidePanelOpenActived.asObservable();

    public toggleSideNavCollapse(isCollapse: boolean) {
        this.isSideNavCollapseActived.next(isCollapse);
    }

    public toggleSidePanelOpen(isOpen: boolean) {
        this.isSidePanelOpenActived.next(isOpen);
    }
}
