import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAdmisionComponent } from './info-admision.component';

describe('InfoAdmisionComponent', () => {
  let component: InfoAdmisionComponent;
  let fixture: ComponentFixture<InfoAdmisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAdmisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAdmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
