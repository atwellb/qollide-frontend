import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ScreenComponent } from './screen.component';

describe('ScreenComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ScreenComponent
      ],
    }).compileComponents();
  }));

  it('should create screen', async(() => {
    const fixture = TestBed.createComponent(ScreenComponent);
    const screenComponent = fixture.debugElement.componentInstance;
    expect(screenComponent).toBeTruthy();
  }));
});
