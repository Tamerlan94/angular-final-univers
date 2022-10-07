import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversItemComponent } from './univers-item.component';

describe('UniversItemComponent', () => {
  let component: UniversItemComponent;
  let fixture: ComponentFixture<UniversItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
