import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'obey-digital';
  activeMenu: boolean = false;
  reflectActiveMenu() {
    this.activeMenu = !this.activeMenu;
  }
  services: any = [
    {
      name: 'FACEBOOK ADS',
      icon: 'facebook.svg',
      dis: `From awareness to conversion, our 
      Facebook ads help you reach your 
      target audience and build your 
      dental practice like never before.`,
    },
    {
      name: 'leads',
      icon: 'user.svg',
      dis: `Get more patients in the door with 
      our lead generation solutions 
      tailored to the dental industry 
      and designed to drive real results.`,
    },
  ];
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.activeMenu = false;
    });
  }
}
