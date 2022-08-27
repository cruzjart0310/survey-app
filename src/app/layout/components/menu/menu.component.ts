import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    constructor(private router: Router,) { }

    ngOnInit(): void {
    }

    redirect() {
        this.router.navigate(['surveys']);
    }
}
