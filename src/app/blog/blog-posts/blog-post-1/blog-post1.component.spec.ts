import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPost1Component } from './blog-post1.component';

describe('BlogPost1Component', () => {
  let component: BlogPost1Component;
  let fixture: ComponentFixture<BlogPost1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPost1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPost1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
