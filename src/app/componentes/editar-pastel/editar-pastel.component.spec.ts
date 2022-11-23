import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPastelComponent } from './editar-pastel.component';

describe('EditarPastelComponent', () => {
  let component: EditarPastelComponent;
  let fixture: ComponentFixture<EditarPastelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPastelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPastelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
