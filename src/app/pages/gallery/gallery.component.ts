import { Component, OnInit } from '@angular/core';
export interface Tile {
  image: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, image: 'https://scontent.fceb1-2.fna.fbcdn.net/v/t1.6435-9/c0.34.600.600a/p600x600/245450031_228957575960472_6539602996856110005_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHpMTm5j6srvKCIUNJ3pcFd99w6F9s1KQ733DoX2zUpDkM8wyNUKmHY4hNTlwh8QegZeKvYTl3ke9iVMZWFhLfg&_nc_ohc=6DH22F7u-Q0AX-S_KHH&_nc_ht=scontent.fceb1-2.fna&oh=4b7a4acfcfa5f50aee9dcd5ead363a0d&oe=61916921'},
    {text: 'Two', cols: 1, rows: 2, image: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, image: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, image: '#DDBDF1'},
  ];
  constructor() {

   }

  ngOnInit(): void {
  }

}
