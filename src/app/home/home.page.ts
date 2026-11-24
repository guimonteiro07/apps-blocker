import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
import Blocker from '../interfaces/echo-plugin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() { }

  async testarJava() {
    const { value } = await Blocker.echo({ value: 'Hello World!' });

    console.log('Resposta do Java: ', value);
  }
}
