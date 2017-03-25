import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = this.authService.user;

  users: FirebaseListObservable<any>;
  constructor(private userService: UserService, private authService: AuthService) { 

  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

  // ngOnInit used to keep complex logic out of the constructor. There are other ng methods for things like changes etc.
  // Read about lifecycle hooks to learn more.
  // We used the ngOnInit Lifecycle Hook to get users when our AppComponent activates.
  ngOnInit(): void {
    this.getUsers();
    console.log(this.user);
  }

}
