import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngonchanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngoninit called');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngdocheck called');
  }

  ngAfterContentInit() {
    console.log('ngaftercontentinit called');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked() {
    console.log('ngaftercontentchecked called');
  }

  ngAfterViewInit() {
    console.log('ngafterviewinit called');
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngafterviewchecked called');
  }

  ngOnDestroy() {
    console.log('ngondestroy called');
  }

}
