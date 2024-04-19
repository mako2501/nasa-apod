import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { NasaService } from '../services/nasa.service';
import { Apod } from '../interfaces/apod';

/*komponent wyswietla obrazy z apod nasa z ostatniego tygodnia*/

@Component({
  selector: 'app-apod-week',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatGridListModule],
  templateUrl: './apod-week.component.html',
  styleUrl: './apod-week.component.scss'
})
export class ApodWeekComponent {

  private nasaService: NasaService = inject(NasaService);
  apodWeek?: Apod[];

  ngOnInit() {
    this.loadApodWeek();
  }

    private loadApodWeek() {    
    //ustawia date start na tydzień przed dzisiejszą datą
    const startDate = this.formatDate(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
      // pobiera dane APOD od podanej daty startowej do dzisiaj
      this.nasaService.getApodFromStartDate(startDate).subscribe(data => {
      this.apodWeek = data;  
      console.log("loadApodWeek()");
    });
  }
  //zamienia date do wymaganego rpzez api formatu //YYYY-MM-DD
  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

}
