import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hello } from './hello';
import { HelloService } from "../services/hello.service";

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
