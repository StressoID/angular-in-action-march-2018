import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrimaryButtonComponent} from './primary-button/primary-button.component';
import {CoreModule} from '../core/core.module';
import {LoadButtonComponent} from './components/load-button/load-button.component';
import {ExpansivePanelComponent} from './components/expansive-panel/expansive-panel.component';
import {ModalContentComponent} from './components/modal-content/modal-content.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {RouterModule} from '@angular/router';
import { SearchInputComponent } from './components/search-input/search-input.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CoreModule
  ],
  declarations: [
    PrimaryButtonComponent,
    LoadButtonComponent,
    ExpansivePanelComponent,
    ModalContentComponent,
    NavigationComponent,
    SearchInputComponent
  ],
  exports: [
    PrimaryButtonComponent,
    LoadButtonComponent,
    ExpansivePanelComponent,
    ModalContentComponent,
    NavigationComponent,
    SearchInputComponent
  ],
  entryComponents: [ModalContentComponent]

})
export class SharedModule {
}
