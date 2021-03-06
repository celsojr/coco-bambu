import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { IUser } from "../models/user.interface";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IUser[]>(environment.apiEndpoint + "/users").pipe(
      map((users: any) => {
        return users.data;
      })
    );
  }

  getById(_id: string) {
    return this.http.get<IUser>(environment.apiEndpoint + "/user/" + _id).pipe(
      map((user: any) => {
        return user.data;
      })
    );
  }
  getCurrentUser(): IUser {
    if (localStorage.getItem("currentUser")) {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      return user;
    }
  }

  create(user: IUser) {
    return this.http.post(environment.apiEndpoint + "/users", user);
  }

  update(user: IUser) {
    return this.http.put<IUser>(environment.apiEndpoint + "/user/" + user._id, user).pipe(
      map((user: any) => {
        return user.data;
      })
    );
  }

  changePassword(id: string, password: any) {
    return this.http.put(environment.apiEndpoint + "/user/changepassword/" + id, { password: password }).pipe(map((res: any) => res.data));
  }

  delete(_id: string) {
    return this.http.delete(environment.apiEndpoint + "/user/" + _id);
  }
}
