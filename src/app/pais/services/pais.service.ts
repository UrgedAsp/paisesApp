import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient) { }

  get httpParams(){
    return new HttpParams().set('fields','name;capital;alpha2Code;flag;population') ;
  }

  buscarPais(termino: string):Observable<Country[]>{
    const url = `${this._apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url, {params: this.httpParams});
    
  }

  buscarCapital(termino: string):Observable<Country[]>{
    const url = `${this._apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorAlpha(id: string):Observable<Country>{
    const url = `${this._apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string):Observable<Country[]>{
    const url = `${this._apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

}
