import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnaComponent } from './igna.component';

describe('IgnaComponent', () => {
  let component: IgnaComponent;
  let fixture: ComponentFixture<IgnaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IgnaComponent]
    });
    fixture = TestBed.createComponent(IgnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
