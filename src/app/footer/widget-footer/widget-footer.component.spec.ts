import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFooterComponent } from './widget-footer.component';

describe('WidgetFooterComponent', () => {
  let component: WidgetFooterComponent;
  let fixture: ComponentFixture<WidgetFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
