import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import MenuListBg from '../../Modelos/menu';
import { DataMenuService } from '../../Servicios/data-menu.service';

@Component({
  selector: 'app-navlateral',
  templateUrl: './navlateral.component.html',
  styleUrls: ['./navlateral.component.css']
})
export class NavlateralComponent implements OnInit {

  AbrirSubMenu: string = "scale(1)"
  CerrarSubMenu: string = "scale(0)"
  OpcionCerrar: boolean = true
  ViewTransform = this._dataMenu.$toogleMenu
  @Input() ListaSubMenu!: MenuListBg
  @Output() newListaSubMenu = new EventEmitter<string>();
  
  constructor(
    public _dataMenu: DataMenuService
  ) {
  }

  ngOnInit(): void {
  }

  CerrarMenu(): void {
    this._dataMenu.ToogleMenu()
    this.newListaSubMenu.emit("Reset")
  }

  CambiarLista(item: MenuListBg): void{
    this._dataMenu.SetUnionModulo(item.nombre)
    if(item.items?.length > 0){
      this.OpcionCerrar = false
      this.ListaSubMenu = item
    }else{
      this.OpcionCerrar = true
    }
  }
}
