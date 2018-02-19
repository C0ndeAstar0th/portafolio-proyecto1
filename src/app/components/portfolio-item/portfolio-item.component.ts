import { Component } from '@angular/core';
import { ActivatedRoute, UrlHandlingStrategy } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styles: []
})
export class PortfolioItemComponent  {
producto:any=undefined;
itemImg:string='undefinied';

  constructor(private route:ActivatedRoute,
              private _ps:ProductosService) { 
    
    route.params.subscribe(parametros=>{
      // console.log(parametros);
      // console.log(parametros['id']);
      _ps.cargar_producto(parametros['id']).subscribe(res=>{
        this.producto=res.json();
        //console.log(this.producto)
      });
      this.itemImg=parametros['id'];
      //console.log(this.itemImg)
    /*  for( let i in _ps.productos ){
      if (_ps.productos[i].cod === parametros['id']){
        this.itemImg = _ps.productos[i].url;
      } 
    } */
    })
   }

 

}
