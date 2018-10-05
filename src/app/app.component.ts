import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iframe-test';
  src: SafeUrl = '';

  constructor(private sanitizer: DomSanitizer) {
    this.src = sanitizer.bypassSecurityTrustResourceUrl('http://localhost:9000/page');
  }
}
