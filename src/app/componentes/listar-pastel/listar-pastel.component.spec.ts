import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPastelComponent } from './listar-pastel.component';

describe('ListarPastelComponent', () => {
  let component: ListarPastelComponent;
  let fixture: ComponentFixture<ListarPastelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPastelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPastelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
