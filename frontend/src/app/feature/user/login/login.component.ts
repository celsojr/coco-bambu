import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loginService.logout();

    this.returnUrl = this.route.snapshot.queryParams[`returnUrl`] || "/receitas";
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
      rememberMe: [false]
    });
  }

  login(loginForm: FormGroup): void {
    if (loginForm.valid) {
      this.loading = true;
      this.loginService.login(loginForm.controls.userName.value, loginForm.controls.password.value).subscribe(
        () => {
          this.loading = false;
          this.router.navigate([this.returnUrl]);
        },
        (error: any) => {
          this.toastrService.error(error.message);
          this.loading = false;
        }
      );
    } else {
      this.toastrService.error("Por favor digite credenciais válidas");
    }
  }
}
