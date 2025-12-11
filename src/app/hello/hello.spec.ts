import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hello } from './hello';
import { HelloService } from "../services/hello.service";
import { Component, Input } from "@angular/core";
import { By } from "@angular/platform-browser";
import { Child } from "../child/child";


describe('Hello', () => {
  let component: Hello;
  let fixture: ComponentFixture<Hello>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hello]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hello);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render hello text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Hello Angular');
  });

  it('should change message when button clicked 點按按鈕後，訊息變更', () => {
    // Arrange
    const html = fixture.nativeElement as HTMLElement;
    const button = html.querySelector('button') as HTMLButtonElement;

    // Act
    // 模擬點擊
    button.click();
    // Angular 執行變更偵測 → DOM 更新
    fixture.detectChanges();

    // Assert DOM
    expect(html.querySelector('h1')?.textContent).toBe('Clicked!');
    // Assert component state
    expect(component.message).toBe('Clicked!');
  });
});

describe('HelloComponent (Mock Service)', () => {
  let component: Hello;
  let fixture: ComponentFixture<Hello>;

  // 用 jest.fn() 建 mock
  const mockHelloService = {
    getName: jest.fn().mockReturnValue('Mock Hilda')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hello],
      providers: [
        {
          provide: HelloService,
          useValue: mockHelloService
        },
      ]
    }).compileComponents();
    // mockService = TestBed.inject(HelloService)

    fixture = TestBed.createComponent(Hello);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render mocked name', () => {
    const html = fixture.nativeElement as HTMLElement;

    // Assert DOM
    expect(html.querySelector('h1')?.textContent).toBe('Mock Hilda');
    // Assert component state
    expect(component.message).toBe('Mock Hilda');
  });

});


// 建立假的子元件
@Component({
  selector: 'app-child',
  template: '',
  standalone: true
})
class MockChildComponent {
  @Input() value!: string;
}

describe('HelloComponent (Mock child component)', () => {
  let fixture: ComponentFixture<Hello>;
  let component: Hello;

  // 用 jest.fn() 建 mock
  const mockHelloService = {
    getName: jest.fn().mockReturnValue('Mock Parent Msg')
  };

  beforeEach(async () => {
    // TestBed 是 Angular 提供的測試環境模擬工具，建立與設定測試模組 (Test Module)
    // TestBed 模擬 @NgModule 的行為，讓我們在測試中可以建立元件、注入服務與提供相依性
    // 可以說是 Angular 單元測試的「建立元件與依賴的工廠」
    await TestBed.configureTestingModule({
      imports: [Hello],
      providers: [
        {provide: HelloService, useValue: mockHelloService}
      ]
    })
      .overrideComponent(Hello, {
        remove: {
          imports: [Child]  // 移除真實的子元件依賴
        },
        add: {
          imports: [MockChildComponent] // 加入 mock 子元件
        }
      })
      .compileComponents();

    fixture = TestBed.createComponent(Hello);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should pass message into child component', () => {
    fixture.detectChanges();
    const mockChild = fixture.debugElement.query(
      By.directive(MockChildComponent)
    ).componentInstance as MockChildComponent;

    expect(mockChild).not.toBeNull();
    expect(mockChild.value).toBe('Mock Parent Msg');
  });

});
