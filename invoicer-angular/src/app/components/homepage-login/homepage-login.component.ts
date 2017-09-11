import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage-login',
  templateUrl: './homepage-login.component.html',
  styleUrls: ['./homepage-login.component.css']
})
export class HomepageLoginComponent implements OnInit {

    constructor(private _router: Router) { }

  ngOnInit() {
  }
  gotocustomer() {
      this._router.navigate(['/customer']);
  }

}
