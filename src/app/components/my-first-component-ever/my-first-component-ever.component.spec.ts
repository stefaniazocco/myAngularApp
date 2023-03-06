import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstComponentEverComponent } from './my-first-component-ever.component';

describe('MyFirstComponentEverComponent', () => {
  let component: MyFirstComponentEverComponent;
  let fixture: ComponentFixture<MyFirstComponentEverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstComponentEverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFirstComponentEverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
