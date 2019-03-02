import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://www.server.com/api/';


  constructor(private httpClient: HttpClient) {}
}
