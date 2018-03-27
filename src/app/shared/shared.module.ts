import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrimaryButtonComponent} from './primary-button/primary-button.component';
import {CoreModule} from '../core/core.module';
import {LoadButtonComponent} from './components/load-button/load-button.component';
import {ExpansivePanelComponent} from './components/expansive-panel/expansive-panel.component';
import {ModalContentComponent} from './components/modal-content/modal-content.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [PrimaryButtonComponent, LoadButtonComponent, ExpansivePanelComponent, ModalContentComponent],
  exports: [PrimaryButtonComponent, LoadButtonComponent, ExpansivePanelComponent, ModalContentComponent],
  entryComponents: [ ModalContentComponent ]

})
export class SharedModule {
}
