import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFichaComponent } from './detalle-ficha.component';

describe('DetalleFichaComponent', () => {
  let component: DetalleFichaComponent;
  let fixture: ComponentFixture<DetalleFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleFichaComponent]
    });
    fixture = TestBed.createComponent(DetalleFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
