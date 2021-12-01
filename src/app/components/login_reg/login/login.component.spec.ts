import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { Component, DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ]
     
      
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should set submitted to true', () => {
  component.onSubmit();
  expect(component.reloadPage).toBeTruthy();
  });

});

// describe('HeaderService', () => {
//   beforeEach(() => TestBed.configureTestingModule({
//     imports: [ HttpClientTestingModule ],
//     providers: [UserService]
//   }));
// });
