import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFichasMedicasComponent } from './consulta-fichas-medicas.component';

describe('ConsultaFichasMedicasComponent', () => {
  let component: ConsultaFichasMedicasComponent;
  let fixture: ComponentFixture<ConsultaFichasMedicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaFichasMedicasComponent]
    });
    fixture = TestBed.createComponent(ConsultaFichasMedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
