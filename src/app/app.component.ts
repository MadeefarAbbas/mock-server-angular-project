import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mock-server';
  users: Observable<any> = this.http.get('http://localhost:3000/api/users')
    .pipe(map((data: any) => {
      return [...data.data.users]
    }));

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.users.subscribe(data => {
      console.log(data)
    })
  }
}
