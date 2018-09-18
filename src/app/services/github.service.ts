import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class GithubService implements OnInit {

  private _url: string = 'https://api.github.com/users/hwangct';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getUserInfo(user: string) {
    return this.http.get(this._url);
  }
}
