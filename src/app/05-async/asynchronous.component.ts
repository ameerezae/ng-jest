import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asynchronous',
  templateUrl: './asynchronous.component.html',
  styleUrls: ['./asynchronous.component.css']
})
export class AsynchronousComponent implements OnInit {

  title: string = 'test';

  constructor() { }

  ngOnInit(): void {
    this.title = 'majid';

    // setTimeout(() => {
    //   this.title = 'amir';
    // }, 1000)
  }

}
