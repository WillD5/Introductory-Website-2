import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnexistantComponent } from './unexistant.component';

describe('UnexistantComponent', () => {
  let component: UnexistantComponent;
  let fixture: ComponentFixture<UnexistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnexistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnexistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
