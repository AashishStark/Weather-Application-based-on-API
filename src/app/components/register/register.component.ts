import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  constructor(private auth: FirebaseService) { }
  register() {
    if (this.email == '') {
      alert('please neter email id');
      return;
    }
    if (this.password == '') {
      alert('pleaase enter password');
      return;
    }
    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';

  }
}
