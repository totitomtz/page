import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriasSsdHddComponent } from './memorias-ssd-hdd.component';

describe('MemoriasSsdHddComponent', () => {
  let component: MemoriasSsdHddComponent;
  let fixture: ComponentFixture<MemoriasSsdHddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoriasSsdHddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoriasSsdHddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
