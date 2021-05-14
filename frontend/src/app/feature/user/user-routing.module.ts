import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "../../../app/core/guards";
import { ReceitaListComponent } from "../receita/receita-list/receita-list.component";
import { ReceitaDetailsComponent } from "../receita/receita-details/receita-details.component";
import { ReceitaDetailsResolver } from "../receita/receita.resolver";

const userRoutes: Routes = [
  {
    path: "",
    component: ReceitaListComponent,
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "receitas",
    component: ReceitaListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "receitas/details/:receitaId",
    component: ReceitaDetailsComponent,
    resolve: { receitaDetails: ReceitaDetailsResolver },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
  providers: [ReceitaDetailsResolver]
})
export class UserRoutingModule {}
