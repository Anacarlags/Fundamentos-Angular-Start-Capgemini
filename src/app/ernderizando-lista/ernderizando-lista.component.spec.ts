import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErnderizandoListaComponent } from './ernderizando-lista.component';

describe('ErnderizandoListaComponent', () => {
  let component: ErnderizandoListaComponent;
  let fixture: ComponentFixture<ErnderizandoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErnderizandoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErnderizandoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
