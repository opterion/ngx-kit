import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-radop',
  templateUrl: './radio.component.html',
  styleUrls: ['../module-page.css'],
})
export class RadioComponent implements OnInit {
  selected = 'first';

  content: Content;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.content = data.content;
    });
  }
}
