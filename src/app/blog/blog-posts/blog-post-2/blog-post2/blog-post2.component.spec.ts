import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPost2Component } from './blog-post2.component';

describe('BlogPost2Component', () => {
  let component: BlogPost2Component;
  let fixture: ComponentFixture<BlogPost2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPost2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPost2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
