import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './body.component';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Welcome to Product Catalog'`, () => {
    const fixture = TestBed.createComponent(BodyComponent);
    const body = fixture.debugElement.componentInstance;
    expect(body.title).toEqual('Welcome to Product Catalog');
  });

  it(`should have 3 route elements`, () => {
    const fixture = TestBed.createComponent(BodyComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
      
    expect(compiled.querySelectorAll('.label').length).toEqual(3);
  });

  it(`should have 3 route elements`, () => {
    const fixture = TestBed.createComponent(BodyComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
       
    expect(compiled.querySelectorAll('.label').length).toEqual(3);
  });

  it(`should have route Books`, () => {
    const fixture = TestBed.createComponent(BodyComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.label')[0].textContent).toEqual("Books");
  });

  it(`should have route Movies`, () => {
    const fixture = TestBed.createComponent(BodyComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    
    expect(compiled.querySelectorAll('.label')[1].textContent).toEqual("Movies");
  });

  it(`should have route Sports`, () => {
    const fixture = TestBed.createComponent(BodyComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.label')[2].textContent).toEqual("Sports");
  });
});
