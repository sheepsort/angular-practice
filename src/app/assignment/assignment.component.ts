/*
1. Add a button that says 'Display Details'
2. Add a <p> with some content.
3. Toggle the display of that <p> with the button.
4. Log all button clicks in an array & output the array beneath the <p>
5. For clicks 5 and greater, give all future items a blue background using ngStyle, and white color using ngClass.
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  passwordDisplay = false;
  buttonClicks = [];
  backgroundChange = false;

  constructor() { }

  ngOnInit() {
  }

  showPassword() {
    this.passwordDisplay = !this.passwordDisplay;
    this.incrementList();
  }

  incrementList() {
    this.buttonClicks.push(this.buttonClicks.length + 1);
  }

}
