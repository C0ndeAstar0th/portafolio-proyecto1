import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProductosService {
  productos: any[] = [];
  productosFiltrado: any[] = [];
  cargando: boolean = true;


  constructor(private http: Http) {
    this.cargar_productos();
  }
  public cargar_producto(cod: string) {
    return this.http.get(`https://holamundo-63c69.firebaseio.com/productos/${cod}.json`
    )
  }
  public cargar_productos() {

    let promesa = new Promise((resolve, reject) => {
      this.http.get('https://holamundo-63c69.firebaseio.com/productos_idx.json')
        .subscribe(res => {
          // console.log(res.json());
          //setTimeout( ()=>{
          this.cargando = false;
          this.productos = res.json()
          resolve();
          //},500);
        });
    });
    return promesa;
  }

  public buscar_producto(termino: string) {
  //  console.log(termino+' esto es buscar producto');
    if (this.productos.length === 0) {
      this.cargar_productos().then(()=>{
        this.filtrarProductos(termino);
      })
    }else{
      this.filtrarProductos(termino);
    }
   }

   private filtrarProductos(termino:string){

     termino = termino.toLowerCase();
    this.productosFiltrado=[];

     //console.log(termino + ' esto es filtrar producto');

  this.productos.forEach(prod => {
    if(prod.categoria.indexOf(termino)>= 0 || prod.titulo.toLowerCase().indexOf(termino)>= 0){
      this.productosFiltrado.push(prod);
     // console.log(prod + ' esto es buscar producto');
    };
   
  })
   }
}
