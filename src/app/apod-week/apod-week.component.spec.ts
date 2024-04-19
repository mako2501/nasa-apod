import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodWeekComponent } from './apod-week.component';

describe('ApodWeekComponent', () => {
  let component: ApodWeekComponent;
  let fixture: ComponentFixture<ApodWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApodWeekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApodWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
