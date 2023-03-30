import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarvelAPIService {

  constructor(private http:HttpClient) { }

  BaseUrl = 'https://gateway.marvel.com:443/v1/public/characters?limit=10&ts=1&apikey=45a77c7e9de3d8d1446b50769dee7f5a&hash=632179a0bd14baf648c14a8641117fdb';


  allCharacters():Observable<any>{
    return this.http.get(this.BaseUrl);
  }


  allComics():Observable<any>
  {
    const comicUrl ='https://gateway.marvel.com:443/v1/public/comics?limit=10&ts=1&apikey=45a77c7e9de3d8d1446b50769dee7f5a&hash=632179a0bd14baf648c14a8641117fdb';
    ;
    return this.http.get(comicUrl);
  }


  allSeries():Observable<any>
  {
    const seriesUrl ='https://gateway.marvel.com:443/v1/public/series?limit=10&ts=1&apikey=45a77c7e9de3d8d1446b50769dee7f5a&hash=632179a0bd14baf648c14a8641117fdb';
    ;
    return this.http.get(seriesUrl);
  }


  getComicsByCharacter(characterId:string):Observable<any>
  {
    const comicByCharacterUrl = 'https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?ts=1&apikey=45a77c7e9de3d8d1446b50769dee7f5a&hash=00bce3801f14372275f5a6bbd6a88408';
    return this.http.get(comicByCharacterUrl);
  }

  getSeriesByCharacter(characterId:string):Observable<any>
  {
    const seriesByCharacterUrl = 'https://gateway.marvel.com:443/v1/public/characters/${characterId}/series?ts=1&apikey=45a77c7e9de3d8d1446b50769dee7f5a&hash=00bce3801f14372275f5a6bbd6a88408';
    return this.http.get(seriesByCharacterUrl);
  }

  getCharacterByName(characterName:string):Observable<any>
  {
    const characterBYNameUrl = 'https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&ts=1&apikey=45a77c7e9de3d8d1446b50769dee7f5a&hash=632179a0bd14baf648c14a8641117fdb';
    return this.http.get(characterBYNameUrl);
  }

}
