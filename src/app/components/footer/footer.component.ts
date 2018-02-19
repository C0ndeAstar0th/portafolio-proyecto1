import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})

export class FooterComponent  {
public year: number;
  constructor(public _is:InformacionService ) {
    this.year = new Date().getFullYear();
  }

}
