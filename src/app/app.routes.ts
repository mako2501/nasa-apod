import { Routes,  } from '@angular/router';

import { ApodComponent } from './apod/apod.component';
import { ApodWeekComponent } from './apod-week/apod-week.component';
import { EmptyComponent } from './empty.component';

//    
export const routes: Routes = [
  { path: 'apod', component: ApodComponent },
  { path: 'apod-week', component: ApodWeekComponent },
  { path: 'dummy', component: EmptyComponent, pathMatch: 'full' }, //pusty komponent sluzy mi do oswiezania strony - szybkie przekierowanie
  { path: '', redirectTo: '/apod', pathMatch: 'full' }
];
