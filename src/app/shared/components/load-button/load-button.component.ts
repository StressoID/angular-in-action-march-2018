import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.scss']
})
export class LoadButtonComponent {

  @Input() title: string;
  @Input() color: string;
  @Input() disabled: boolean;
  @Output() value: EventEmitter<boolean> = new EventEmitter();

  buttonClick() {
    this.value.emit(true);
  }
}
