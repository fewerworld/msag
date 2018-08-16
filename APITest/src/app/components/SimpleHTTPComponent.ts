/*
 * Angular
 */
import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'simple-http',
  template: `
  <h2 class="ui header">
  <i class="settings icon"></i>
  <div class="content">API Request testing<div class="sub header">Internal Testing Only</div>
  </div>
  </h2>
  <div class="ui label">
  GET Request

  <div class="ui icon input">
  <input type="text" style="width:500px" placeholder="http://jsonplaceholder.typicode.com/posts/1" #getinput />
  <i class="inverted circular search link icon" (click)="makeRequest(getinput.value)"></i>
  </div>

  <div *ngIf="getLoading">loading...</div>
  <pre>{{getData | json}}</pre>
  </div>

  <br /> <br />

  <div class="ui label">
  Post Request
  
  <div class="ui icon input">
  <input type="text" style="width:500px" placeholder="http://jsonplaceholder.typicode.com/posts" #postinput />
  <i class="inverted circular search link icon" (click)="makePost(postinput.value)"></i>
  </div>

  <div *ngIf="loading">loading...</div>
  <pre>{{postData | json}}</pre>
  </div>
`
})
export class SimpleHTTPComponent {
  getData: Object;
  postData: Object;
  getLoading: boolean;
  postLoading: boolean;

  constructor(private http: Http) {
  }

  makeRequest(url: string): void {
    url = url || "http://jsonplaceholder.typicode.com/posts/1";
    this.getLoading = true;
    this.getData = "";
    this.http.request(url)
      .subscribe(
        (res: Response) => {
          this.getData = res.json();
        this.getLoading = false;
        },
        error => {
          this.getLoading = false;
          this.getData = `Get request Error : ${error}`;
        }

    );
  }

  makePost(url: string): void {
    url = url || "http://jsonplaceholder.typicode.com/posts";
    // url = url || "http://10.243.24.150:8980/js/a/demo";
    alert("post url: " + url);
    this.postLoading = true;
    this.http.post(url, JSON.stringify({
      oldPostName: 'OldName',
      postName : 'Name'
    })).subscribe((res: Response) => {
      this.postData = res.json();
      this.postLoading = false;
    },
    error => {
      this.postLoading = false;
      this.postData = `Post request Error : ${error}`;
    });
  }
}

