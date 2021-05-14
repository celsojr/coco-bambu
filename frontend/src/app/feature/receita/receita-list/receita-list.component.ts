import { Component, OnInit } from "@angular/core";
import { ReceitaService } from "../receita.service";
import { Router } from "@angular/router";
import { IReceita } from "../receita.interface";
import { LoginService } from "../../user/login/login.service";

@Component({
  selector: "app-receita-list",
  templateUrl: "./receita-list.component.html",
  styleUrls: ["./receita-list.component.scss"]
})
export class ReceitaListComponent implements OnInit {
  receitas: Array<IReceita>;

  constructor(private router: Router, private receitaService: ReceitaService, private loginService: LoginService) {}

  ngOnInit(): void {
    this.receitaService.getAll().subscribe(
      (data: Array<IReceita>) => {
        this.receitas = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  verReceita(id: string): void {
    this.router.navigate(["/receitas/details/", id]);
  }

  onLoggedout(): void {
    this.loginService.logout();
  }
}
