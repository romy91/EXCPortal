import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefundsService {

  private base_url = 'http://localhost:9898/expense-control-portal/api/v1/refunds';

  constructor(private httpClient: HttpClient) { }

  getRefund(id: number): Observable<any> {
    return this.httpClient.get(`${this.base_url}/${id}`);
  }

  createRefund(refund: any): Observable<Object> {
    return this.httpClient.post(`${this.base_url}`, refund);
  }

  updateRefund(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.base_url}/${id}`, value);
  }

  deleteRefund(id: number): Observable<any> {
    return this.httpClient.delete(`${this.base_url}/${id}`, { responseType: 'text' });
  }

  getRefundsList(): Observable<any> {
    return this.httpClient.get(`${this.base_url}`);
  }
}
