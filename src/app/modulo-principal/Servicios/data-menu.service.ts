import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataMenuService {

  $toogleMenu = new EventEmitter<boolean>();
  verMenu:boolean
  $ModulosRaiz = new EventEmitter<string>()
  raiz:string 
  constructor() {
  }

  ToogleMenu(): void{
    this.verMenu=!this.verMenu
    this.$toogleMenu.emit(this.verMenu)
  }
  
  AbrirMenu(): void{
    this.verMenu = true
    this.$toogleMenu.emit(this.verMenu)
  }

  CerrarMenu(): void{
    this.verMenu = false
    this.$toogleMenu.emit(this.verMenu)
  }

  SetModulo(modulo:string): void{
    this.raiz = modulo
    this.$ModulosRaiz.emit(modulo)
  }
  SetUnionModulo(modulo:string): void{
    this.raiz = this.raiz.concat("/").concat(modulo)
    this.$ModulosRaiz.emit(this.raiz)
  }
  IsMenuState(): boolean{
    return this.verMenu
  }
}
