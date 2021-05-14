import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../../feature/user/login/login.service";
import { IUser } from "../../models/user.interface";
import { UserService } from "../../services";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  user: IUser;

  constructor(private userService: UserService, private loginService: LoginService) {}

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
  }
  onLoggedout(): void {
    this.loginService.logout();
  }
}
