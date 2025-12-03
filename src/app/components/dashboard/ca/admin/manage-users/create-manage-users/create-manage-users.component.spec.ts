import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateManageUsersComponent } from './create-manage-users.component';

describe('CreateManageUsersComponent', () => {
  let component: CreateManageUsersComponent;
  let fixture: ComponentFixture<CreateManageUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateManageUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
