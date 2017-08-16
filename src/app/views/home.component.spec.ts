import { TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
    }).compileComponents();
  }));

  it('should create home', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const homeComponent = fixture.debugElement.componentInstance;
    expect(homeComponent).toBeTruthy();
  }));
});
