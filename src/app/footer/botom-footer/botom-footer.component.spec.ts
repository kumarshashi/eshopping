import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotomFooterComponent } from './botom-footer.component';

describe('BotomFooterComponent', () => {
  let component: BotomFooterComponent;
  let fixture: ComponentFixture<BotomFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotomFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotomFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
