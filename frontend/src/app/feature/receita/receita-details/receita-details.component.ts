import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IReceita } from "../receita.interface";
import { ReceitaService } from "../receita.service";
import { timer, Subscription, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-receita-details",
  templateUrl: "./receita-details.component.html",
  styleUrls: ["./receita-details.component.scss"]
})
export class ReceitaDetailsComponent implements OnInit {
  isDialog: boolean = false;
  btnMsg: string = "Iniciar Preparação";
  ingredientesNaoMarcados: boolean = true;
  podeFinalizar: boolean = false;
  progress: string = "0%";
  progressColor: string = "#f67a20";
  contador: Subscription;
  contagem: number = 0;
  tick: number = 1000;
  math = Math;

  destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild("ingredientList") ingredientList: ElementRef;
  @ViewChild("preparationList") preparationList: ElementRef;
  dialog: any = {
    title: "",
    message: "",
    buttonMessage: ""
  };

  receita?: IReceita;
  receitaService: ReceitaService;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.receita = this.activatedRoute.snapshot.data.receitaDetails;
  }

  ngOnDestroy() {
    this.destroy$?.next(true);
    this.destroy$?.unsubscribe();
    this.destroy$ = null;
  }

  onBack(): void {
    this.router.navigate(["/receitas"]);
  }

  startCounter(): void {
    this.contador = timer(0, this.tick)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => ++this.contagem);
  }

  getTime(): string {
    const minutes: number = Math.floor(this.contagem / 60);
    return ("00" + minutes).slice(-2) + " minutos e " + ("00" + Math.floor(this.contagem - minutes * 60)).slice(-2) + " segundos!";
  }

  openDialog(): void {
    if (this.isAllChecked(this.ingredientList) && this.isAllChecked(this.preparationList)) {
      this.dialog.title = "Obrigado";
      this.dialog.message = "Prato finalizado com sucesso em " + this.getTime();
      this.dialog.buttonMessage = "OK";
      this.isDialog = true;

      this.destroy$?.next(true);
      this.destroy$?.unsubscribe();
      this.destroy$ = null;
    } else if (this.isAllChecked(this.ingredientList)) {
      this.dialog.message = "Para iniciar a preparação, certifique-se de que você te todos os ingredientes selecionados!";
      this.dialog.buttonMessage = "Entendi";
      this.isDialog = true;
      this.btnMsg = "Preparação iniciada";
      this.startCounter();
    }
  }

  closeDialog(): void {
    this.isDialog = false;
  }

  isAllChecked(list: ElementRef): boolean {
    var inputs: [] = [].slice.call(list.nativeElement.getElementsByTagName("input"));
    return !inputs.some((input: { checked: boolean }) => input.checked == false);
  }

  setProgress(list: ElementRef): void {
    var inputs: [] = [].slice.call(list.nativeElement.getElementsByTagName("input"));

    let total = inputs.length;
    let marcados = inputs.filter((input: { checked: boolean }) => input.checked == true).length;

    this.progress = ((marcados * 100) / total).toFixed() + "%";
    this.progressColor = this.podeFinalizar ? "#63d601" : "#f67a20";
  }

  validarIngredientes(): void {
    if (this.isAllChecked(this.ingredientList) && this.isAllChecked(this.preparationList)) {
      this.podeFinalizar = true;
      this.btnMsg = "Finalizar";
    } else if (this.isAllChecked(this.ingredientList)) {
      this.ingredientesNaoMarcados = false;
      this.podeFinalizar = false;
    } else {
      this.ingredientesNaoMarcados = true;
      this.btnMsg = "Iniciar Preparação";
      this.podeFinalizar = false;
    }

    this.setProgress(this.preparationList);
  }
}
