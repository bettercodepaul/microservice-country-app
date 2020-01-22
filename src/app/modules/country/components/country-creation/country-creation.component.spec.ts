import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCreationComponent } from './country-creation.component';

describe('CountryCreationComponent', () => {
  let component: CountryCreationComponent;
  let fixture: ComponentFixture<CountryCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
