import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomComponent } from './dom.component';

describe('DomComponent', () => {
  let component: DomComponent;
  let fixture: ComponentFixture<DomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    const compiledDom: HTMLElement = fixture.nativeElement;
    expect(compiledDom.querySelector('span.name-style')?.textContent).toBe('majid')
  });
});
