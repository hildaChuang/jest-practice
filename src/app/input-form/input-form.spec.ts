import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputForm } from './input-form';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { HarnessLoader } from "@angular/cdk/harness-environment";
import { TestbedHarnessEnvironment } from "@angular/cdk/testing/testbed";
import { MatInputHarness } from "@angular/material/input/testing";
import { MatButtonHarness } from "@angular/material/button/testing";

describe('InputForm', () => {
  let fixture: ComponentFixture<InputForm>;
  let component: InputForm;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InputForm,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputForm);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set input value and submit', async () => {
    const input = await loader.getHarness(MatInputHarness);
    const button = await loader.getHarness(MatButtonHarness);

    await input.setValue('Hilda');
    await button.click();

    expect(component.submitValue()).toBe('Hilda');
  });
});
