import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; 

import { NasaService } from '../services/nasa.service';
import { Apod } from '../interfaces/apod';

/* komponent dla nasa astronomy picture of the day dla dzisiaj */

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
  
export class ApodComponent {

  apodDay?: Apod; // dla dnia

  private nasaService: NasaService = inject(NasaService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  

  ngOnInit() {

    /*this.router.events.subscribe(() => {
      this.apodDay = this.router.getCurrentNavigation()?.extras.state?.["apod"];
      if (!this.apodDay) {
        this.loadApodDay();
      }
    });*/
    
    this.route.paramMap.subscribe(params => {
      // Odbierz apod przekazane przez router state
      this.apodDay = history.state['apod'];
      if (!this.apodDay) {
        this.loadApodDay(); //jesli nie bylo 
      }
    });

    
    
      /*this.nasaSerive.getApod().subscribe((data: Apod[]) => {
      this.apoddata = data;
      console.log(this.apoddata);
    });*/

  }

  private loadApodDay() {
    this.nasaService.getApod().subscribe(data => {
      this.apodDay = data;  // bezpośrednie przypisanie danych
      //console.log(this.apodDay);
      console.log("loadApodDay()");
    });
  }


}
