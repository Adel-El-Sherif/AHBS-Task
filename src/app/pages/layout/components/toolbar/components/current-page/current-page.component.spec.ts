import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPageComponent } from './current-page.component';

describe('CurrentPageComponent', () => {
  let component: CurrentPageComponent;
  let fixture: ComponentFixture<CurrentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
