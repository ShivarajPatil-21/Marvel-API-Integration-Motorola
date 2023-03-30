import { Component, OnInit } from '@angular/core';

// declare var color: any;
declare var x: any;
declare function doFirst(x: any): any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'MARVELAPIIntegration';
    ngOnInit(): void {
      doFirst(x);
      // new x();
      // new color();

    }
    
    // title1 = 'app-js';
  }
