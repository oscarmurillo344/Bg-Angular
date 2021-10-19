import { AfterContentInit, AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DataMenuService } from '../../Servicios/data-menu.service';
import MenuListBg from '../../Modelos/menu';
import { MatSidenav } from '@angular/material/sidenav';

const menu:MenuListBg[] = [
  {
      default:true,
      nombre:"Home", 
      icon: "home",
      ruta: "home"        
  },
  {
    nombre:"Activos y Pasivos", 
    icon: "person_outline",
    ruta:"/activopasivo",
    items: [
      {
          icon: "",
          nombre:"Total Pasivos",
          items: [
              { 
                  icon: "",
                  nombre: "cualquier "
              }
          ]
      }, 
      {
          icon: "",

          nombre:"Corrientes"
      },
      {
          icon: "",

          nombre:"Ahorros",
          ruta: "/activopasivo/ahorros",
          items: [
              {
                  nombre: "Detalle",
                  icon: "",
                  ruta : "/activopasivo/ahorros/detalles"
                  
              },
              {
                  nombre: "Resumen",
                  icon: "",
                  ruta:"/activopasivo/ahorros/resumen",
                  items:[
                    {
                      nombre: "activo",
                      icon: "",
                      ruta:"/activopasivo/ahorros/resumen",
                    },
                    {
                      nombre: "pasivo",
                      icon: "",
                      ruta:"/activopasivo/ahorros/resumen",
                    }
                  ]
                  
              }
          ]
      },
      {
          icon: "",

          nombre:"Depositos A Plazo"
      },
      {
          icon: "",
          nombre:"Cartera y Conrigente"
      }
   ] 
 },
 {
      nombre:"Cobertura", 
      icon: "location_on",
      items: [
          {
              nombre:"Total Cobertura"
          }     
      ]
 },
  {
      nombre:"Informes", 
      icon: "assignment",
      items: [
          {
              nombre:"opcion1"
          }, 
          {
              nombre:"opcion2"
          }]
 },
 {
     nombre:"Seguridad", 
     icon: "shield",
     items: [
         {
             nombre:"Usuarios"}, 
         {
             nombre:"Roles"}
      ] 
 },
 {
     nombre:"Configuraciones", 
     icon: "settings",
     items: [{nombre:"opcion1"}, {nombre:"opcion2"}]
 }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  @ViewChild('sidenav', {static: true}) public sidenav: MatSidenav;

  fechaActual: Date = new Date()
  cerrarNav: boolean = false
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge
  ]).pipe(
      map(result => result.matches),
      shareReplay()
    );
  ViewMenu = this._dataMenu.$toogleMenu
  ViewModulos = this._dataMenu.$ModulosRaiz
  ListaMenu:Array<MenuListBg> = menu
  ListaSubMenu:MenuListBg

  constructor(
              private breakpointObserver: BreakpointObserver,
              public _dataMenu: DataMenuService) {
    this.isHandset$.subscribe((data: boolean): boolean => this.cerrarNav = data)
  }
 

  ngOnInit(): void {
    setInterval(() => {
      this.fechaActual = new Date()
    }, 1000)
    setTimeout(() => this._dataMenu.SetModulo("Home"), 100)
  }

  toogleSubmenu(): void {
   this._dataMenu.ToogleMenu()
   !this.cerrarNav ? this.sidenav.toggle() : null
  }
  AbrirSubMenu(): void{
   this._dataMenu.AbrirMenu()
  }
  CerrarSubMenu(): void{
    this._dataMenu.CerrarMenu()
  }
  SetSubMenu(index:number=0): void{
    if(index==0 && !this.cerrarNav) this.sidenav.toggle()
    this.ListaSubMenu = this.ListaMenu[index]

  }
  VerificarMenu(): void{
    if(this._dataMenu.IsMenuState()){
      this._dataMenu.ToogleMenu()
      this.SetSubMenu()
    }
  }
  SetModulos(modulo:string): void{
    this._dataMenu.SetModulo(modulo)
  }
}
