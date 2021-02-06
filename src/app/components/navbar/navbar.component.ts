import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isOn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setIsOn() {
    this.isOn = !this.isOn;
  }

}
