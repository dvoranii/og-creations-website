import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPost4Component } from './blog-post4.component';

describe('BlogPost4Component', () => {
  let component: BlogPost4Component;
  let fixture: ComponentFixture<BlogPost4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPost4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPost4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
