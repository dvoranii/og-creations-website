import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPost5Component } from './blog-post5.component';

describe('BlogPost5Component', () => {
  let component: BlogPost5Component;
  let fixture: ComponentFixture<BlogPost5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPost5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPost5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
