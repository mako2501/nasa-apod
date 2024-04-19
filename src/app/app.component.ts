import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { NasaService } from './services/nasa.service';

import { ApodComponent } from './apod/apod.component';
import { ApodWeekComponent } from './apod-week/apod-week.component';
import { Apod } from './interfaces/apod';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

/* 
Rafał M. 14798
w komponencie glwonym znajduje sie toolbar, w nim datepicker, przyciski na toolbar kieruja na strony:
- apod - jeden dzien
- apod-week - tydzien, spory problem mialem z ustawieniem odswiezenia gdy ze strony apod mialo nastapic na ta sama strone
przekierowanie, ale z innymi danymi dnia */ 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatToolbarModule, MatIconModule, ApodComponent, ApodWeekComponent, RouterModule,
    MatDatepickerModule,MatInputModule,MatFormFieldModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nasa';
  maxDate = new Date();

  private nasaService: NasaService = inject(NasaService);
  private router: Router = inject(Router);
  apod?: Apod;

  onDateChange(event: any) {
    const selectedDate = event.value;
    const formattedDate = this.formatDate(selectedDate);
    console.log(`Wybrana data: ${formattedDate}`);
    // Pobieram dane, gdy są ok, wysyłam je do komponentu Apod - 
    this.nasaService.getApod(formattedDate).subscribe(data => {
      this.router.navigateByUrl('/dummy', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/apod'], { state: { apod: data } });
      });
    });
  }

  // problem z kliknieciem w link gdy jestem na apod ale z inna data niz dzisiejsza
  // wymuszam odsiwezanie
  navigateToApod(): void {
    // czy jesteś już na `/apod`
    if (this.router.url === '/apod') { //pusta strona, 
      this.router.navigateByUrl('/dummy', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/apod']);
      });
    } else {
      this.router.navigate(['/apod']);
    }
  }


  private formatDate(date: Date): string {
    //return date.toISOString().split('T')[0]; - jest problem z data, wybiera dzien wczesniejsza
    return date.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/(\d+)\/(\d+)\/(\d+)/, '$1-$2-$3');
  }

  //na starcie
  ngOnInit() {
  

  }

  


  }


  
  

