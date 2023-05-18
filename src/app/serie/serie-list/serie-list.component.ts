import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie.model';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  promedio: number = 0.0;

  selectedSerie!: Serie;
  selected: boolean = false;

  constructor(private serieService: SerieService) { }

  onSelected(serie: Serie): void 
  {
    this.selected = true;
    this.selectedSerie = serie;
  }

  getSeries(): void 
  {
    this.serieService.getAll().subscribe((series) => {
      this.series = series;
    });
  }

  getPromedio(): number{
    let suma = 0;
    for(let i = 0; i < this.series.length; i++)
    {
      suma += this.series[i].seasons;
    }
    return suma/this.series.length;
  }

  ngOnInit() {
    this.getSeries();
  }

}
