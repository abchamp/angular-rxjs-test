import { Component } from '@angular/core';
import { JsonPlaceholderTestService } from './json-placeholder-test.service';
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
}
