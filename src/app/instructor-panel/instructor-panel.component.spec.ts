import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorPanelComponent } from './instructor-panel.component';

describe('InstructorPanelComponent', () => {
  let component: InstructorPanelComponent;
  let fixture: ComponentFixture<InstructorPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
