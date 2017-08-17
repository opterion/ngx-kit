import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  HostListener,
  Inject,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StylerComponent } from '@ngx-kit/styler';
import { Subject } from 'rxjs/Subject';
import { KitCoreService } from '../core/kit-core.service';
import { KitComponentStyle } from '../core/meta/component';
import { KitControl } from '../core/meta/control';
import { kitComponentRadio } from '../core/meta/tokens';

export const KIT_RADIO_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitRadioComponent),
  multi: true,
};

@Component({
  selector: 'kit-radio,[kitRadio]',
  template: `
    <span styler="radio">
        <input [id]="id"
               [value]="value"
               [ngModel]="value === state ? value : null"
               [attr.accesskey]="accesskey"
               [attr.autofocus]="autofocus"
               [attr.tabindex]="tabindex"
               (ngModelChange)="updateValue($event)"
               (blur)="onBlur($event)"
               (focus)="onFocus($event)"
               type="radio"
               styler="input">
        <span [styler]="['view', {checked: value === state, hover: hover}]"></span>
      </span>
    <label [attr.for]="id" styler="label">
      <ng-content></ng-content>
    </label>
  `,
  providers: [KIT_RADIO_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ],
})
export class KitRadioComponent implements ControlValueAccessor, KitControl<any> {
  @Input() accesskey: string;

  @Input() autofocus: boolean;

  @Output() blur = new EventEmitter<FocusEvent>();

  @Output() focus = new EventEmitter<FocusEvent>();

  hover = false;

  id: string;

  @Input() kitRadio: any;

  state: any;

  @Input() tabindex: number;

  @Input() value: any;

  private changes$ = new Subject<number>();

  // @todo do not change if disabled
  private isDisabled = false;

  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitComponentRadio) private style: KitComponentStyle,
              private core: KitCoreService,
              private cdr: ChangeDetectorRef) {
    this.styler.classPrefix = 'kit-radio';
    this.styler.register(this.style);
    this.id = this.core.uuid();
  }

  @HostListener('mouseenter')
  mouseenter() {
    this.hover = true;
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.hover = false;
  }

  onBlur(event: FocusEvent) {
    this.blur.next(event);
    this.touches$.next(true);
  }

  onFocus(event: FocusEvent) {
    this.focus.next(event);
  }

  registerOnChange(fn: any) {
    this.changes$.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  updateValue(value: any) {
    this.writeValue(value);
    this.changes$.next(this.state);
    this.touches$.next(true);
  }

  writeValue(value: any) {
    this.state = value;
    this.cdr.markForCheck();
  }
}
