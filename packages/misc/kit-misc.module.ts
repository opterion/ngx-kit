import { NgModule } from '@angular/core';

import { KitBadgeComponent } from './kit-badge/kit-badge.component';
import { KitDividerComponent } from './kit-divider/kit-divider.component';
import { KitLabelComponent } from './kit-label/kit-label.component';
import { KitPopoverComponent } from './kit-popover/kit-popover.component';
import { KitTooltipDirective } from './kit-tooltip/kit-tooltip.directive';
import { KitTooltipViewComponent } from './kit-tooltip-view/kit-tooltip-view.component';

const exported = [
  KitBadgeComponent,
  KitDividerComponent,
  KitLabelComponent,
  KitPopoverComponent,
  KitTooltipDirective,

];

const entry = [
  KitTooltipViewComponent,
];

@NgModule({
  imports: [],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
    ...entry,
  ],
  entryComponents: entry,
  providers: []
})
export class KitMiscModule {
}