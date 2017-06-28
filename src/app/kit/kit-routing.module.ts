import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentResolverService } from '../core/content-resolver.service';
import { ContentComponent } from '../shared/content/content.component';
import { ButtonGroupComponent } from './buttons/button-group/button-group.component';
import { ButtonComponent } from './buttons/button/button.component';
import { DropdownMenuComponent } from './buttons/dropdown-menu/dropdown-menu.component';
import { OverlayComponent } from './core/overlay/overlay.component';
import { KitComponent } from './kit/kit.component';

const routes: Routes = [
  {
    path: '',
    component: KitComponent,
    children: [
      {
        path: '',
        component: ContentComponent,
        data: {
          content: 'kit/overview.json',
        },
        resolve: {
          content: ContentResolverService,
        },
      },
      {
        path: 'getting-started',
        component: ContentComponent,
        data: {
          content: 'kit/getting-started.json',
        },
        resolve: {
          content: ContentResolverService,
        },
      },
      {
        path: 'core',
        children: [
          {
            path: 'overlay',
            component: OverlayComponent,
          },
        ],
      },
      {
        path: 'buttons',
        children: [
          {
            path: 'button',
            component: ButtonComponent,
            data: {
              content: 'kit/buttons/button.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'button-group',
            component: ButtonGroupComponent,
          },
          {
            path: 'dropdown-menu',
            component: DropdownMenuComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitRoutingModule {
}
