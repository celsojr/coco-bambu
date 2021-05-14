import { NgModule } from "@angular/core";
import { ReceitaListComponent } from "./receita-list/receita-list.component";
import { ReceitaDetailsComponent } from "./receita-details/receita-details.component";
import { CoreModule } from "../../core/core.module";
import { SharedModule } from "../../shared/shared.module";
import { ReceitaRoutingModule } from "./receita-routing.module";
import { ReceitaService } from "./receita.service";
import { ReceitaDetailsResolver } from "./receita.resolver";

@NgModule({
  declarations: [ReceitaListComponent, ReceitaDetailsComponent],
  imports: [ReceitaRoutingModule, CoreModule.forRoot(), SharedModule.forRoot()],
  providers: [ReceitaService, ReceitaDetailsResolver],
  bootstrap: []
})
export class ReceitaModule {}
