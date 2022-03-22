import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  constructor(private router: Router)  {}

  ngOnInit(): void {
      
  }

  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
  }
}
