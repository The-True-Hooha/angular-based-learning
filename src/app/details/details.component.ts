import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  //variable to define where the movie rating starts from
  movieRating = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getColor(value: number): string {

    if(value > 7){
      return '#5ee432';
    } else if(value > 5){
      return '#fffa50';
    } else if (value > 3) {
      return '#ef4655';
    }

    return '';
  }

}
