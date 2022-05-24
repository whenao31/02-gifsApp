import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  ngOnInit(): void {
  }

  @ViewChild('txtSearch')
  txtSearch!: ElementRef<HTMLInputElement>; //'!': non-null assertion operator

  constructor( private gifsService: GifsService ) {}


  search(text: string) {

    const value = this.txtSearch.nativeElement.value;

    if (!value.trim().length){
      return ;
    }

    this.gifsService.searchGifs(value);

    this.txtSearch.nativeElement.value = '';
  }

}
