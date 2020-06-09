import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ig-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'igsts';
  public ngOnInit(): void {
    console.log('App Component Loaded');
  }

}
