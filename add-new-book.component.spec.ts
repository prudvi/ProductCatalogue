import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBookComponent } from './add-new-book.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

import { of } from 'rxjs';
import { Store } from '@ngrx/store';
class StoreMock { 
  // How we did it before
  select =  jasmine.createSpy().and.returnValue(of("")); 
  dispatch = jasmine.createSpy();
}

describe('AddNewBookComponent', () => {
  let component: AddNewBookComponent;
  let fixture: ComponentFixture<AddNewBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ],
      declarations: [ AddNewBookComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: Store,
          useClass: StoreMock,
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
