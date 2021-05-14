import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { ReceitaDetailsComponent } from "./receita-details.component";

describe("ReceitaDetailsComponent", () => {
  let component: ReceitaDetailsComponent;
  let fixture: ComponentFixture<ReceitaDetailsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ReceitaDetailsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
