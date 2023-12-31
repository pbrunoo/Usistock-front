import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/pedidos",
    title: "Pedidos",
    rtlTitle: "الرموز",
    icon: "icon-cart",
    class: ""
  },
  {
    path: "/faturamento",
    title: "Faturamento",
    rtlTitle: "خرائط",
    icon: "icon-money-coins",
    class: "" },
  {
    path: "/orcamentos",
    title: "Orçamentos",
    rtlTitle: "إخطارات",
    icon: "icon-chat-33",
    class: ""
  },
  {
    path: "/painel-controle",
    title: "Painel de Controle",
    rtlTitle: "قائمة الجدول",
    icon: "icon-settings-gear-63",
    class: ""
  },
  {
    path: "/relatorios",
    title: "Relatórios",
    rtlTitle: "طباعة",
    icon: "icon-chart-bar-32",
    class: ""
  },
  {
    path: "/user",
    title: "Usuários",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: ""
  }
 /* {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  }*/
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems!: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
