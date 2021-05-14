import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { map, catchError } from "rxjs/operators";

import { environment } from "../../../environments/environment";
import { throwError } from "rxjs";

@Injectable()
export class ReceitaService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(environment.apiEndpoint + "/receitas").pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  getById(_id: string) {
    return this.http.get(environment.apiEndpoint + "/receita/" + _id).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  private handleErrorObservable(error: HttpErrorResponse) {
    return throwError(error);
  }
}