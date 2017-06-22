import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { RegistrationDef, StylerColorService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultRadioStyle implements KitComponentStyle {

  constructor(private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  getStyles(): RegistrationDef {
    const params = this.theme.params;
    return {
      host: {
      },
      radio: {
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        outline: 'none',
        display: 'inline-block',
        lineHeight: 1,
        position: 'relative',
        verticalAlign: 'text-bottom',
      },
      input: {
        position: 'absolute',
        left: 0,
        zIndex: 1,
        cursor: 'pointer',
        opacity: 0,
        filter: 'alpha(opacity=0)',
        top: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
      },
      view: {
        position: 'relative',
        top: 0,
        left: 0,
        display: 'block',
        width: 14,
        height: 14,
        border: [1, 'solid', params.colors.border.color],
        borderRadius: '50%',
        transition: params.transitions.default,
        $states: {
          checked: {
            borderColor: params.colors.brand.color,
            $nest: {
              '&:after': {
                position: 'absolute',
                left: 4,
                top: 4,
                display: 'table',
                width: 6,
                height: 6,
                backgroundColor: params.colors.brand.color,
                border: 0,
                borderRadius: '50%',
                content: '" "',
              },
            },
          },
          hover: {
            borderColor: params.colors.brand.color,
          }
        },
      },
      label: {
        cursor: 'pointer',
      },
    };
  }

}
