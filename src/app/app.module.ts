import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UiSwitchModule } from 'ngx-ui-switch';
import { OrderPipe } from 'ngx-order-pipe';
import { Globals } from './globals';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {DataTableModule} from "angular-6-datatable";

import { AppComponent } from './app.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { TableComponent } from './table/table.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentListComponent,
    TableComponent,
    ToolbarComponent,
    OrderPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    UiSwitchModule,
    Ng2SearchPipeModule,
    DataTableModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
