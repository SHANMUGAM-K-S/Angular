import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShanmugamComponent } from './shanmugam.component';

describe('ShanmugamComponent', () => {
  let component: ShanmugamComponent;
  let fixture: ComponentFixture<ShanmugamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShanmugamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShanmugamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
