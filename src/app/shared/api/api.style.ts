import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';

@Injectable()
export class ApiStyle implements ComponentStyle {
  constructor() {
  }

  head(): StyleDef {
    return {
      borderBottom: [1, 'solid', '#ddd'],
      paddingBottom: 4,
    };
  }

  host(): StyleDef {
    return {
      display: 'block',
      marginBottom: 32,
    };
  }

  paramDoc(): StyleDef {
    return {
      $nest: {
        '& p': {
          margin: 0,
        },
      },
    };
  }
}
