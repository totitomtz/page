import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuentesDePoderComponent } from './fuentes-de-poder.component';

describe('FuentesDePoderComponent', () => {
  let component: FuentesDePoderComponent;
  let fixture: ComponentFixture<FuentesDePoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuentesDePoderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuentesDePoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
