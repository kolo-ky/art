import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardToCardComponent } from './card-to-card.component';

describe('CardToCardComponent', () => {
  let component: CardToCardComponent;
  let fixture: ComponentFixture<CardToCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardToCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardToCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
