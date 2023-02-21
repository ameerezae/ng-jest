import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import {FakeService} from "../03-services/fake.service";
import {of} from "rxjs";

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let fakeService: any;

  beforeEach(async () => {
    fakeService = {
      getDataV1: jest.fn(),
    }
    await TestBed.configureTestingModule({
      declarations: [ DataComponent ],
      providers: [{provide: FakeService, useValue: fakeService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
  });

  it('should set data property in DataComponent', () => {

    const expectedRes = {
      name: 'majid',
      age: 25
    }
    jest.spyOn(fakeService, 'getDataV1').mockReturnValue(of(expectedRes));
    fixture.detectChanges();
    expect(component.data.age).toBe(25)


  });
});
