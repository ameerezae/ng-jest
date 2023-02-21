import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronousComponent } from './asynchronous.component';

describe('AsynchronousComponent', () => {
  let component: AsynchronousComponent;
  let fixture: ComponentFixture<AsynchronousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynchronousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsynchronousComponent);
    component = fixture.componentInstance;
    // jest.useFakeTimers();
    // jest.spyOn(global, 'setTimeout')
  });

  it('should test async title', () => {
    fixture.detectChanges();
    expect(component.title).toBe('majid');
    // jest.advanceTimersByTime(1000);
    // fixture.detectChanges()
    // expect(component.title).toBe('amir');
  });
});
