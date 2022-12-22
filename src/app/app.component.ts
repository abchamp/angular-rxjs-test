import { Component } from '@angular/core';
import { JsonPlaceholderTestService } from './json-placeholder-test.service';
import { from, of, map } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  constructor(private jsonPlaceholderTestService: JsonPlaceholderTestService) {}

  getPost() {
    this.jsonPlaceholderTestService.getPost().subscribe((results) => {
      console.log(results);
    });
  }

  newPost() {
    let request_data = [
      {
        title: 'r1',
        body: 'r2',
        userId: 1,
      },
      {
        title: 'r2',
        body: 'r2',
        userId: 2,
      },
      {
        title: 'r3',
        body: 'r3',
        userId: 3,
      },
    ];

    //https://blog.angular-university.io/rxjs-higher-order-mapping/

    from(request_data)
      .pipe(map((x) => this.jsonPlaceholderTestService.newPost(x)))
      .subscribe((v) => console.log(v));
    //
    // this.jsonPlaceholderTestService
    //   .newPost(request_data)
    //   .subscribe((results) => {
    //     console.log(results);
    //   });
  }
}
