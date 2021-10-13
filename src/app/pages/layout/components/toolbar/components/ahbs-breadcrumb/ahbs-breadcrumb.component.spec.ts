import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhbsBreadcrumbComponent } from './ahbs-breadcrumb.component';

describe('AhbsBreadcrumbComponent', () => {
  let component: AhbsBreadcrumbComponent;
  let fixture: ComponentFixture<AhbsBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhbsBreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhbsBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
