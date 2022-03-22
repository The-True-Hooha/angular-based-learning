import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {

  //defined a method [onSubmit] from the search-bar-component form class
  onSubmit(form: NgForm){
    this.router.navigate(['search', form.value.search])
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
