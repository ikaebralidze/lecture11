import { Component, Input, OnInit } from '@angular/core';
import { Status, User } from '../users.servis';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() user: User | undefined;
  constructor() {}
  getStyle() {
    return {
      red: this.user?.status === Status.Deleted,
      yellow: this.user?.status === Status.Inactive,
      blue: this.user?.status === Status.Active,
    };
  }
  ngOnInit() {}
}
