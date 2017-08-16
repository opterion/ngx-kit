import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultModalStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  modal(): StyleDef {
    return {
      background: '#ffffff',
      borderRadius: '4px',
      boxShadow: '0 10px 70px rgba(0, 0, 0, .4)',
      color: '#444444',
      zIndex: 99999,
    };
  }
}
