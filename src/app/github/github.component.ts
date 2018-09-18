import { Component, OnInit } from '@angular/core';

import { GithubService } from '../services/github.service';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  data: any = {};
  constructor(private _svc: GithubService) { }

  ngOnInit() {
    // let obs = this.http.get('https://api.github.com/users/hwangct');
    // obs.subscribe( (response) => this.data = response);
    this._svc.getUserInfo('hwangct').subscribe(response => {
      this.data = response;
    });
  }

}
