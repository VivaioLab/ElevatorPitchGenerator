import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalversionComponent } from './finalversion.component';

describe('FinalversionComponent', () => {
  let component: FinalversionComponent;
  let fixture: ComponentFixture<FinalversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
