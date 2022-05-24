import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent{

  constructor(private gifService: GifsService) { }

  get history() {
    return this.gifService.history;
  }

  searchGif(query: string){
    this.gifService.searchGifs(query);
  }
}
