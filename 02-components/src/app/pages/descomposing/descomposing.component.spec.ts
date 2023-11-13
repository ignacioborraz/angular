import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescomposingComponent } from './descomposing.component';

describe('DescomposingComponent', () => {
  let component: DescomposingComponent;
  let fixture: ComponentFixture<DescomposingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescomposingComponent]
    });
    fixture = TestBed.createComponent(DescomposingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
