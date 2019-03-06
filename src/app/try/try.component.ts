import { Component, OnInit } from '@angular/core';
import { ApiService } from "../Service/api.service";

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {

  private trys: Array<object> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getTrys();
  }

  public getTrys() {
    this.apiService.getTrys().subscribe((data: Array<object>) => {
      this.trys = data;
      console.log(data);
    })
  }

}
