import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPastelComponent } from './agregar-pastel.component';

describe('AgregarPastelComponent', () => {
  let component: AgregarPastelComponent;
  let fixture: ComponentFixture<AgregarPastelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPastelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPastelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
