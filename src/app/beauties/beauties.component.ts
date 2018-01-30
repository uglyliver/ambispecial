import { Component, OnInit } from '@angular/core';
import { Beauty } from '../beauty';
import { BEAUTIES } from '../mock-beauties';
@Component({
  selector: 'app-beauties',
  templateUrl: './beauties.component.html',
  styleUrls: ['./beauties.component.css']
})
export class BeautiesComponent implements OnInit {
  beauties = BEAUTIES;
  selectedBeauty: Beauty;
  a: string='assets\\images\\';
  b: string='.jpg';
  // a='assets\\images\\';
  // b='.jpg';


  constructor() { }

  ngOnInit() {
  }

  onSelect(beauty: Beauty): void {
    this.selectedBeauty = beauty;
    //imagePath = 'assets\\images'+ '\\' + beauty.name + '.jpg';
  }

}


