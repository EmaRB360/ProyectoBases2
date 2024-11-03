import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  errorMessage: string | null = null;

  constructor(private router: Router) {}

  onSubmit(form: any) {
    const { username, password } = form.value;
    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['/servicios']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
