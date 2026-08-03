import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarTableViewComponent } from './star-table-view-component';

describe('StarTableViewComponent', () => {
  let component: StarTableViewComponent;
  let fixture: ComponentFixture<StarTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarTableViewComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(StarTableViewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
