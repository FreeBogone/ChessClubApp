import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPlayersComponent } from './input-players.component';

describe('InputPlayersComponent', () => {
  let component: InputPlayersComponent;
  let fixture: ComponentFixture<InputPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPlayersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
