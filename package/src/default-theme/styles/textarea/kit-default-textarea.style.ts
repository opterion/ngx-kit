import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultTextareaStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  textarea(): StyleDef {
    const params = this.theme.params;
    return {
      background: params.moduleTextarea.colors.base.background,
      border: [params.borders.width, 'solid', params.moduleTextarea.colors.base.border],
      borderRadius: params.borders.radius.s,
      color: params.moduleTextarea.colors.base.text,
      transition: 'background 0.2s',
      width: '100%',
      padding: [params.grid.v / 2, params.grid.h],
      $nest: {
        '&:hover': {
          background: params.moduleInput.colors.hover.background,
          borderColor: params.moduleInput.colors.hover.border,
          color: params.moduleInput.colors.hover.text,
          outline: 'none',
        },
        '&:focus': {
          background: params.moduleInput.colors.focus.background,
          borderColor: params.moduleInput.colors.focus.border,
          color: params.moduleInput.colors.focus.text,
          transition: '0.8s',
          outline: 'none',
        },
      },
    };
  }
}
