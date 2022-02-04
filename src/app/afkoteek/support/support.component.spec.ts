
import { SupportComponent } from './support.component';
import {ComponentFixture, fakeAsync, TestBed} from "@angular/core/testing";
import {SupportService} from "./support.service";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {AppModule} from "../../app.module";

describe('SupportComponent', () => {
  let component: SupportComponent;
  let fixture: ComponentFixture<SupportComponent>;
  let service : SupportService;

  beforeEach( () => {
    service = new SupportService();
    service.setOptions([]);
     TestBed.configureTestingModule({
      declarations: [ SupportComponent ],
      providers: [
        {provide: SupportService, useValue: service}
      ],
       imports: [AppModule],
     }).compileComponents();
    fixture = TestBed.createComponent(SupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("#getOptions should return data set in service", () => {
    expect(service.getOptions.length).toEqual(0);
    let data = [{type: "t", name: "n"}];
    service.setOptions(data)
    expect(component.getOptions()).toEqual(data);
  });

  it("every option returned by #getOptions should have an associated button", fakeAsync(() => {
    expect(service.getOptions.length).toEqual(0);
    let data = [{type: "t", name: "n"}, {type: "type2", name: "name2"}];
    service.setOptions(data)
    fixture.detectChanges();

    const parent : DebugElement = fixture.debugElement;
    for (let i = 0; i < data.length; i++) {
      let buttonId = "a#" + data[i].name + "_" + data[i].type;
      let content = parent.query(By.css(buttonId));
      let button : HTMLElement = content.nativeElement;
      expect(button).toBeTruthy();
      // so ts doesnt complain, the expect should be enough though
      if (button != null)
        expect(button.textContent).toEqual(data[i].name);
    }
  }));

});

