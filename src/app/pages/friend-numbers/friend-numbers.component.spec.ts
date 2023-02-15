import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendNumbersComponent } from './friend-numbers.component';

describe('FriendNumbersComponent', () => {
  let component: FriendNumbersComponent;
  let fixture: ComponentFixture<FriendNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
