import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipdashboardlistComponent } from './sipdashboardlist.component';

describe('SipdashboardlistComponent', () => {
  let component: SipdashboardlistComponent;
  let fixture: ComponentFixture<SipdashboardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SipdashboardlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SipdashboardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
