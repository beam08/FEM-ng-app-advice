import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceGeneratorMainComponent } from './advice-generator-main.component';

describe('AdviceGeneratorMainComponent', () => {
  let component: AdviceGeneratorMainComponent;
  let fixture: ComponentFixture<AdviceGeneratorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviceGeneratorMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceGeneratorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
