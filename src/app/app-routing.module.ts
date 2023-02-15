import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { FriendNumbersComponent } from './pages/friend-numbers/friend-numbers.component';
import { MatrizComponent } from './pages/matriz/matriz.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'numerosAmigos', component: FriendNumbersComponent },
  { path: 'matriz', component: MatrizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
