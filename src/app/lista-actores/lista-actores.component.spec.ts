import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaActoresComponent } from './lista-actores.component';

describe('ListaActoresComponent', () => {
  let component: ListaActoresComponent;
  let fixture: ComponentFixture<ListaActoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaActoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
