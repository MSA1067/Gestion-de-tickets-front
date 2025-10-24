import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderMenuComponent } from './sider-menu.component';

describe('SiderMenuComponent', () => {
  let component: SiderMenuComponent;
  let fixture: ComponentFixture<SiderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiderMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
