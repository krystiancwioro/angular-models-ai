import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Frauds} from '../interfaces/frauds';

@Injectable({
  providedIn: 'root'
})
export class YmlService {

  url = 'https://virtserver.swaggerhub.com/avedol97/simple-api/3.0.0';

  constructor(private http: HttpClient) {
  }

  public getAllModels(): Observable<any> {
    return this.http.post(this.url + '/wyszukaj_modele', {
    }).pipe(tap(console.log));
  }

  public getModelStatus(nameModel: string): Observable<any> {
    return this.http.get(this.url + '/pobierz_stan_modelu?nazwa_modelu=' + nameModel , {
    }).pipe(tap(console.log));
  }

  public getModelReport(nameModel: string): Observable<any> {
    // return this.http.get(this.url + '/' + nameModel + '.html' , {
    return this.http.get('https://pl.freepik.com/download-file/21742124' , {
    }).pipe(tap(console.log));
  }


  public deleteModel(nameModel: string): Observable<any> {
    return this.http.delete(this.url + '/usun_model?nazwa_modelu=' + nameModel)
      .pipe(tap(console.log));
  }

  public upload(file): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(this.url + '/dodaj_model', formData);
  }

  public calculateFrauds(frauds): Observable<any>{
    return this.http.post(this.url + '/oblicz_fraudy', frauds);
  }
}

