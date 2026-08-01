import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Life } from './life';

describe('Life', () => {
  let component: Life;
  let fixture: ComponentFixture<Life>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Life],
    }).compileComponents();

    fixture = TestBed.createComponent(Life);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
