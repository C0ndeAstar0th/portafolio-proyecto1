import { Component} from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent  {
  constructor(public _is: InformacionService,
     private router: Router){
    }

  buscar_producto(termino: string) {
    
  this.router.navigate(['buscar', termino]);
}

}
