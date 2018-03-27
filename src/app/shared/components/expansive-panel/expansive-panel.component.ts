import {Component, ContentChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-expansive-panel',
  templateUrl: './expansive-panel.component.html',
  styleUrls: ['./expansive-panel.component.scss']
})
export class ExpansivePanelComponent implements OnInit {

  @ContentChild('header') header: HTMLElement;
  @ContentChild('content') content: HTMLElement;

  public contentFlag: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.contentFlag = !this.contentFlag;
  }

}
