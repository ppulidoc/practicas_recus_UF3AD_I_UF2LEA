import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerisisComponent } from './exerisis.component';

describe('ExerisisComponent', () => {
  let component: ExerisisComponent;
  let fixture: ComponentFixture<ExerisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerisisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
