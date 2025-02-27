import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { GiphyResponse } from '../interfaces/gifphy.interfaces';

@Injectable({providedIn: 'root'})
export class GifService {

  private http = inject(HttpClient)

  loadTrendingGifs(){
    this.http
    .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
      },
    })
    .subscribe((resp) =>{
      console.log({resp})
    })
  }


}
