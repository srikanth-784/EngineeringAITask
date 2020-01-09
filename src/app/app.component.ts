import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EngineerAITask';
  response: any;
  tableData: any;
  Subscription: any;
  row: any;
  constructor(private ser: ApiService) { }

  ngOnInit() {
    this.Subscription = timer(0, 10000).pipe(switchMap(() => this.ser.getData())).subscribe(res => {
      this.response = res;
      this.tableData = this.response.hits;

    })
  }

  public selectRow(e) {
    this.row = e;
  }
}
