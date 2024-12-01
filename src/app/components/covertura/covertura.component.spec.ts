import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverturaComponent } from './covertura.component';

describe('CoverturaComponent', () => {
  let component: CoverturaComponent;
  let fixture: ComponentFixture<CoverturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoverturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
