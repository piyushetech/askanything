import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myModel: any;
 data:any = []
 list:any = []
  constructor(private http: HttpClient) { }

  ngOnInit() {      
      // Simple GET request with response type <any>
      this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
         
          this.data=data;
          console.log(this.data)
      })
  }

  add() {      
    this.list=[...this.list,this.myModel];
    console.log(this.list)
    this.myModel=null;
}
}
