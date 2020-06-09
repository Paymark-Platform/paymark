import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ig-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    console.log('Pages Loaded');
  }

}
