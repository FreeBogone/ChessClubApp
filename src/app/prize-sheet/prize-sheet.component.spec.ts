import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeSheetComponent } from './prize-sheet.component';

describe('PrizeSheetComponent', () => {
  let component: PrizeSheetComponent;
  let fixture: ComponentFixture<PrizeSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizeSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrizeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
