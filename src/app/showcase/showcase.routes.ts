import {Routes} from '@angular/router';

import { ButtonShowcaseComponent } from './button-showcase/button-showcase.component';
import { CardShowcaseComponent } from './card-showcase/card-showcase.component';
import { ShowcaseComponent } from './showcase.component';

export const routes: Routes = [
    {
        path: '',
        component: ShowcaseComponent,
        children: [
            {
                path: '',
                redirectTo: 'buttons',
                pathMatch: 'full',
            },
            {
                path: 'buttons',
                component: ButtonShowcaseComponent
            },
            {
                path: 'cards',
                component: CardShowcaseComponent
            }
        ]
    },
];