import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketsService {

  private BASE_URL = 'http://localhost:9898/expense-control-portal/api/v1/market';


  constructor(private httpClient: HttpClient) {
  }

  getMarket(id: number): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/${id}`);
  }

  createMarket(market: any): Observable<Object> {
    return this.httpClient.post(`${this.BASE_URL}`, market);
  }

  updateMarket(id: number, market: any): Observable<Object> {
    return this.httpClient.put(`${this.BASE_URL}/${id}`, market);
  }

  deleteMarket(id: number): Observable<any> {
    return this.httpClient.delete(`${this.BASE_URL}/${id}`, {responseType: 'text'});
  }

  getMarketList(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}`);
  }

}
