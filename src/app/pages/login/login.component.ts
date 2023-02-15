import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  form: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.minLength(5)],
    });
  }

  login() {
    console.log(this.form.value);
    if (this.form.valid) {
      const { email, password } = this.form.value;

      this.loginService.login(email, password);
    }
  }
}
