import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  workouts: { type: string; minutes: number }[];
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [
    { 
      name: 'John Doe', 
      workouts: [
        { type: 'Running', minutes: 30 },
        { type: 'Cycling', minutes: 45 }
      ]
    },
    { 
      name: 'Jane Smith', 
      workouts: [
        { type: 'Swimming', minutes: 40 },
        { type: 'Yoga', minutes: 60 }
      ]
    },
    { 
      name: 'Mike Johnson', 
      workouts: [
        { type: 'Gym', minutes: 90 },
        { type: 'Running', minutes: 20 }
      ]
    }
  ];

  selectedUser: User | null = null;

  constructor() { }

  ngOnInit(): void {
    // You can load users from a service or localStorage here
    if (this.users.length > 0) {
      this.selectUser(this.users[0]);
    }
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }
}