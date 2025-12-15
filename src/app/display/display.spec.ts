import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display } from './display';

describe('Display', () => {
  let component: Display;
  let fixture: ComponentFixture<Display>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Display]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Display);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render input title', () => {
    // 發生順序實際是這樣：
    // TestBed.createComponent() → Angular 已經跑過一次 change detection
    // 此時 @Input() title 的值是 undefined
    // 你在 同一個測試生命週期中 才設定：component.title = 'Hello Input';
    // 再呼叫 fixture.detectChanges()
    // Angular 就會說：
    // 你剛剛不是跟我說 title 是 undefined 嗎？為什麼現在變成 Hello Input？ 這不符合我的檢查規則。
    component.title = 'Hello Input';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Hello Input');
  });
});
