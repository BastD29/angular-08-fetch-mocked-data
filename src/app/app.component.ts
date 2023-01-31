import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interfaces/user';
import { DataService } from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users$!: Observable<User[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users$ = this.dataService.getUsers();
  }
}
