import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautiesComponent } from './beauties.component';

describe('BeautiesComponent', () => {
  let component: BeautiesComponent;
  let fixture: ComponentFixture<BeautiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
