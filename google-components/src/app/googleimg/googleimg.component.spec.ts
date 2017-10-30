import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleimgComponent } from './googleimg.component';

describe('GoogleimgComponent', () => {
  let component: GoogleimgComponent;
  let fixture: ComponentFixture<GoogleimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
