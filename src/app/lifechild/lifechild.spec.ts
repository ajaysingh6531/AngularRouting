import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifechild } from './lifechild';

describe('Lifechild', () => {
  let component: Lifechild;
  let fixture: ComponentFixture<Lifechild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lifechild],
    }).compileComponents();

    fixture = TestBed.createComponent(Lifechild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
