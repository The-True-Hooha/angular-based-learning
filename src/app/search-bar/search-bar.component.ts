import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})



export class SearchBarComponent implements OnInit {

  //defined a method [onSubmit] from the search-bar-component form class
  onSubmit(form: any){
    console.log(form);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
