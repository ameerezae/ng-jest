import { Component, OnInit } from '@angular/core';
import {FakeService} from "../03-services/fake.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data: { name: string, age: number} = {name: '', age: 0};

  constructor(private fakeService: FakeService) { }

  ngOnInit(): void {
    this.getServiceData();
  }

  getServiceData(): void {
    this.fakeService.getDataV1().subscribe(data => {
      this.data = data
    })
  }

}
