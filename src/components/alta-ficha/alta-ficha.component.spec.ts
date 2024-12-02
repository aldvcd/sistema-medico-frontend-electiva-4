import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaFichaComponent } from './alta-ficha.component';

describe('AltaFichaComponent', () => {
  let component: AltaFichaComponent;
  let fixture: ComponentFixture<AltaFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaFichaComponent]
    });
    fixture = TestBed.createComponent(AltaFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
