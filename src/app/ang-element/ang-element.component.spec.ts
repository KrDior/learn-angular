import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngElementComponent } from './ang-element.component';

describe('AngElementComponent', () => {
  let component: AngElementComponent;
  let fixture: ComponentFixture<AngElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
