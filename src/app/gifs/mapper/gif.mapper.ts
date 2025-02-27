import { Gif } from "../interfaces/gif.interfaces";
import { GiphyItem } from "../interfaces/gifphy.interfaces";

export class GifMapper {
  static mapGiphyItemToGif(giphyItem: GiphyItem): Gif{
    return{
      id: giphyItem.id,
      title: giphyItem.title,
      url: giphyItem.images.original.url
    }
  }

  static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[]{
    return items.map(this.mapGiphyItemToGif)
  }
}
