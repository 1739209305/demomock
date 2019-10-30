import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  selected = "side";
  DefaultTheme:boolean=false;
  DarkTheme:boolean=false;
  BlueTheme:boolean=false;
  DefaultThemeFun(){
    this.DefaultTheme = true;
    this.DarkTheme = false;
    this.BlueTheme = false;
  }
  DarkThemeFun(){
    this.DefaultTheme = false;
    this.DarkTheme = true;
    this.BlueTheme = false;
  }
  BlueThemeFun(){
    this.DefaultTheme = false;
    this.DarkTheme = false;
    this.BlueTheme = true;
  }
  mousedownfun(){
   /* var content = document.getElementById("content");
    content.style.width = "100%"; */
    var container = document.getElementById("container");
    var backrop = container.children[0];
    backrop.setAttribute("class","mat-drawer-backdrop ng-star-inserted");


    /*var container = document.getElementById("container");
    var content = document.getElementById("content");
    var sidenav = document.getElementById("sidemodel");
    var contentwidth = container.offsetWidth - sidenav.offsetWidth;
    console.log(contentwidth);
    content.style.width = contentwidth + 'px';*/
    var sidenav = document.getElementById("sidemodel");

    console.log(sidenav.style.visibility);
    var content = document.getElementById("content");
   if(sidenav.style.visibility=="hidden"){
    /*关闭的状态*/
    console.log("hidden status");
   /* var contentwidth = container.style.width - sidenav.style.width;
    content.style.width = contentwidth + 'px';*/
    sidenav.setAttribute("class","mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform mat-drawer-end ng-star-inserted mat-drawer-side mat-drawer-opened");
    content.style.width = '68%';
    sidenav.style.width = "32%";
    sidenav.style.left = '68%';
   }else{
    /*开启的状态*/
    console.log("hidden status");
    content.style.width = "100%";

   }
   
  }
 
  resizefun(e){
    console.log("resizefun");
    var max_width = 742.69;
    var min_width = 500;
    var right = document.getElementById("sidemodel");
    var rerightwidth = right.offsetWidth;
    console.log("右边盒子原本的宽度"+rerightwidth);
    var left = document.getElementById("content");
    var releftwidth = left.offsetWidth;
    console.log("左边盒子原先的宽度"+releftwidth);
    /*console.log(releftwidth);*/
    /*记录鼠标相对于左盒子x轴的位置*/
    var mouse_x = 0;
    var e = e || window.event;
    //阻止默认事件
    e.preventDefault();
    console.log(e);

    /*鼠标移动事件*/
    document.onmousemove = function mouseMove(e) {
      console.log("onmousemove thing is already start");
      console.log(e);
      var nav = document.getElementById("nav");
      var navwidth = nav.offsetWidth;
      console.log("左侧菜单的宽度"+navwidth);
      /*console.log("记录鼠标相对于左盒子x轴的位置"+mouse_x);*/
      var left_width = e.clientX - mouse_x - navwidth -3.7;
      console.log("点击的位置-左侧菜单栏的位置-鼠标对于左盒子x轴的位置"+left_width);
      console.log(left_width);
      left_width = left_width < min_width ? min_width : left_width;
      left_width = left_width > max_width ? max_width : left_width;
      left.style.width = left_width + 'px';
      right.style.left = left_width + 'px';
      var movepx = releftwidth - left_width;
      right.style.width = rerightwidth + movepx + 'px';
    
      if(left.offsetWidth<600){
         var container = document.getElementById("container");
         var backrop = container.children[0];
         backrop.setAttribute("class","mat-drawer-backdrop ng-star-inserted mat-drawer-shown");
         var sidenav = document.getElementById('sidemodel');
         console.log(sidenav);
         sidenav.setAttribute("class","mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform mat-drawer-end ng-star-inserted mat-drawer-over mat-drawer-opened");
         sidenav.setAttribute("ng-reflect-mode","over");
         var content = document.getElementById("content");
         content.style.marginRight = "0";
         content.style.width = "100%"; 
         
      }
      else{
         var container = document.getElementById("container");
         var backrop = container.children[0];
         backrop.setAttribute("class","mat-drawer-backdrop ng-star-inserted");
         var sidenav = document.getElementById('sidemodel');
         console.log(sidenav);
         sidenav.setAttribute("class","mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform mat-drawer-end ng-star-inserted mat-drawer-side mat-drawer-opened");
         sidenav.setAttribute("ng-reflect-mode","side");
         var content = document.getElementById("content");
         var sidenavwidth = container.offsetWidth - content.offsetWidth;
         console.log(sidenavwidth);
         sidenav.style.width = sidenavwidth + 'px';
      }
     

    }
    /*鼠标放下事件*/
    document.onmouseup = function mouseUp() {
      document.onmousemove = null;
      document.onmouseup = null;
    }



  }
  
}
