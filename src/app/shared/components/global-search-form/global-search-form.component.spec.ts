import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSearchFormComponent } from './global-search-form.component';

describe('GlobalSearchFormComponent', () => {
  let component: GlobalSearchFormComponent;
  let fixture: ComponentFixture<GlobalSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
