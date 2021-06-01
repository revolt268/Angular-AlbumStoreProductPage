import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Album } from './album';
import { HttpClient } from "@angular/common/http"
import { AlbumInfo } from './albuminfo';
import { Product } from './product';

@Injectable()
export class ProductService {

  private _albumUrl: string = '../assets/album.json';
  private _productsUrl = '../assets/products.json';

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<AlbumInfo>{
    return this._http.get(this._albumUrl)
      .map(response => <AlbumInfo>response.json());
  }

  getProducts(): Observable<Product[]>{
    return this._http.get(this._productsUrl)
      .map(response => <Product[]>response.json());
  }

}
