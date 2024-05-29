import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  standalone: true,
  imports: [],
  templateUrl: './fruta.component.html',
  styleUrl: './fruta.component.css',
})
export class FrutaComponent {
  public title = 'Titulo componente Fruta';
  public amount: number = 60;
  public active: boolean = true;
  public roles: Array<string> = ['Engineer', 'Desingner'];
  public joker: any = 'Any variable';
  public constructorValue: any;

  constructor() {
    // constructor with initial / defatult values
    this.constructorValue = 'Console log from component using constructor';
    console.log(this.constructorValue);
  }

  // to call methods
  ngOnInit() {
    this.helloWord(this.title);
    this.changeTitle();

    // Variables and reach
    var uno = 8;
    var dos = 15;
    if (uno === 8) {
      let uno = 3; // Let takes the value of the level in witch the variable was defined
      var dos = 88; // var takes the last value assigned to the variable
      console.log('inside if');
      console.log(uno);
      console.log(dos);
    }
    console.log(uno);
    console.log(dos);
  }

  // Functions
  helloWord(title: string) {
    console.log('Method excecuted from component: ' + title);
  }

  changeTitle() {
    this.title = 'Component title changed via function';
    console.log(this.title);
  }
}
