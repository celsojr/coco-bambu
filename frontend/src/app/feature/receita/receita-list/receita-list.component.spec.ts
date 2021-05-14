import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReceitaListComponent } from './receita-list.component';

describe('ReceitaListComponent', () => {
  let component: ReceitaListComponent;
  let fixture: ComponentFixture<ReceitaListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
