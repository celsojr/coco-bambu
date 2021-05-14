import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UserRoutingModule } from "./user-routing.module";
import { LoginService } from "./login/login.service";
import { CoreModule } from "../../../app/core/core.module";
import { SharedModule } from "../../../app/shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { ReceitaService } from "../receita/receita.service";
import { ReceitaListComponent } from "../receita/receita-list/receita-list.component";
import { HighlightPipe } from "src/app/core/pipes/highlight-search-pipe";
import { SearchPipe } from "src/app/core/pipes/search-pipe";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ReceitaListComponent, HighlightPipe, SearchPipe],
  imports: [UserRoutingModule, HttpClientModule, CoreModule.forRoot(), SharedModule.forRoot()],
  providers: [LoginService, ReceitaService],
  bootstrap: []
})
export class UserModule {}
