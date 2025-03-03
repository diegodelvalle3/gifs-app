import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsListComponent } from "../../components/gifs-list/gifs-list.component";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'app-search-page',
  imports: [GifsListComponent],
  templateUrl: 'search-page.component.html',
  standalone: true
})

export default class SearchPageComponent {

  gifService = inject(GifService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string){
    this.gifService.searchGifs(query).subscribe( resp =>{
      this.gifs.set(resp);
    });
  }

}
