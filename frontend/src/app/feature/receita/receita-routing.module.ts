import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "../../../app/core/layout/layout.component";
import { ReceitaListComponent } from "./receita-list/receita-list.component";
import { ReceitaDetailsComponent } from "./receita-details/receita-details.component";
import { ReceitaDetailsResolver } from "./receita.resolver";

const receitaRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent
    // children: []
  },
  {
    path: "receitas",
    component: ReceitaListComponent
  },
  {
    path: "receitas/details/:receitaId",
    component: ReceitaDetailsComponent,
    resolve: { receitaDetails: ReceitaDetailsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(receitaRoutes)],
  exports: [RouterModule]
})
export class ReceitaRoutingModule {}
