import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ig-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.scss']
})
export class StuffComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    console.log('Stuff Component Loaded');

  }

}
