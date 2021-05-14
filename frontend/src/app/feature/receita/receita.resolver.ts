import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { IReceita } from "./receita.interface";
import { ReceitaService } from "./receita.service";

@Injectable()
export class ReceitaDetailsResolver implements Resolve<IReceita> {
  constructor(private receitaService: ReceitaService) {}

  resolve(route: ActivatedRouteSnapshot): IReceita {
    return this.receitaService.getById(route.paramMap.get("receitaId")).pipe(
      map((result: IReceita) => {
        return result;
      })
    );
  }
}
