import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectDetailsComponent } from './prodect-details.component';

describe('ProdectDetailsComponent', () => {
  let component: ProdectDetailsComponent;
  let fixture: ComponentFixture<ProdectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
