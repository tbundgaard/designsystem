import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'kirby-list-showcase',
  templateUrl: './list-showcase.component.html',
  styleUrls: ['./list-showcase.component.scss'],
})
export class ListShowcaseComponent implements OnInit {
  exampleHtml: string = require('../../examples/list/list-example.component.html');

  sectionHeaderExampleHtml: string =
    '<GridLayout *kirbyListSectionHeader="let section" ios:height="50">...</GridLayout>';
  constructor() {}

  ngOnInit() {}
}
