import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){}

  Cadastrar() {
    this.router.navigate(['/tela-cadastro'])
  }

  logar () {
    this.router.navigate(['/tela-inicial'])
  }
}
