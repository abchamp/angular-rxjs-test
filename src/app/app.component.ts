import {
  Component,
  OnInit,
  AfterContentInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { JsonPlaceholderTestService } from './json-placeholder-test.service';
import {
  from,
  of,
  map,
  concatMap,
  concat,
  mergeMap,
  fromEvent,
  startWith,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'my-app';
  @ViewChild('filterInput') filterElementRef!: ElementRef;

  constructor(private jsonPlaceholderTestService: JsonPlaceholderTestService) {}

  ngAfterViewInit(): void {
    fromEvent(this.filterElementRef.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        startWith(''),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(console.log);
  }

  getPost() {
    this.jsonPlaceholderTestService.getPost().subscribe((results) => {
      console.log(results);
    });
  }

  testConcatPost() {
    const series1$ = of('a', 'b');
    const series2$ = of('x', 'y');

    const result$ = concat(series1$, series2$);
    result$.subscribe(console.log);
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

    // from(request_data)
    //   .pipe(map((x) => this.jsonPlaceholderTestService.newPost(x)))
    //   .subscribe((v) => console.log(v));
    //
    // from(request_data)
    //   .pipe(concatMap((req) => this.jsonPlaceholderTestService.newPost(req)))
    //   .subscribe((saveResult) => console.log(saveResult));
    //
    from(request_data)
      .pipe(mergeMap((req) => this.jsonPlaceholderTestService.newPost(req)))
      .subscribe((saveResult) => console.log(saveResult));
    // this.jsonPlaceholderTestService
    //   .newPost(request_data)
    //   .subscribe((results) => {
    //     console.log(results);
    //   });
  }
}
