import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GabinetesComponent } from './gabinetes.component';

describe('GabinetesComponent', () => {
  let component: GabinetesComponent;
  let fixture: ComponentFixture<GabinetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GabinetesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GabinetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
