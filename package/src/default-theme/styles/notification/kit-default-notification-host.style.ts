import { Inject, Injectable } from '@angular/core';
import { defPick, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { KitCoreOverlayContainerPositionCorner } from '../../../core/meta/overlay';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { KitDefaultThemeParamsNotificationColor } from '../../meta/params';

@Injectable()
export class KitDefaultNotificationHostStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  item(state: {
    color: string;
  }): StyleDef {
    const params = this.theme.params;
    const color = this.theme.getModuleColor('Notification', state.color) as KitDefaultThemeParamsNotificationColor;
    return {
      margin: [params.grid.v, params.grid.h],
      padding: [params.grid.v, params.grid.h],
      background: color.background,
      borderRadius: params.borders.radius,
      border: [1, 'solid', color.border],
    };
  }

  itemMessage(state: {
    color: string;
  }): StyleDef {
    const color = this.theme.getModuleColor('Notification', state.color) as KitDefaultThemeParamsNotificationColor;
    return {
      color: color.messageText,
    };
  }

  itemTitle(state: {
    color: string;
  }): StyleDef {
    const color = this.theme.getModuleColor('Notification', state.color) as KitDefaultThemeParamsNotificationColor;
    return {
      fontSize: '1.2rem',
      color: color.titleText,
    };
  }

  wrapper(state: {
    position: KitCoreOverlayContainerPositionCorner;
  }): StyleDef {
    return {
      display: 'flex',
      ...defPick(state.position, {
        'top-right': {
          flexDirection: 'column',
          alignItems: 'flex-end',
        },
        'bottom-right': {
          flexDirection: 'column-reverse',
          alignItems: 'flex-end',
        },
        'bottom-left': {
          flexDirection: 'column-reverse',
          alignItems: 'flex-start',
        },
        'top-left': {
          flexDirection: 'column',
          alignItems: 'flex-start',
        },
      }),
    };
  }
}
