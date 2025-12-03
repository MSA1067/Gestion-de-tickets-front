import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchManageUsersComponent } from './search-manage-users.component';

describe('SearchManageUsersComponent', () => {
  let component: SearchManageUsersComponent;
  let fixture: ComponentFixture<SearchManageUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchManageUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
