import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePeliComponent } from './detalle-peli.component';

describe('DetallePeliComponent', () => {
  let component: DetallePeliComponent;
  let fixture: ComponentFixture<DetallePeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
