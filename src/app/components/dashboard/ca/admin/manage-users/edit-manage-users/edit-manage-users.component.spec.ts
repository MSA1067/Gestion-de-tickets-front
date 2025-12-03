import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditManageUsersComponent } from './edit-manage-users.component';

describe('EditManageUsersComponent', () => {
  let component: EditManageUsersComponent;
  let fixture: ComponentFixture<EditManageUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditManageUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
