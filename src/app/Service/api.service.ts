import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost:1200';
  constructor(private httpClient: HttpClient) {}
  getTrys(){
    return this.httpClient.get('${this.API_URL}/api/subadmin/sear/:id');
  }
}
