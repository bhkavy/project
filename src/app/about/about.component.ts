import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  randomText ='aghhbcvjdnvcdsnvcknds';
  
  today = new Date();

  dummyText ='hsjavjkbkabdkas.';

  constructor() { }

  ngOnInit(): void {
  }

}
