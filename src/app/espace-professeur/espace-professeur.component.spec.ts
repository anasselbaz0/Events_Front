import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceProfesseurComponent } from './espace-professeur.component';

describe('EspaceProfesseurComponent', () => {
  let component: EspaceProfesseurComponent;
  let fixture: ComponentFixture<EspaceProfesseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceProfesseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
