import { Component } from '@angular/core';
import { ApiService } from "./Service/api.service";
import { comments } from "./classes/comments";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})  
export class AppComponent {
  title = 'cmsprjct';

  constructor(private _ApiService: ApiService) {}

    stcomments:comments[];

   ngOnInit() {

       
      
   }

}
