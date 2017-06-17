import { InjectionToken } from '@angular/core';

import { KitThemeService } from './theme';
import { KitComponentStyle } from './component';


export const kitTheme = new InjectionToken<KitThemeService>('kitTheme');
// buttons
export const kitComponentButton = new InjectionToken<KitComponentStyle>('kitComponentButton');
// forms
export const kitComponentAutoComplete = new InjectionToken<KitComponentStyle>('kitComponentAutoComplete');
export const kitComponentDatePicker = new InjectionToken<KitComponentStyle>('kitComponentDatePicker');
export const kitComponentFormError = new InjectionToken<KitComponentStyle>('kitComponentFormError');
export const kitComponentFormGroup = new InjectionToken<KitComponentStyle>('kitComponentFormGroup');
export const kitComponentFormLabel = new InjectionToken<KitComponentStyle>('kitComponentFormLabel');
export const kitComponentInput = new InjectionToken<KitComponentStyle>('kitComponentInput');
export const kitComponentMathInput = new InjectionToken<KitComponentStyle>('kitComponentMathInput');
export const kitComponentSelect = new InjectionToken<KitComponentStyle>('kitComponentSelect');