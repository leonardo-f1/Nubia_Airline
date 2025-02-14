import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Travelscomponent } from './travels.component';  // Ajuste o nome para TravelsPage, se necessário

describe('TravelsPage', () => {
  let component: Travelscomponent;
  let fixture: ComponentFixture<Travelscomponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Travelscomponent ],  // Certifique-se de usar o nome correto aqui
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Travelscomponent);  // Ajuste para TravelsPage
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
