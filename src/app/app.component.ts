import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'quete12';

  public imgOfTheDay: any;

  constructor(public nasaService: NasaService) {}

  getImageOfTheDay(): any {
    this.nasaService.getImageOfTheDay().subscribe( img => {
      this.imgOfTheDay = img;
    });
  }

  ngOnInit() {
    this.getImageOfTheDay();
    
  }
}
