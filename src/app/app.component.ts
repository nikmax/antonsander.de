import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = [
    'brutalcar.com-300.jpg',
    'brutalcar.com-304.jpg',
    'brutalcar.com-327.jpg',
    'brutalcar.com-328.jpg',
    'brutalcar.com-343.jpg',
    'brutalcar.com-348.jpg',
    'brutalcar.com-351.jpg',
    'brutalcar.com-354.jpg'
  ];
  currentImage = 0;

  ngOnInit(){
    this.updateImage();
  }

  updateImage(){

    setInterval(
      () => {
        this.currentImage++; 
        this.currentImage = this.currentImage % this.images.length;
      },5000);
  }
}
