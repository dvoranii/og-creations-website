import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPost3Component } from './blog-post3.component';

describe('BlogPost3Component', () => {
  let component: BlogPost3Component;
  let fixture: ComponentFixture<BlogPost3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPost3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPost3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
